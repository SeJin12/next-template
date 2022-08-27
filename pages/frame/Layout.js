import Header from "./Header";
import Nav from "./Nav";

const Layout = (props) => {
  return (
    <div>
      <Header />
      <Nav />
      <div>{props.children}</div>
    </div>
  );
};

export default Layout;
