import Link from "next/link";
import { Badge } from "react-bootstrap";

const contents = [
  { href: "/", text: "Home" },
  { href: "/components/BasicReducer", text: "Reducer" },
  { href: "/components/Foo", text: "Foo" },
];

const Navigation = () => {
  return (
    <div className="container">
      <ul>
        {contents.map((content) => (
          <li key={content.text}>
            <Badge className="bg-white ">
              <Link href={content.href}>
                <a>{content.text}</a>
              </Link>{" "}
            </Badge>
          </li>
        ))}
      </ul>
      <style jsx>
        {`
          .container {
            justify-content: center;
            background-color: white;
          }
          div {
            display: flex;
          }
          ul {
            column-count: 3;
          }
          li {
            list-style: none;
            text-align: center;
          }
          a {
            text-decoration: none;
            font-size: 1rem;
          }
        `}
      </style>
    </div>
  );
};

export default Navigation;
