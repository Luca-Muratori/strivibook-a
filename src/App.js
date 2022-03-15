import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import MyWelcome from "./components/MyWelcome";
import LatestReleases from "./components/LatestReleases";

function App() {
  return (
    <div>
      <MyNav />
      <MyWelcome />
      <LatestReleases />
      <MyFooter />
    </div>
  );
}

export default App;
