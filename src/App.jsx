import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Allproducts from "./pages/Allproducts/Allproducts";
import Single from "./pages/single/Single";
import About from "./pages/about/About";
import Order from "./pages/order/Order";
import Return from "./pages/return/Return";
import Garant from "./pages/garant/Garant";
import Contact from "./pages/contact/Contact";
import Blog from "./pages/blog/Blog";
import Cart from "./pages/cart/Cart";
import Wishes from "./pages/wishes/Wishes";
import NotFound from "./pages/notfound/Notfound";
import Catalog from "./pages/catalog/Catalog";
import Login from "./pages/login/Login";
import Auth from "./pages/Auth/Auth";
import Admin from "./pages/admin/Admin";
import CreateProduct from "./pages/createProduct/Createproduct";
import CreateCategory from "./pages/createCategory/Createcategory";
import ManageCategory from "./pages/manageCategory/Managecategory";
import ManageProduct from "./pages/manageProduct/Manageproduct";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Backtop from "./components/backtop/Backtop";
function App() {
  return (
    <div className="body">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all" element={<Allproducts />} />
        <Route path="/product/:id" element={<Single />} />
        <Route path="/about" element={<About />} />
        <Route path="/order" element={<Order />} />
        <Route path="/return" element={<Return />} />
        <Route path="/garant" element={<Garant />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishes" element={<Wishes />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Auth />}>
          <Route path="/admin" element={<Admin />}>
            <Route path="createproduct" element={<CreateProduct />} />
            <Route path="manageproduct" element={<ManageProduct />} />
            <Route path="createcategory" element={<CreateCategory />} />
            <Route path="managecategory" element={<ManageCategory />} />
          </Route>
        </Route>
      </Routes>
      <Footer />
      <Backtop />
      <ToastContainer />
    </div>
  );
}

export default App;
