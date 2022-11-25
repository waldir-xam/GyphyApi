import React from "react";

const GetGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=fDRSrQobpCaXcJXfCyWlL5Gi061Rrz5b&q=${category}&limit=20`;
  const resp = await fetch(url);
  const data = await resp.json();

  console.log(resp)
};
export default GetGifs;
