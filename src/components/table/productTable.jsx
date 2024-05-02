import {
  Avatar,
  TableBody,
  TableCell,
  TableRow,
} from "@windmill/react-ui";

import { productData } from "./data";
import CheckBox from "../form/others/CheckBox";
import { FiEdit } from "react-icons/fi";

const getNumberTwo = (value = 0) => {
  return parseFloat(value || 0).toFixed(2);
};

const ProductTable = ({ isCheck, setIsCheck }) => {

  const handleClick = (e) => {
    const { id, checked } = e.target;
    setIsCheck([...isCheck, id]);
    if (!checked) {
      setIsCheck(isCheck.filter((item) => item !== id));
    }
  };

  return (
    <>
      <TableBody>
        {productData?.products?.map((product, i) => (
          <TableRow key={i + 1}>
            <TableCell>
              <CheckBox
                type="checkbox"
                name={product?.title?.en}
                id={product._id}
                handleClick={handleClick}
                isChecked={isCheck?.includes(product._id)}
              />
            </TableCell>

            <TableCell>
              <div className="flex items-center">
                {product?.image[0] ? (
                  <Avatar
                    className="hidden p-1 mr-2 md:block bg-gray-50 shadow-none"
                    src={product?.image[0]}
                    alt="product"
                  />
                ) : (
                  <Avatar
                    src={`https://res.cloudinary.com/ahossain/image/upload/v1655097002/placeholder_kvepfp.png`}
                    alt="product"
                  />
                )}
                <div>
                  <h2
                    className={`text-sm font-medium ${product?.title.length > 30 ? "wrap-long-title" : ""
                      }`}
                  >
                    {product?.title?.en?.substring(0, 28)}
                  </h2>
                </div>
              </div>
            </TableCell>

            <TableCell>
              <span className="text-sm">
                {product?.category?.name?.en}
              </span>
            </TableCell>

            <TableCell>
              <span className="text-sm font-semibold">
                {/* {currency} */}
                {product?.isCombination
                  ? getNumberTwo(product?.variants[0]?.originalPrice)
                  : getNumberTwo(product?.prices?.originalPrice)}
              </span>
            </TableCell>

            <TableCell>
              <span className="text-sm font-semibold">
                {/* {currency} */}
                {product?.isCombination
                  ? getNumberTwo(product?.variants[0]?.price)
                  : getNumberTwo(product?.prices?.price)}
              </span>
            </TableCell>

            <TableCell>
              <span className="text-sm">{product.stock}</span>
            </TableCell>

            <TableCell className="">
              <FiEdit />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </>
  );
};

export default ProductTable;
