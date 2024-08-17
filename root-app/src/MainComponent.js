import React, { lazy, Suspense } from "react";
import { useLocation } from "react-router-dom";

const Demo1 = lazy(() => import("app1/Demo1"));
const Demo2 = lazy(() => import("app2/Demo2"));

const MainComponent = () => {
  const location = useLocation();

  return (
    <main>
      <h2>Main Component</h2>
      <Suspense fallback={<div>Loading...</div>}>
        {location.pathname === "/app1" && <Demo1 />}
        {location.pathname === "/app2" && <Demo2 />}
      </Suspense>
    </main>
  );
};

export default MainComponent;
