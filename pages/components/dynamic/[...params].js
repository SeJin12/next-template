import { useRouter } from "next/router";

export default function Data({ params }) {
  const router = useRouter();
  const [title, id] = params || [];

  console.log("index: ", router);
  return (
    <div>
      title: {title}
      <hr />
      id: {id}
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
