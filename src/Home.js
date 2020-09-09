import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="30235331"
            title="The lean startup"
            price={29.99}
            image="https://upload.wikimedia.org/wikipedia/en/thumb/1/11/Lean_Startup.png/220px-Lean_Startup.png"
            rating={5}
          />
          <Product
            id="65977923"
            title="HP VH240a 23.8-inch Full HD 1080p IPS LED Monitor with Built-in Speakers and VESA Mounting"
            price={169.99}
            image="https://m.media-amazon.com/images/I/71trhuzbhML._AC_UY218_.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="15394065"
            title="AMD Ryzen 7 3700X 8-Core, 16-Thread Unlocked Desktop Processor with Wraith Prism LED Cooler"
            price={299.99}
            image="https://upload.wikimedia.org/wikipedia/en/thumb/1/11/Lean_Startup.png/220px-Lean_Startup.png"
            rating={5}
          />
          <Product
            id="69162708"
            title="Samsung SSD 860 EVO 1TB 2.5 Inch SATA III Internal SSD (MZ-76E1T0B/AM)"
            price={129.99}
            image="https://m.media-amazon.com/images/I/91JA5-hAnoL._AC_UY218_.jpg"
            rating={5}
          />
          <Product
            id="82591509"
            title="Blendtec Total Classic Original Blender - WildSide+ Jar (90 oz) - Professional-Grade Power - 6 Pre-programmed Cycles - 10-speeds - Black (Renewed)"
            price={275.12}
            image="https://images-na.ssl-images-amazon.com/images/I/71zrQU%2ByLvL._AC_SL1500_.jpg"
            rating={4}
          />
          {/* Producto */}
          {/* Producto */}
          {/* Producto */}
        </div>

        <div className="home__row">
          <Product
            id="66970944"
            title="Western Digital 500GB WD Blue 3D NAND Internal PC SSD - SATA III 6 Gb/s, M.2 2280, Up to 560 MB/s"
            price={99.99}
            image="https://images-na.ssl-images-amazon.com/images/I/61GrDNFfbmL._AC_SL1280_.jpg"
            rating={5}
          />
          {/* Producto */}
        </div>
      </div>
    </div>
  );
}

export default Home;
