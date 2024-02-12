import { Routes, Route } from "react-router-dom";
import { Cards } from "./Cards";
import { Cart } from "./Cart";

export const Main = () => {
    return(
        <>
        <Routes>
            <Route path="/" element={ <Cards />} />
            <Route path="/cart" element={ <Cart />} />
        </Routes>
        </>
    );
}