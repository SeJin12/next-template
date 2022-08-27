import Link from "next/link";

const contents = [{ href: "/", text: "Home" }];

const Nav = () => {
  return (
    <ul>
      {contents.map((content) => (
        <li key={content.text}>
          <Link href={content.href}>
            <a>{content.text}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Nav;
