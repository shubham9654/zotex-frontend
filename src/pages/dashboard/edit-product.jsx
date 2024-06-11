import { useForm } from "react-hook-form";

import ImageUpload from "../../components/dashboard/ui/ImageInput";
import { Input } from "../../components/dashboard/ui/Input";

const EditProduct = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="w-full min-h-[calc(100vh-290px)] flex flex-col">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid lg:grid-cols-2 gap-x-10">
          <div className="flex flex-col gap-y-4">
            <Input
              name="name"
              label="Product Name"
              placeholder="Enter Product Name"
              register={register}
              errors={errors}
            />
            <Input
              name="description"
              label="Product Description"
              placeholder="Enter Description"
              inputType="area"
              register={register}
              errors={errors}
            />
            <Input
              name="mrp"
              label="MRP Price"
              placeholder="Enter MRP"
              type="number"
              register={register}
              errors={errors}
            />
            <Input
              name="selling_price"
              label="Selling Price"
              placeholder="Enter Selling Price"
              type="number"
              register={register}
              errors={errors}
            />
          </div>
          <div className="flex">
            <ImageUpload />
          </div>
        </div>
        <input
          type="submit"
          value="Submit"
          className="mt-[20px] px-4 py-2.5 rounded-[10px] bg-black text-white font-medium font-poppins"
        />
      </form>
    </div>
  );
};

export default EditProduct;
