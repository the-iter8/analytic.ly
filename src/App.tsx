import Navbar from "./views/Navbar";
import Sidebar from "./views/Sidebar";
import Main from "./views/Main";
export default function App() {
  return (
    <>
      <Navbar />
      <div style={{ display: "flex" }}>
        <Sidebar />
        <Main />
      </div>
    </>
  );
}
