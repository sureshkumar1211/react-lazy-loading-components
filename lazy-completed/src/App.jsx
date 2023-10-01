import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Layout from "./components/Layout";
import SkeletonAdmin from "./components/skeletons/SkeletonAdmin";

const Admin = lazy(() => import("./components/Admin"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />

        <Route
          path="admin"
          element={
            <Suspense fallback={<SkeletonAdmin />}>
              <Admin />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
