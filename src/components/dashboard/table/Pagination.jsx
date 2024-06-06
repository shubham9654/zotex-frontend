import { useState, useMemo } from "react";

export const Pagination = () => {
  const totalPages = 15;
  const onPageChange = () => {
    console.log("dfdf");
  };

  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
      onPageChange(newPage);
    }
  };

  const paginationRange = useMemo(() => {
    const totalPageCount = Math.ceil(totalPages);
    const totalPageNumbers = 2 + 2;

    if (totalPageNumbers >= totalPageCount) {
      return Array.from({ length: totalPageCount }, (_, i) => i + 1);
    }

    const leftSiblingIndex = Math.max(currentPage - 1, 1);
    const rightSiblingIndex = Math.min(currentPage + 1, totalPageCount);

    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2;

    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftItemCount = 2 + 2;
      return [
        ...Array.from({ length: leftItemCount }, (_, i) => i + 1),
        "...",
        totalPageCount,
      ];
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
      const rightItemCount = 2 + 2;
      const rightRange = Array.from(
        { length: rightItemCount },
        (_, i) => i + totalPageCount - rightItemCount + 1
      );
      return [1, "...", ...rightRange];
    }

    if (shouldShowLeftDots && shouldShowRightDots) {
      const middleRange = Array.from(
        { length: rightSiblingIndex - leftSiblingIndex + 1 },
        (_, i) => i + leftSiblingIndex
      );
      return [1, "...", ...middleRange, "...", totalPageCount];
    }
  }, [totalPages, currentPage]);

  return (
    <div className="my-7 flex items-center justify-between">
      <div className="text-[#000] font-poppinsRegular">
        10 out of 200 entries
      </div>
      <div className="flex items-center">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          className={`mx-[5px] w-10 h-10 inline-flex items-center justify-center rounded-full hover-within:shadow-lg ${currentPage !== 1 ? "bg-black text-white" : "bg-black"
            }`}
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
              onClick={() => handlePageChange(page)}
              className={`mx-[5px] w-10 h-10 inline-flex items-center justify-center rounded-full font-semibold font-poppinsSemiBold ${currentPage === page
                  ? "bg-black text-white"
                  : "text-black hover:!text-white hover:bg-black"
                }`}
            >
              {page}
            </button>
          ))}
        </div>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          className={`mx-[5px] w-10 h-10 inline-flex items-center justify-center rounded-full ${currentPage !== totalPages ? "bg-black text-white" : "bg-black"
            }`}
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
