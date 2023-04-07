import { Routes, Route } from "react-router";
import { Default } from "../layout/Default";
export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Default />} />
    </Routes>
  );
}
