import React, { Fragment, useState } from "react";
import { nanoid } from "nanoid";
import { useQuery } from "react-query";
import { fetchGiphyData } from "./fetcherQuery";
const Giphy = () => {
  const [searchInput, setSearchInput] = useState("");
  const { data, isLoading, refetch } = useQuery(
    "gighy",
    () => fetchGiphyData(searchInput),
    { refetchOnWindowFocus: false }
  );
  React.useEffect(() => {
    const searchTimer = setTimeout(() => {
      refetch();
    }, 3000);
    return () => clearTimeout(searchTimer);
  }, [searchInput]);
  if (isLoading) return <h2>Loading...</h2>;
  return (
    <Fragment>
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
          onChange={(e) => setSearchInput(e.target.value)}
          placeholder="Search..."
        />
      </div>
      <main
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {data?.data.map((element) => (
          <div key={nanoid()}>
            <img src={element?.images.fixed_height.url} alt="" />
          </div>
        ))}
      </main>
    </Fragment>
  );
};

export default Giphy;
