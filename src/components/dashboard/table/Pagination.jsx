export const Pagination = ({ totalCount, currentPage, setCurrentPage }) => {
  const totalPages = Math.ceil(totalCount / 10);

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const generatePaginationRange = () => {
    const totalPageCount = totalPages;
    const leftBound = Math.max(currentPage - 1, 1);
    const rightBound = Math.min(currentPage + 1, totalPageCount);

    let pages = [];
    for (let i = leftBound; i <= rightBound; i++) {
      pages.push(i);
    }
    if (leftBound > 2) {
      pages.unshift("...");
      pages.unshift(1);
    }
    if (rightBound < totalPageCount - 1) {
      pages.push("...");
      pages.push(totalPageCount);
    }
    return pages;
  }

  const paginationRange = generatePaginationRange();

  return (
    <div className="my-7 flex items-center justify-between">
      <div className="text-[#000] font-poppinsRegular">
        {`Showing ${(currentPage - 1) * 10 + 1}-${Math.min(
          currentPage * 10,
          totalCount
        )} of ${totalCount} entries`}
      </div>
      <div className="flex items-center">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          className={`mx-[5px] w-10 h-10 inline-flex items-center justify-center rounded-full hover-within:shadow-lg ${currentPage !== 1 ? "bg-black text-white" : "bg-black opacity-50 cursor-default"
            }`}
          disabled={currentPage === 1}
        >
          <svg className="w-5 h-5 -ml-1" viewBox="0 0 20 20" fill="#fff">
            <path
              fillRule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div className="relative inline-flex items-center">
          {paginationRange.map((page, index) => (
            <button
              key={index}
              onClick={() =>
                handlePageChange(typeof page === "number" ? page : currentPage)
              }
              className={`mx-[5px] w-10 h-10 inline-flex items-center justify-center rounded-full font-semibold font-poppinsSemiBold ${currentPage === page
                  ? "bg-black text-white"
                  : "text-black hover:!text-white hover:bg-black hover:opacity-50"
                }`}
            >
              {page}
            </button>
          ))}
        </div>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          className={`mx-[5px] w-10 h-10 inline-flex items-center justify-center rounded-full ${currentPage !== totalPages ? "bg-black text-white" : "bg-black opacity-50 cursor-default"
            }`}
          disabled={currentPage === totalPages}
        >
          <svg className="w-5 h-5 -ml-1" viewBox="0 0 20 20" fill="#fff">
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
