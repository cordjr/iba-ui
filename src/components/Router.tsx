import {Route, Routes} from "react-router";
import {Default} from "../layout/Default";
import {Memebers} from "../pages/Members";
import {Register} from "../pages/Members/Register"

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<Default/>}>
                <Route path="/members" element={<Memebers/>}/>
                <Route path="/members/new" element={<Register/>}/>
            </Route>
        </Routes>
    );
}
