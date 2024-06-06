
const Button = ({ handleClick, text }) => {
  return (
    <button
      className="px-4 py-2.5 mx-2.5 rounded-[10px] bg-black text-white font-medium font-poppins"
      onClick={() => handleClick()}
    >
      {text}
    </button>
  )
}

export default Button