import { useContext } from "react";
import { Select } from "@windmill/react-ui";

//internal import
import OrderServices from "@/services/OrderServices";
import { notifySuccess, notifyError } from "@/utils/toast";
import { SidebarContext } from "@/context/SidebarContext";

const SelectStatus = ({ id, order }) => {
  const { setIsUpdate } = useContext(SidebarContext);
  const handleChangeStatus = (id, status) => {
    OrderServices.updateOrder(id, { status: status })
      .then((res) => {
        notifySuccess(res.message);
        setIsUpdate(true);
      })
      .catch((err) => notifyError(err.message));
  };

  return (
    <>
      <Select
        onChange={(e) => handleChangeStatus(id, e.target.value)}
        className="h-8"
        disabled={order.paymentStatus !== "Success"}
      >
        <option value="status" defaultValue hidden>
          {order?.status}
        </option>
        <option defaultValue={order?.status === "Delivered"} value="Delivered">
          Delivered
        </option>
        <option defaultValue={order?.status === "Pending"} value="Pending">
          Pending
        </option>
        <option
          defaultValue={order?.status === "Processing"}
          value="Processing"
        >
          Processing
        </option>
        <option defaultValue={order?.status === "Cancel"} value="Cancel">
          Cancel
        </option>
      </Select>
    </>
  );
};

export default SelectStatus;
