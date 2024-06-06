import { useState } from 'react';

const ImageUpload = () => {
  const [image, setImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="w-1/2">
      <label className="mb-[8px] flex items-center text-[#000] leading-6 font-medium font-poppins">
        Upload Image
      </label>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className="hidden"
        id="image-upload"
      />
      <label htmlFor="image-upload" className="block cursor-pointer rounded-[10px] shadow-[0px_2px_10px_rgba(201,201,201,0.25)]">
        {image ? (
          <img src={image} alt="Uploaded" className="w-full h-auto rounded-[10px]" />
        ) : (
          <div className="h-40 flex justify-center items-center rounded-[10px] bg-white">
            <span className="text-gray-400">Upload Image</span>
          </div>
        )}
      </label>
    </div>
  );
};

export default ImageUpload;
