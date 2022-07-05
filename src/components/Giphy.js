import React, { useState, useEffect } from "react";
import axios from "axios";
import { nanoid } from "nanoid";
const Giphy = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    const fetchGiphyData = async () => {
      try {
        setIsLoading(true);
        const result = await axios("https://api.giphy.com/v1/gifs/trending", {
          params: {
            api_key: "jSgDMd629zG9yk9mCCcDYqDjmcVelHV6",
          },
        });
        console.log("Giphy Results: ", result?.data.data);
        setData(result?.data.data);
        setIsLoading(false);
      } catch (er) {
        console.log("JS catched an error: ", er);
      }
    };
    fetchGiphyData();
  }, []);
  return isLoading ? (
    <div>
      <h1>Loading...</h1>
    </div>
  ) : (
    <main className="container">
      <div
        style={{
          width: "100%",
          height: 80,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <input
          type="text"
          onChange={(e) => {
            try {
              //   console.log("before onChange: ", data);

              setSearchInput(e.target.value);
              setTimeout(async () => {
                const result = await axios(
                  "https://api.giphy.com/v1/gifs/search",
                  {
                    params: {
                      api_key: "jSgDMd629zG9yk9mCCcDYqDjmcVelHV6",
                      q: searchInput,
                    },
                  }
                );
                console.log("after onChange: ", result?.data.data);
                setData(result?.data.data);
              }, 4000);
            } catch (er) {}
          }}
          value={searchInput}
          placeholder="Search..."
        />
      </div>
      {data.map((element) => (
        <div key={nanoid()}>
          <img src={element?.images.fixed_height.url} alt="" />
          <h3>{element?.images.fixed_height.url}</h3>
        </div>
      ))}
    </main>
  );
};

export default Giphy;
