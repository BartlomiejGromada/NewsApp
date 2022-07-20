import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Pages from "./pages/Pages";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Pages />
    </BrowserRouter>
  );
}

export default App;
