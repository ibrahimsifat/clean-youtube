import React from "react";
import ReactPaginate from "react-paginate";

const UsePagination = ({ items, itemsPerPage, handlePageClick, pageCount }) => {
  return (
    <>
      {items?.length > itemsPerPage && (
        <ReactPaginate
          className="bg-gradient-to-r from-rose-50 dark:from-black via-white to-teal-50 bg-opacity-40  py-4 flex justify-center items-center font-bold my-10 space-x-3 text-md tm dark:text-white border-2 dark:border-none"
          previousLinkClassName=" hover:bg-teal-100 px-3 py-2 rounded hover:dark:text-black"
          nextLinkClassName=" hover:bg-teal-100 px-3 py-2 rounded hover:dark:text-black"
          disabledLinkClassName="invisible "
          nextClassName=""
          breakLinkClassName="font-bold text-2xl text-teal-400"
          breakClassName="-mt-3"
          pageLinkClassName=" px-3 py-2 rounded"
          activeLinkClassName="bg-teal-100  dark:text-black "
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
