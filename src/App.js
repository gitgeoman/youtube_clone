import "./App.css";
import Header from "./Header";
import RecomendedVideos from "./RecomendedVideos";
import Sidebar from "./Sidebar";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__page">
        <Sidebar />
        <RecomendedVideos />
      </div>

      {/* main section */}
    </div>
  );
}

export default App;
