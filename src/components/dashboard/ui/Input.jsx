export const Input = ({
  type,
  name,
  label,
  isDisable,
  placeholder,
  inputType,
  register,
  errors
}) => {
  return (
    <div className="w-full flex flex-col">
      <label className="mb-[8px] flex items-center leading-6 font-medium font-poppins">
        <span className="mr-1 text-[#000]">{label}</span>
      </label>
      {inputType === "area" ? (
        <textarea
          className="px-2 py-2 !min-h-[120px] !h-[120px] text-[#353535] rounded-[10px] resize-none shadow-[0px_2px_10px_rgba(201,201,201,0.25)] font-poppinsRegular leading-6 border-0 border-none focus:border-none focus:outline-none bg-white"
          placeholder={placeholder}
          maxLength={700}
          {...register(name, {
            required: true,
          })}
        />
      ) : (
        <input
          className="px-2 max-h-[47px] !h-[47px] text-[#353535] rounded-[10px] shadow-[0px_2px_10px_rgba(201,201,201,0.25)] font-poppinsRegular leading-6 border-0 border-none focus:border-none focus:outline-none bg-white"
          placeholder={placeholder}
          type={type}
          disabled={isDisable}
          maxLength={200}
          max={10000}
          {...register(name, {
            required: true,
          })}
        />
      )}
      {errors[name] && <p className="text-[13px] text-[#FF4343]">{name} is required!</p>} 
    </div>
  );
};
