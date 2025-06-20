import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Proyecto1 } from "../pages/Proyecto1";

export function MyRoutes(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/proyecto1" element={<Proyecto1></Proyecto1>} ></Route>
        </Routes>
        </BrowserRouter>
    );
}