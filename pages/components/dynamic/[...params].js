import { useRouter } from "next/router";

export default function Data({ params }) {
  const router = useRouter();
  const [title] = params || [];

  // console.log("index: ", router);
  // console.log("params: ", params);
  // console.log("router.query: ", router.query);
  // console.log(router.query.params);
  return (
    <div>
      title: {title}
      <hr />
      id: {router.query.id}
    </div>
  );
}

export function getServerSideProps({ params: { params } }) {
  return {
    props: {
      params,
    },
  };
}
