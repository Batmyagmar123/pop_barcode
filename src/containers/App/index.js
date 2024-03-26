import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { Barcode } from "../../components";
const Index = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:code/:width" element={<Barcode />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Index;
