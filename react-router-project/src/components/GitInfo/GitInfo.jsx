import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function GitInfo() {
  const [count, setCount] = useState(0);

  const gitInfo = useLoaderData();

  //   useEffect(() => {
  //     fetch("https://api.github.com/users/hiteshchoudhary")
  //       .then((response) => response.json())
  //       .then((responseData) => setCount(responseData.followers))
  //       .catch((err) => console.log(err));
  //   }, []);
  return (
    <div>
      <h1>Git follower : {gitInfo}</h1>
    </div>
  );
}

export default GitInfo;
