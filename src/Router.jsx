import { Routes, Route } from "react-router-dom";


// Components
import App from "./App"
import Token from "./Token"

const Router = () => {
    return (
      <>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/auth/callback" element={<Token/>} />
          </Routes>
      </>
    );
  };
  
  export default Router;