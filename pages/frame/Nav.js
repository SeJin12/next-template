import Link from "next/link";

const contents = [{ href: "/", text: "Home" }, {href: "/components/BasicReducer", text:"Reducer"}];

const Nav = () => {
  return (
    <div className="container">
      <ul>
        {contents.map((content) => (
          <li key={content.text}>
            <Link href={content.href}>
              <a>{content.text}</a>
            </Link>
          </li>
        ))}
      </ul>
      <style jsx>
        {`
          .container {
            justify-content: center;
          }
          div {
            display: flex;
          }
          ul {
            column-count: 2;
          }
          li {
            list-style: none;
            text-align: center;
          }
          a {
            text-decoration: none;
          }
        `}
      </style>
    </div>
  );
};

export default Nav;
