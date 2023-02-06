import React from "react";

const Badge = ({ level }) => {
  return (
    <span className="bg-blue-100 text-md font-bold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
      <span className="font-medium">Noted: </span> {level}
    </span>
  );
};

export default Badge;
