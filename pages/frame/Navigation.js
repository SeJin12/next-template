import Image from "next/image";
import Link from "next/link";
import { Badge, Container, Nav, Navbar } from "react-bootstrap";

const contents = [
  { href: "/", text: "Home" },
  { href: "/components/BasicReducer", text: "Reducer" },
  { href: "/components/Foo", text: "Foo" },
  { href: "/components/RouterPush", text: "Router" }
];

const Navigation = () => {
  return (
      <Navbar bg="dark" variant="dark" sticky="top">
        <Container>
          <Navbar.Brand href="#home"><Image src="/vercel.svg" width="50px" height="10px" alt="logo"/></Navbar.Brand>
          <Nav className="me-auto">
            {contents.map((content) => (
              // <Nav.Link key={content.href} href={content.href}>{content.text}</Nav.Link>
              <div key={content.href}>
                <Link href={content.href}><span>{content.text}</span></Link>
              </div>
            ))}
          </Nav>
        </Container>
        <style jsx>{`
          div {
            margin-left: 50px;
          }
          div span {
            color: white;
          }
          `}
        </style>
      </Navbar>
  );
};

export default Navigation;
