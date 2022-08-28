import useSWR, { mutate } from "swr";
import { fetcherGet } from "@lib/http";
import Moive from "@ui/Moive";

export default function Home() {

  // const [page, setPage] = useState(1);
  const { data, mutate, error } = useSWR(`/api/hello`, fetcherGet);

  if (error) return <div> {error.toString()} Error..!</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <button onClick={() => mutate()}>호출(SWR mutate)</button>
      <ul>
        {data.filter((d, index) => index % 5 == 0).map((d) => (
          <li key={d.id}>
            <Moive title={d.title} overview={d.overview} poster_path={d.poster_path} release_date={d.release_date} />
          </li>
        ))}
      </ul>
      <style jsx>
        {`
          ul {
            list-style: none;
            column-count: 2;
          }
          li {
            margin: 10px;
            width: 400px;
          }
        `}
      </style>
    </div>
  );
}
