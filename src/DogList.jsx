import Dog from "./Dog";
import {Route, Routes, Navigate} from "react-router-dom";
import DogNav from "./DogNav";
function DogList({ dogs }) {
  return (
    <>
        <DogNav dogs={dogs} />
    </>
  );
}

export default DogList