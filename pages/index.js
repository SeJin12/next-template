import { useEffect } from "react";
import useSWR from "swr";
import { fetcherGet } from "../lib/http";
import styles from "../styles/Home.module.css";

export default function Home() {
  const { data, error } = useSWR(`/api/hello`, fetcherGet);

  if (error) return <div>Error..!</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div className={styles.container}>
      <ul>
        {data.map((d) => (
          <li key={d.market}>{d.korean_name}</li>
        ))}
      </ul>
    </div>
  );
}
