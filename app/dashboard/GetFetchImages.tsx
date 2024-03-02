"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

const GetFetchImages = () => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("dog");
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const client_id = "xp9tvdiCEsmbTT1XKKCVCXf6ZhMmpmdCFlgiyeSMwcA";
  const fetchUrl = `https://api.unsplash.com/search/photos?client_id=${client_id}&query=${query}&page=${page}&order_by=popular&per_page=20`;



const fetchImages = () => {
    axios
      .get(fetchUrl, { headers: {} })
      .then((response) => {
        setData(response.data.results);
        setHasMore(false); 
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchImages();
  }, [query]);

  const searchImages = (e) => {
    if(e.keyCode === 13) {
        setQuery(e.target.value)
         setData([])
    }
  }

  return (
    <>
      <div>
        <input type="text" placeholder="Search for photo" onKeyDown={(e) => searchImages(e)}/>
      </div>

      <div>
        {data.map((data, key) => (
          <div key={key}>
            <img
              src={data.urls.small}
              className=""
              alt={data.alt_description}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default GetFetchImages;
