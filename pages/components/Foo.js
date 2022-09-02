import axios from "axios";
import useSWR from "swr";

const fetcher = (url, params, options) =>
  axios.post(url, params, options).then((res) => res);

const Foo = () => {
  const { data } = useSWR(["/api/searchMovie", { a: 1 }], fetcher);


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
