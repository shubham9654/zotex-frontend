
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/home';
import About from './pages/about';
import Layout from './routes/layout';
import Contact from "./pages/contact";
import Product from "./pages/product";
import ProductDetail from "./pages/productDetail";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route>
            <Route index path="/dashboard" element={<Dashboard />} />
            <Route path="/dashboard/login" element={<Login />} />
          </Route> */}
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/product" element={<Product />} />
            <Route path="/product-details" element={<ProductDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<div className="h-[80vh] bg-black text-white flex items-center justify-center">Page Not found!</div>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
