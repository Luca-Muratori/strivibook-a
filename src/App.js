import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import MyWelcome from "./components/MyWelcome";
import LatestReleases from "./components/LatestReleases";
import Warning from "./components/Warning";
import MyBadge from "./components/Badge";
import BookList from "./components/BookList.jsx";

function App() {
  return (
    <div>
      <Warning message="This is an alert" variant="danger" />
      <MyBadge variant="info" text="badge" />
      <MyNav />
      <MyWelcome />
      {/* <LatestReleases /> */}
      <BookList />
      <MyFooter />
    </div>
  );
}

export default App;
