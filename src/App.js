import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import CurrentApps from "./pages/CurrentApps";
import Mission from "./pages/Mission";
import FutureProjects from "./pages/FutureProjects";
import Villager from "./pages/Roles/Villager";
import Werewolf from "./pages/Roles/Werewolf";
import Seer from "./pages/Roles/Seer";
import Doctor from "./pages/Roles/Doctor";
import Priest from "./pages/Roles/Priest";
import Tanner from "./pages/Roles/Tanner";
import Cupid from "./pages/Roles/Cupid";
import Prince from "./pages/Roles/Prince";
import Bodyguard from "./pages/Roles/Bodyguard";
import CursedVillager from "./pages/Roles/CursedVillager";
import Hunter from "./pages/Roles/Hunter";
import Lycan from "./pages/Roles/Lycan";
import Witch from "./pages/Roles/Witch";
import AlphaWerewolf from "./pages/Roles/AlphaWerewolf";
import WolfCub from "./pages/Roles/WolfCub";

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
        <Route path="/f9f16d97c90d8c6f2cab37bb6d1f1992" element={<Doctor />} />
        <Route path="/e5ea56a64dedf72d7bfffbd4251d52bc" element={<Priest />} />
        <Route path="/6766992ca3827afeb1181bf1c123b230" element={<Tanner />} />
        <Route path="/c59fdcefd9c65f5471cdee9acbeb3c10" element={<Cupid />} />
        <Route path="/97c8f692a928a55577aaf6cd98c56bb5" element={<Prince />} />

        <Route
          path="/c79f034d0174707f425a0e523b7a76d5"
          element={<Bodyguard />}
        />
        <Route
          path="/d89e6a000cd7cd4f8270a17a95497fe8"
          element={<CursedVillager />}
        />
        <Route path="/5e409e09f43d85c6e61301149e4f803b" element={<Hunter />} />
        <Route path="/50b137850dcf8a520f48ef958e6b4e3c" element={<Lycan />} />
        <Route path="/1e5801f6c2ee2ba36fb7c41edab701e3" element={<Witch />} />
        <Route
          path="/e96301d78cf51cca1cc8bdc69072c4a0"
          element={<AlphaWerewolf />}
        />
        <Route path="/ab1f6afa66043c6763eab729c64bf14a" element={<WolfCub />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// const roleTypes: {
//     [key: string]: "good" | "bad" | "independent";
//   } = {
//     Villager: "good",
//     Werewolf: "bad",
//     Seer: "good",
//     Doctor: "good",
//     Tanner: "independent",
//     Cupid: "good",
//     Prince: "good",
//     Bodyguard: "good",
//     "Cursed Villager": "good",
//     Priest: "good",
//     Hunter: "good",
//     Lycan: "good",
//     Witch: "good", // could be neutral as well
//     "Alpha Werewolf": "bad",
//     "Wolf Cub": "bad",
//   };
