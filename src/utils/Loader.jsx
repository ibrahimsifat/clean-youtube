import { useStoreState } from "easy-peasy";
import React from "react";
// import loading from "../assets/loading.gif";

const Loader = () => {
  const { layout } = useStoreState((state) => state.playlistLayout);
  const { data } = useStoreState((state) => state.playlist);
  const length = Object.keys(data).length || 8;
  const array = new Array(length).fill("hello");
  console.log(array);
  return (
    <div>
      <div className="sm:flex justify-between items-center mt-10 hidden  pb-10 ">
        <div
          data-placeholder
          className="mr-2 h-12 w-12 rounded-full  overflow-hidden relative bg-gray-200"
        ></div>
        <div className="ml-auto bg-white text-sm text-gray-500 leading-none border-2 border-white rounded-full inline-flex">
          <div
            data-placeholder
            className=" h-12 w-12 rounded-full  overflow-hidden relative bg-gray-200"
          ></div>
          <div
            data-placeholder
            className=" h-12 w-12 rounded-full  overflow-hidden relative bg-gray-200"
          ></div>
        </div>
      </div>
      <div
        className={
          layout == "list"
            ? "space-y-6"
            : "grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4"
        }
      >
        {array?.map((_, index) => (
          <SingleLoader2 key={index} />
        ))}
      </div>
    </div>
  );
};

export default Loader;

const SingleLoader2 = () => {
  const { layout } = useStoreState((state) => state.playlistLayout);
  return (
    <div className="  dark:text-white sm:m-0 m-4">
      <div
        className={`
        ${layout == "list" ? " w-full max-w-full flex " : ""}
      `}
      >
        <div
          className={
            layout == "list"
              ? " h-full w-48 flex-none bg-cover   overflow-hidden"
              : "w-full  h-auto lg:w-full flex-none bg-cover   overflow-hidden"
          }
        >
          <div
            data-placeholder
            class="h-52 w-full overflow-hidden relative bg-gray-200"
          ></div>
        </div>

        <div className=" dark:bg-gray-900 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal w-full">
          <div className="mb-8">
            <div class="flex flex-col p-4">
              <div class="flex">
                <div
                  data-placeholder
                  class=" flex h-5 w-5 overflow-hidden relative bg-gray-200 mr-1"
                ></div>
                <div
                  data-placeholder
                  class="flex h-5 w-48 overflow-hidden relative bg-gray-200"
                ></div>
              </div>
              <div class="flex mt-1">
                <div
                  data-placeholder
                  class="flex h-5 w-5 overflow-hidden relative bg-gray-200 mr-1"
                ></div>
                <div
                  data-placeholder
                  class="flex h-5 w-48 overflow-hidden relative bg-gray-200"
                ></div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div class="flex justify-between items-center p-4 w-full">
              <div
                data-placeholder
                class="mr-2 h-12 w-12 rounded-full  overflow-hidden relative bg-gray-200"
              ></div>

              <div
                data-placeholder
                class="mb-2 h-5 w-20 overflow-hidden relative bg-gray-200"
              ></div>
              <div
                data-placeholder
                class="mb-2 h-5 w-4 rounded-md overflow-hidden relative bg-gray-200"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
