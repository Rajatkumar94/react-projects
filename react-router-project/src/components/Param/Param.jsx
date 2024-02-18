import React from "react";
import { useParams } from "react-router-dom";

function Param() {
  let {num} = useParams();
  return <div>The input is : {num}</div>;
}

export default Param;
