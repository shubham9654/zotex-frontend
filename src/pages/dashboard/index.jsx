import axios from "axios";
import dayjs from "dayjs";
import { toast } from "react-toastify";
import { useDebounce } from "use-debounce";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Button from "../../components/dashboard/ui/Button";
import DialogBox from "../../components/dashboard/ui/DialogBox";
import { Table } from "../../components/dashboard/table/Table";
import { tableStatusValue } from "../../data/tableData";
import { SearchBar } from "../../components/dashboard/SearchBar";
import { Pagination } from "../../components/dashboard/table/Pagination";
import { useProduct } from "../../stores/product.store";
import { useDialog } from "../../stores/dialog.store";

const Dashboard = () => {
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue] = useDebounce(searchText, 1000);

  const { toggleDialog } = useDialog((state) => state);
  const {
    productList,
    totalCount,
    isLoading,
    getAllProducts,
    setIsEditProduct,
    selectedProduct,
    setSelectedProduct,
  } = useProduct((state) => state);

  const columns = [
    {
      Header: "S No",
      accessor: "sno",
      minWidth: 50,
      Cell: ({ row }) => (
        <span>{(currentPage - 1) * 10 + (row.index + 1)}</span>
      ),
    },
    {
      Header: "Product Name",
      accessor: "name",
      minWidth: 150,
      Cell: ({ row }) => (
        <div className="flex items-center gap-x-2">
          {row.original?.images?.length > 0 && (
            <img
              src={`${import.meta.env.VITE_API_BASE_URL}image/${
                row.original?.images[0]
              }`}
              className="w-[32px] h-[32px] rounded-full"
            />
          )}
          <span>{row.original.name}</span>
        </div>
      ),
    },
    { Header: "Product Description", accessor: "description", minWidth: 200 },
    {
      Header: "Categories",
      accessor: "categories",
      minWidth: 130,
      Cell: ({ row }) => (
        <span>{row.original.categories.map((u) => u.name).join(", ")}</span>
      ),
    },
    {
      Header: "MRP",
      accessor: "mrp",
      minWidth: 130,
      Cell: ({ row }) => <span>₹ {row.original.price?.mrp}</span>,
    },
    {
      Header: "Selling Price",
      accessor: "sellingPrice",
      minWidth: 130,
      Cell: ({ row }) => <span>₹ {row.original.price?.sellingPrice}</span>,
    },
    {
      Header: "Status",
      accessor: "status",
      minWidth: 150,
      Cell: ({ row }) => (
        <span
          className="min-w-[95px] px-3 py-1 inline-flex justify-center rounded-[6px] text-xs font-medium font-poppins"
          style={{
            backgroundColor: tableStatusValue[row.original.status]?.bgColor,
          }}
        >
          {row.original.status}
        </span>
      ),
    },
    {
      Header: "Created At",
      accessor: "createdAt",
      minWidth: 160,
      Cell: ({ row }) => (
        <span>
          {dayjs(row.original.createdAt).format("hh:mm, DD MMM YYYY")}
        </span>
      ),
    },
    {
      Header: "Last Updated At",
      accessor: "updatedAt",
      minWidth: 160,
      Cell: ({ row }) => (
        <span>
          {dayjs(row.original.updatedAt).format("hh:mm, DD MMM YYYY")}
        </span>
      ),
    },
    {
      Header: "Actions",
      accessor: "actions",
      minWidth: 60,
      Cell: ({ row }) => (
        <span className="flex items-center justify-center gap-2">
          <Link
            to="/dashboard/edit-product"
            onClick={() => {
              setIsEditProduct(true);
              setSelectedProduct(row.original);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
              />
            </svg>
          </Link>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-5 cursor-pointer"
            onClick={() => {
              toggleDialog(true);
              setSelectedProduct(row.original);
            }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
            />
          </svg>
        </span>
      ),
    },
  ];

  const handleAddProduct = () => {
    navigate("/dashboard/edit-product");
  };

  const handleDelete = async () => {
    try {
      const data = await axios.delete(
        `${import.meta.env.VITE_API_BASE_URL}product/${selectedProduct._id}`
      );
      toggleDialog(false);
      toast.success(data.data.message);
      getAllProducts({ page: currentPage, search: searchValue });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (searchText.length === 1) {
      setCurrentPage(1);
    }
  }, [searchText?.length]);

  useEffect(() => {
    getAllProducts({ page: currentPage, search: searchValue });
  }, [currentPage, searchValue]);

  return (
    <>
      <div className="w-full flex flex-col">
        <div className="w-full py-[20px] px-2 md:!px-[24px] mb-[30px] overflow-x-auto rounded-[10px] bg-white shadow-[0px_4px_15px_rgba(171,171,171,0.25)]">
          <div className="mb-4 flex items-center justify-between">
            <SearchBar searchText={searchText} setSearchText={setSearchText} />
            <Button text="+ Add Product" handleClick={handleAddProduct} />
          </div>
          <Table
            columns={columns}
            data={productList}
            displayBlock={true}
            isLoading={isLoading}
          />
          <div>
            <Pagination
              totalCount={totalCount}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </div>
        </div>
      </div>
      <DialogBox
        title="Delete Product"
        message="Are you sure you want to delete product ?"
        handleDelete={handleDelete}
      />
    </>
  );
};

export default Dashboard;
