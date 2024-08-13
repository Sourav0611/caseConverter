import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TxtArea from "./components/TxtArea";

function App() {
  return (
    <>
      <Header heading="CaseConverter" />
      <div class="container">
        <TxtArea />
      </div>
      <Footer />
    </>
  );
}

export default App;
