import Header from "./Header";
import Footer from "./Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainComponent from "./MainComponent";
import React from "react";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<MainComponent/>} />
          <Route path="/app1" element={<MainComponent/>} />
          <Route path="/app2" element={<MainComponent/>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
