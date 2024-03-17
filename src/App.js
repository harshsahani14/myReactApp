import logo from "./logo.svg";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Cards } from "./components/Cards";
import { Filter } from "./components/Filter";
import { filterData, apiUrl } from "./data";
import { useEffect, useState } from "react";
import { Loader } from "./components/Loader";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  
  let initialData = {};

  let [courses, setCourses] = useState(initialData);

  let [loading, setLoading] = useState(true);

  let [category, setCategory] = useState("All");

  useEffect(() => {
    async function apiCall() {
      setLoading(true);
      try {
        let resp = await fetch(apiUrl);
        let data = await resp.json();

        setLoading(false);
        setCourses(data.data);
        toast.success("Welcome to my react app");
      } catch (e) {
        setLoading(false);
        toast.error("Could not load the application");
      }
    }

    apiCall();
  }, []);

  return (
    <div className="flex flex-col min-h-screen ">
      <Navbar></Navbar>

      <div className=" bg-slate-800 min-h-[700px]">
        <Filter
          data={filterData}
          category={category}
          setCategory={setCategory}
        ></Filter>

        <div className="w-11/12 max-w-[1200px] flex flex-wrap mx-auto justify-center items-center ">
          {loading ? (
            <Loader></Loader>
          ) : (
            <Cards
              courses={courses}
              category={category}
              setCategory={setCategory}
            ></Cards>
          )}
        </div>
      </div>

      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
