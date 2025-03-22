import {
  ProductList,
  ProductDetail,
  PageNotFound,
  Home,
  ContactUs,
  ContactOther,
  ContactIn,
  ContactEu,
  Contact,
} from "../pages";
import { Routes, Route, Navigate } from "react-router-dom";

export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<ProductList />}></Route>
        <Route path="/products/:id" element={<ProductDetail />}></Route>
        <Route path="/contact" element={<Contact />}>
          <Route path="in" element={<ContactIn />} />
          <Route path="eu" element={<ContactEu />} />
          <Route path="us" element={<ContactUs />} />
          <Route path="*" element={<ContactOther />} />
        </Route>
        <Route path="/admin" element={<Navigate to="/products/10001" />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};
