import "./App.css";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { ProductDetail } from "./components/ProductDetail";
import { ProductList } from "./components/ProductList";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/products" element={<ProductList />}></Route>
          <Route path="/products/10001" element={<ProductDetail />}></Route>
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<Navigate to="/products/10001" />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
