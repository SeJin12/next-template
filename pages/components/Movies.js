import { fetcherGet } from "@lib/http";
import MoiveCard from "@ui/MoiveCard";
import React, { useEffect } from "react";
import useSWR from "swr";

const Movies = ({ page }) => {
  const { data, mutate, error } = useSWR(
    `/api/searchMovie/${page}`,
    fetcherGet
  );

  if (error) return <div> {error.toString()} Error..!</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <button
        onClick={() => {
          console.log(data);
          mutate();
        }}
      >
        호출(SWR mutate) 그리고 현재 데이터 확인
      </button>
      <ul>
        {data &&
          data.results.map((d) => (
            <li key={d.id}>
              <MoiveCard
                title={d.title}
                overview={d.overview}
                poster_path={d.poster_path}
                release_date={d.release_date}
              />
            </li>
          ))}
      </ul>
      <style jsx>
        {`
          ul {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
          }
          li {
            margin: 20px;
            list-style: none;
          }
        `}
      </style>
    </div>
  );
};

export default Movies;
