import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Loader from "../components/Loader";
import Fetch from "../components/Fetch";

function App() {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  return (
    <>
      <Header></Header>
      <Fetch />
      {fetchStatus.isFetching ? <Loader /> : <Outlet />}
      <Footer></Footer>
    </>
  );
}

export default App;
