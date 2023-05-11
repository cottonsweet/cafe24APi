import { Routes, Route } from "react-router-dom";


// Components
import Login from "./Loign.jsx"
import Token from "./Token.jsx"

const Router = () => {
    return (
    <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/auth/callback" element={<Token/>} />
    </Routes>
    );
};
  
  export default Router;