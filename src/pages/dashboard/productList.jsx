
import {
  Table,
  TableHeader,
  TableCell,
  TableFooter,
  TableContainer,
  Pagination
} from "@windmill/react-ui";
import ProductTable from "../../components/table/productTable";

const ProductList = () => {
  return (
    <>
      <div className="my-6 text-lg font-bold text-gray-700 dark:text-gray-300">Products Page</div>

      <TableContainer className="overflow-x-auto">
        <Table >
          <TableHeader >
            <tr>
              <TableCell>
                {/* <CheckBox
                    type="checkbox"
                    name="selectAll"
                    id="selectAll"
                    isChecked={isCheckAll}
                    handleClick={handleSelectAll}
                  /> */}
              </TableCell>
              <TableCell>Product Details</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Sale Price</TableCell>
              <TableCell>Stock</TableCell>
              <TableCell>Actions</TableCell>
            </tr>
          </TableHeader>
          <ProductTable />
        </Table>
        <TableFooter>
          <Pagination
            totalResults={25}
            resultsPerPage={10}
            onChange={() => { }}
            label="Product Page Navigation"
          />
        </TableFooter>
      </TableContainer>
    </>
  );
};

export default ProductList;
