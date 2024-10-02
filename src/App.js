import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import CurrentApps from "./pages/CurrentApps";
import Mission from "./pages/Mission";
import FutureProjects from "./pages/FutureProjects";
import Villager from "./pages/Villager";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/apps" element={<CurrentApps />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/projects" element={<FutureProjects />} />
        <Route path="/villager" element={<Villager />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
