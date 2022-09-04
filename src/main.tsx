import "./index.css";

import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { PlayerContextProvider } from "./context/PlayerContext";
import ReactDOM from "react-dom/client";
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/js/bootstrap.js';

ReactDOM.createRoot(document.getElementById("root")!).render(
  <PlayerContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </PlayerContextProvider>
);
