import useSWR from "swr";
import { fetcherPost } from "@lib/http";

// const fetcher = (url, params, options) =>
//   axios.post(url, params, options).then((res) => res);

const Foo = () => {
  const { data } = useSWR(["/api/searchMovie", { a: 1 }], fetcherPost);


  if (data) {
    console.log(data);
  }

  return (
    <div>
      <button onClick={() => console.log(data)}>btn</button>
      Foo
    </div>
  );
};

export default Foo;
