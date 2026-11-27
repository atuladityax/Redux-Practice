import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Counter from "./components/Counter";
import ProductManager from "./components/ProductManager";
import UserProfile from "./components/UserProfile";
import Categories from "./components/Categories"
import Posts from "./components/Posts";

const Home = () => {
  const navigate = useNavigate();

  return (
    <main>
      <h1>Home</h1>
      <button onClick={() => navigate("/profile")}>User Profile</button>
      <button onClick={() => navigate("/products")}>Products</button>
      <button onClick={() => navigate("/counter")}>Counter</button>
      <button onClick={() => navigate("/categories")}>categories</button>
      <button onClick={() => navigate("/post")}>Post</button>
    </main>
  );
};

const RoutePage = ({ children }) => {
  const navigate = useNavigate();

  return (
    <main>
      <button onClick={() => navigate("/")}>Home</button>
      {children}
    </main>
  );
};

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/profile"
        element={
          <RoutePage>
            <UserProfile />
          </RoutePage>
        }
      />
      <Route path="/" element={<Home />} />
      <Route
        path="/post"
        element={
          <RoutePage>
            <Posts/>
          </RoutePage>
        }
      />
      <Route
        path="/products"
        element={
          <RoutePage>
            <ProductManager />
          </RoutePage>
        }
      />
      <Route
        path="/counter"
        element={
          <RoutePage>
            <Counter />
          </RoutePage>
        }
      />
      <Route
        path="/categories"
        element={
          <RoutePage>
            <Categories/>
          </RoutePage>
        }
      />
    </Routes>
  </BrowserRouter>
);

export default App;
