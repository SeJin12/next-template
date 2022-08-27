import Link from "next/link";

const contents = [{ href: "/", text: "Home" }];

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
          li {
            list-style: none;
          }
        `}
      </style>
    </div>
  );
};

export default Nav;
