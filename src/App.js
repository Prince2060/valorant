import Pages from './components/pages/Pages';
import './App.css';
import Signout from './components/signout/Signout';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Settings from './components/settings/Settings';
import Fuckoff from './components/fuckoff/Fuckoff';
import Play from './components/play/Play';
import Browser from './components/browser/Browser';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/valorant" element={<Pages />} />
          <Route path="/signout" element={<Signout />} />
          <Route path="/setting" element={<Settings />} />
          <Route path="/exit" element={<Fuckoff />} />
          <Route path="/close" element={<Pages />} />
          <Route path="/play" element={<Play />} />
          <Route path="/browser" element={<Browser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
