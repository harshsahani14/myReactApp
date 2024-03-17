import React from "react";
import { FcLike } from "react-icons/fc";
import { toast } from "react-toastify";
// import { filterData } from "../data";
import { FcLikePlaceholder } from "react-icons/fc";
import { useState } from "react";

export const Card = (props) => {

  const [likeControl,setLike] = useState(false);
  
  let course = props.course;

  let likedCourses = props.likedCourses;
  
  let setLikedCourses = props.setLikedCourses;
 

  function clickHandler() {

    setLike(!likeControl);

  
    if (likedCourses.includes(course.id)) {
      // Like removal
      setLikedCourses( (likedCourses) => likedCourses.filter( (id) => id !== course.id));

      toast.warning("Unliked Course");
    } else {
      // Like addition

      if (likedCourses.length == 0) {
        setLikedCourses([course.id]);
      } else {
        setLikedCourses((likedCourses) => [...likedCourses, course.id]);
      }
     
      toast.success("Liked course");
    }
  }

  return (
    <div className=" bg-slate-950 bg-opacity-60 w-[300px] rounded-md overflow-hidden">
      <div className=" relative">
        <img src={props.course.image.url}></img>

        <button
          className=" absolute right-1 rounded-full w-[40px] h-[40px] bg-white top-[135px] flex justify-center items-center"
          onClick={clickHandler}
        >
          
            { likeControl ? <FcLike fontSize={"1.5rem"}></FcLike>: <FcLikePlaceholder fontSize={"1.5rem"}></FcLikePlaceholder> }
   
          
        </button>
      </div>

      <div className="p-4">
        <p className="text-white font-bold text-lg">{props.course.title}</p>
        <p className="text-white font-semibold mt-3">
          {props.course.description}
        </p>
      </div>
    </div>
  );
};
