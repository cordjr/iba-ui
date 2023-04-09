import { Routes, Route } from "react-router";
import { Default } from "../layout/Default";
import { Memebers } from "../pages/Members";
export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Default />}>
        <Route path="/members" element={<Memebers />} />
      </Route>
    </Routes>
  );
}
