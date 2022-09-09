import { useRouter } from "next/router";
import Header from "pages/frame/Header";

export default function Data({ params }) {
  const router = useRouter();
  const [id, title] = params || [];

  console.log(router);

  return (
    <div>
      <Header title={title} />
      routerid: {id}
      <br></br>
      LinkId: {id}
      <hr />
      routerTitle: {router.query.title}
      <br></br>
      LinkTitle: {title}
      <hr />
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
