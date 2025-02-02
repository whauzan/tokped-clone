import { FC } from "react";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import ProductCategories from "./components/ProductCategories/ProductCategories";
import TrendingProducts from "./components/TrendingProducts/TrendingProducts";
import Footer from "./components/Footer/Footer";
import "./styles/variables.css";
import "./App.css";

const App: FC = () => {
  return (
    <div className="app">
      <Header />
      <main className="main">
        <Banner />
        <ProductCategories />
        <TrendingProducts />
      </main>
      <Footer />
    </div>
  );
};

export default App;
