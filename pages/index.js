import useSWR, { mutate } from "swr";
import { fetcherGet } from "@lib/http";

export default function Home() {
  const { data, mutate, error } = useSWR(`/api/hello`, fetcherGet);

  if (error) return <div>Error..!</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <button onClick={() => mutate()}>호출</button>
      <ul>
        {data.map((d) => (
          <li key={d.market}>{d.korean_name}</li>
        ))}
      </ul>
      <style jsx>
        {`
          ul {
            list-style: none;
          }
        `}
      </style>
    </div>
  );
}
