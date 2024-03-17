import React from "react";

export const Filter = (props) => {
  let setCategory = props.setCategory;
  function filterCourses(title) {
    setCategory(title);
  }

  return (
    <div className="w-11/12 flex justify-center space-x-4 py-4 mx-auto">
      {props.data.map((obj) => {
        return (
          <button
            className={`text-lg bg-black text-white px-2 py-1 font-medium rounded-sm hover:opacity-50 border-2 
            ${obj.title===props.category ? `bg-opacity-60 border-white`: ` bg-opacity-40 border-transparent`}`}
            onClick={ () => filterCourses(obj.title)}
          >
            {obj.title}
          </button>
        );
      })}
    </div>
  );
};
