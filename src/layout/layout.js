import Header from "./header";

const Layout = ({ children }) => {
  return (
    <>
      <Header></Header>
      {children}
      <div>Footer</div>
    </>
  );
};

export default Layout;
