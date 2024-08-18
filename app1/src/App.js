import React, { Suspense, useState, useTransition } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import FeatureHome from "./FeatureHome";
import FeatureAbout from "./FeatureAbout";

function App1Content() {
  const location = useLocation();
  const [isPending, startTransition] = useTransition();
  const [currentPath, setCurrentPath] = useState(location.pathname);

  const isStandalone = !currentPath.startsWith("/feature");
  const basePath = isStandalone ? "" : "/feature";

  const handleNavigation = (path) => {
    startTransition(() => {
      setCurrentPath(path);
    });
  };

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link
              to={`${basePath}/`}
              onClick={() => handleNavigation(`${basePath}/`)}
            >
              App1 Home
            </Link>
          </li>
          <li>
            <Link
              to={`${basePath}/about`}
              onClick={() => handleNavigation(`${basePath}/about`)}
            >
              App1 About
            </Link>
          </li>
        </ul>
      </nav>

      {isPending ? (
        <div>Loading...</div>
      ) : (
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<FeatureHome />} />
            <Route path="/about" element={<FeatureAbout />} />
          </Routes>
        </Suspense>
      )}
    </div>
  );
}

function App({ standalone = true }) {
  console.log("standalone", standalone);
  return standalone ? (
    <BrowserRouter>
      <App1Content />
    </BrowserRouter>
  ) : (
    <App1Content />
  );
}

export default App;
