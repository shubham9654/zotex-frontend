import { useState } from "react";
import { useForm } from "react-hook-form";

//internal import
// import { AdminContext } from "../context/AdminContext";

const useLoginSubmit = () => {
  // const reduxDispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = ({ name, email, verifyEmail, password, role }) => {
    setLoading(true);
    
  };

  return {
    onSubmit,
    register,
    handleSubmit,
    errors,
    loading,
  };
};

export default useLoginSubmit;
