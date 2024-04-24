

const ActiveButton = ({ tapValue, activeValue, handleProductTap }) => {
  return (
    <button
      className={`inline-block px-4 py-2 text-base ${
        tapValue === activeValue &&
        "text-[#e0015e] border-[#e0015e] dark:text-[#e0015e] dark:border-[#e0015e] rounded-t-lg border-b-2"
      } focus:outline-none`}
      aria-current="page"
      onClick={() => handleProductTap(activeValue, false, tapValue)}
    >
      {activeValue}
    </button>
  );
};

export default ActiveButton;
