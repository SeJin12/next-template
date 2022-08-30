import Header from "./Header";
import Navigation from "./Navigation";

const Layout = (props) => {
  return (
    <div>
      <Header />
      <Navigation />
      <div>{props.children}</div>
    </div>
  );
};

export default Layout;
