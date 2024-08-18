import Header from "./Header";
import Footer from "./Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainComponent from "./MainComponent";
import React, { lazy, Suspense } from "react";

const FeatureApp = lazy(() => import("app1/App"));

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/feature/*" element={<FeatureApp standalone={false} />} />
            <Route path="/app2" element={<MainComponent />} />
          </Routes>
          <Footer />
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
