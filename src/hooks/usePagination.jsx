import React from "react";
import ReactPaginate from "react-paginate";

const UsePagination = ({ items, itemsPerPage, handlePageClick, pageCount }) => {
  return (
    <>
      {items?.length > itemsPerPage && (
        <ReactPaginate
          className="bg-gradient-to-r from-rose-100 via-white to-teal-100 bg-opacity-40 py-4 flex justify-center items-center font-bold my-10 space-x-3 text-md tm "
          containerClassName="bg-green-400 text-red-200"
          previousLinkClassName="px-2 py-4 rounded-l-full bg-gradient-to-r from-teal-200 to-transparent hover:bg-rose-100"
          nextLinkClassName="px-2 py-4 rounded-r-full bg-gradient-to-r from-transparent to-teal-200  hover:bg-rose-100"
          disabledLinkClassName="invisible "
          nextClassName=""
          breakLinkClassName="font-bold text-2xl text-teal-400"
          breakClassName="-mt-3"
          pageLinkClassName=" px-3 py-2   rounded-full"
          activeLinkClassName="bg-teal-100   "
          breakLabel="..."
          nextLabel="next>"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel={`<previous`}
          renderOnZeroPageCount={null}
        />
      )}
    </>
  );
};

export default UsePagination;
