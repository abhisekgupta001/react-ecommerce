import Navbar from "../components/Navbar/Navbar.jsx";
import Banner from "../components/Banner/Banner.jsx";
import GenderCardWrapper from "../components/Gender Card/GenderCardWrapper.jsx";
import Categories from "../components/Categories/Categories";
import DealWrapper from "../components/DealWrapper/DealWrapper.jsx";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <GenderCardWrapper />
      <Categories />
      <DealWrapper />
    </div>
  );
};

export default Home;
