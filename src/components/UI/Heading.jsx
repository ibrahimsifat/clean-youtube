const Heading = ({ level }) => {
  return (
    <h2 className="flex flex-row flex-nowrap items-center my-8">
      <span className="flex-none block lg:text-xl  px-4 py-2.5 text-xs leading-none uppercase bg-white dark:bg-black bg-opacity-80 dark:bg-opacity-100 dark:border font-bold dark:text-white">
        {level}
      </span>
      <span
        className="flex-grow block border-t border-rose-300 dark:border-white/30"
        aria-hidden="true"
        role="presentation"
      ></span>
    </h2>
  );
};
export default Heading;
