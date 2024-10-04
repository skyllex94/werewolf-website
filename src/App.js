import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import CurrentApps from "./pages/CurrentApps";
import Mission from "./pages/Mission";
import FutureProjects from "./pages/FutureProjects";
import Villager from "./pages/Villager";
import Werewolf from "./pages/Werewolf";
import Seer from "./pages/Seer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/apps" element={<CurrentApps />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/projects" element={<FutureProjects />} />
        <Route
          path="/126c3cb75cb3fbac5432732b23eef6bd"
          element={<Villager />}
        />
        <Route
          path="/bbb3606b5cab898386e0d9590278068e"
          element={<Werewolf />}
        />
        <Route path="/34b81f08e80d23ea2454472421070786" element={<Seer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
