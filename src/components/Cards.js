import React from "react";
import { Card } from "./Card";
import { useState } from "react";

export const Cards = (props) => {
  let allCourses = [];

  let [likedCourses, setLikedCourses] = useState([]);

  let category = props.category;
  let setCategory = props.setCategory;

  function copyCourses() {
    if (category == "All") {
      Object.values(props.courses).forEach((courseCategory) => {
        courseCategory.forEach((course) => {
          allCourses.push(course);
        });
      });
    } else {
      allCourses = props.courses[category];
    }
  }

  copyCourses();

  return (
    <div className="flex flex-wrap w-11/12 pl-[90px] gap-x-3 gap-y-5 justify-center pb-5">
      {allCourses.map((course) => {
        return (
          <Card
            course={course}
            likedCourses={likedCourses}
            setLikedCourses={setLikedCourses}
          ></Card>
        );
      })}
    </div>
  );
};
