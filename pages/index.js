import useSWR, { mutate } from "swr";
import { fetcherGet } from "@lib/http";
import MoiveCard from "@ui/MoiveCard";
import { useEffect, useState } from "react";

export default function Home() {
  const [page, setPage] = useState(1);

  const { data, mutate, error } = useSWR(
    `/api/searchMovie`,
    fetcherGet
  );

  if (error) return <div> {error.toString()} Error..!</div>;
  if (!data) return <div>Loading...</div>;
  console.log(data);
  return (
    <div>
      <input
        value={page}
        onChange={(e) => {
          setPage(e.target.value);
          console.log("page: ", e.target.value);
        }}
      />
      <button onClick={() => {
        // mutate( `/api/searchMovie`, {...data, name: 'abc'})
      }}>호출(SWR mutate)</button>
      <ul>
        {data
          .filter((d, index) => index % 3 == 0)
          .map((d) => (
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
}
