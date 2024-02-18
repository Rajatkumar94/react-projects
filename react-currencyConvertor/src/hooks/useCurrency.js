import { useEffect, useState } from "react";
import axios from "axios";

function useCurrency(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
        );
        // console.log(response.data[currency]);
        setData(response.data[currency]);
      } catch (error) {
        console.error("Error fetching currency data:", error);
      }
    };

    fetchData();
  }, [currency]);

  //   console.log("data",data);
  return data;
}

export default useCurrency;
