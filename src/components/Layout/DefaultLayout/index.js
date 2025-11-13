import Header from "./Header";
import SideBar from "./Sidebar";

function DefaultLayout({ children }) {
  return (
    <div>
      <Header />
      <div className="container">
        <SideBar />
      </div>
      <div className="content">{children}</div>
    </div>
  );
}
export default DefaultLayout;
