import ImageUpload from "../../components/dashboard/ui/ImageInput"
import { Input } from "../../components/dashboard/ui/Input"

const EditProduct = () => {
  return (
    <div className="w-full min-h-[calc(100vh-290px)] flex flex-col">
      <div className="grid lg:grid-cols-2 gap-x-10">
        <div className="flex flex-col gap-y-4">
          <Input label="Product Name" placeholder="Enter Product Name" />
          <Input label="Product Description" placeholder="Enter Description" inputType="area" />
          <Input label="MRP Price" placeholder="Enter MRP" />
          <Input label="Selling Price" placeholder="Enter Selling Price" />
        </div>
        <div className="flex">
          <ImageUpload />
        </div>
      </div>
    </div>
  )
}

export default EditProduct