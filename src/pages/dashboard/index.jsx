import dayjs from "dayjs";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import Button from "../../components/dashboard/ui/Button";
import { Table } from "../../components/dashboard/table/Table";
import { tableStatusValue } from "../../data/tableData";
import { SearchBar } from "../../components/dashboard/SearchBar";
import { Pagination } from "../../components/dashboard/table/Pagination";
import { useProduct } from "../../stores/product.store";

const Dashboard = () => {
  const navigate = useNavigate();
  const { productList, getAllProducts, totalCount, isLoading } = useProduct(
    (state) => state
  );

  const columns = [
    { Header: "S No", accessor: "sno", minWidth: 50 },
    { Header: "Product Name", accessor: "name", minWidth: 150 },
    { Header: "Product Description", accessor: "description", minWidth: 200 },
    {
      Header: "Categories",
      accessor: "categories",
      minWidth: 130,
      Cell: ({ row }) => (
        <div>{row.original.categories.map((u) => u.name).join(", ")}</div>
      ),
    },
    {
      Header: "MRP",
      accessor: "mrp",
      minWidth: 130,
			Cell: ({ row }) => (
        <div>₹ {row.original.price?.mrp}</div>
      ),
    },
    { Header: "Selling Price", accessor: "sellingPrice", minWidth: 130, Cell: ({ row }) => (
			<div>₹ {row.original.price?.sellingPrice}</div>
		), },
    {
      Header: "Status",
      accessor: "status",
      minWidth: 150,
      Cell: ({ row }) => (
        <div
          className="min-w-[95px] px-3 py-1 inline-flex justify-center rounded-[6px] text-xs font-medium font-poppins"
          style={{
            backgroundColor: tableStatusValue[row.original.status]?.bgColor,
          }}
        >
          {row.original.status}
        </div>
      ),
    },
    {
      Header: "Created At",
      accessor: "createdAt",
      minWidth: 160,
      Cell: ({ row }) => (
        <div>{dayjs(row.original.createdAt).format("hh:mm, DD MMM YYYY")}</div>
      ),
    },
    {
      Header: "Last Updated At",
      accessor: "updatedAt",
      minWidth: 160,
      Cell: ({ row }) => (
        <div>{dayjs(row.original.updatedAt).format("hh:mm, DD MMM YYYY")}</div>
      ),
    },
    {
      Header: "Actions",
      accessor: "actions",
      minWidth: 60,
      Cell: () => (
        <div className="flex items-center justify-center gap-2">
          <Link to="/dashboard/edit-product">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-pencil cursor-pointer"
            >
              <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
              <path d="m15 5 4 4" />
            </svg>
          </Link>
          {/* <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-eye cursor-pointer"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg> */}
        </div>
      ),
    },
  ];

  const handleAddProduct = () => {
    navigate("/dashboard/edit-product");
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <div className="w-full flex flex-col ">
      <div className="w-full py-[20px] px-2 md:!px-[24px] mb-[30px] overflow-x-auto rounded-[10px] bg-white shadow-[0px_4px_15px_rgba(171,171,171,0.25)]">
        <div className="mb-4 flex items-center justify-between">
          <SearchBar />
          <Button text="+ Add Product" handleClick={handleAddProduct} />
        </div>
        <Table columns={columns} data={productList} displayBlock={true} isLoading={isLoading} />
        <div>
          <Pagination totalCount={totalCount} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
