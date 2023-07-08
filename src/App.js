import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import PreNavbar from "./Components/PreNavbar/PreNavbar";
import Slider from "./Components/Slider/Slider";
import data from "./Data/data.json";
import Offers from "./Components/Offers/Offers";
import Heading from "./Components/Heading/Heading";
import StartProduct from "./Components/StartProduct/StartProduct";
import HotMenu from "./Components/HotMenu/HotMenu";
import HotAccessories from "./Components/HotAccessorie/HotAccessories";
import ProductReviews from "./Components/ProductReviews/ProductReviews";
import Videos from "./Components/Videos/Videos";
import Banner from "./Components/Banner/Banner";
import Footer from "./Components/Footer/Footer";
import NavOptions from "./Components/NavOptions/NavOptions";


function App() {
  return (
    <Router>
      <PreNavbar></PreNavbar>
      <Navbar></Navbar>

      <NavOptions miPhones={data.miPhones} redmiPhones={data.redmiPhones} tv={data.tv} laptop={data.laptop} fitnessAndLifeStyle={data.fitnessAndLifeStyle} home={data.home} audio={data.audio}  accessories={data.accessories}></NavOptions>

      <Slider start={data.banner.start}></Slider>
      <Offers offer={data.offer}></Offers>
      <Heading text="START PRODUCTS"></Heading>
      <StartProduct starProduct={data.starProduct}></StartProduct>
      <Heading text="HOT ACCESSORIES"></Heading>
      <HotMenu></HotMenu>
       {/* routes of Accessories menu start */}
      <Routes>
        <Route
          path="/music"
          element={
            <HotAccessories
              music={data.hotAccessories.music}
              musicCover={data.hotAccessoriesCover.music}
            />
          }
        />
        <Route
          path="/smartDevice"
          element={
            <HotAccessories
              smartDevice={data.hotAccessories.smartDevice}
              smartDeviceCover={data.hotAccessoriesCover.smartDevice}
            />
          }
        />
        <Route
          path="/home"
          element={
            <HotAccessories
          home={data.hotAccessories.home}
         homeCover={data.hotAccessoriesCover.home}
            />
          }
        />
        <Route
          path="/lifestyle"
          element={
            <HotAccessories
            lifestyle={data.hotAccessories.lifeStyle}
            lifestyleCover={data.hotAccessoriesCover.lifeStyle}
            />
          }
        />
        <Route
          path="/mobileAccesories"
          element={
            <HotAccessories
            mobileAccesories={data.hotAccessories.mobileAccessories}
            mobileAccesoriesCover={data.hotAccessoriesCover.mobileAccessories}
            />
          }
        />
      </Routes>
        {/* routes of Accessories menu end */}
      <Heading text="PRODUCT REVIEWS"></Heading>
     <ProductReviews productReviews={data.productReviews}></ProductReviews>
     <Heading text="VIDEOS"></Heading>
     <Videos videos={data.videos}></Videos>
     <Heading text="IN THE PRESS"></Heading>
     <Banner banner={data.banner}></Banner>
     <Footer footer={data.footer}></Footer>
    </Router>
    
  );
}

export default App;
