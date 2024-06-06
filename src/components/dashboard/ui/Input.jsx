const messageTypeParameter = {
  success: {
    icon: '',
    color: '#007813'
  },
  error: {
    icon: "",
    color: '#FF4343'
  }
};

export const Input = ({ icon, label, isImportant, height, isDisable, placeholder, inputMessage, inputMessageType, value, inputType, handleInput }) => {
  return (
    <div className="w-full flex flex-col">
      <label className="mb-[8px] flex items-center leading-6 font-medium font-poppins">
        {
          icon && <img
            className="max-h-[22px] mr-1.5 object-contain"
            alt="input_icon"
            src={icon}
          />
        }
        <span className="mr-1 text-[#000]">{label}</span>
        {isImportant && <span className="text-[#EA0000]">*</span>}
      </label>
      {
        inputType === "area" ? (
          <textarea
            className="px-2 py-2 text-[#353535] rounded-[10px] resize-none shadow-[0px_2px_10px_rgba(201,201,201,0.25)] font-poppinsRegular leading-6 focus:outline-none bg-white"
            placeholder={placeholder}
            disabled={isDisable}
            value={value}
            style={{ minHeight: '120px' }} 
            onChange={(event) => handleInput && handleInput({ value: event.target.value, type: inputType })}
          />
        ) : (
          <input
            className="px-2 text-[#353535] rounded-[10px] shadow-[0px_2px_10px_rgba(201,201,201,0.25)] font-poppinsRegular leading-6 focus:outline-none bg-white"
            style={{
              height: height || '47px'
            }}
            placeholder={placeholder}
            disabled={isDisable}
            value={value}
            onChange={(event) => handleInput && handleInput({ value: event.target.value, type: inputType })}
          />

        )
      }
      {
        inputMessage && inputMessageType && (
          <div
            style={{
              color: messageTypeParameter[inputMessageType].color
            }}
            className="mt-2.5 flex items-center text-sm font-poppinsRegular"
          >
            <img className="mr-1.5" alt="input_message_type_icon" src={messageTypeParameter[inputMessageType].icon} />
            <span className="inline-flex items-center">{inputMessage}</span>
          </div>
        )
      }
    </div>
  );
};