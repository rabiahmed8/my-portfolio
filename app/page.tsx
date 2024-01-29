"use client"
import Image from "next/image";
import Hero from "./components/main/Hero";
import Products from "./components/main/Product";
import Nav from "./components/main/Nav";
import ReactFullpage from '@fullpage/react-fullpage';
import SliderComponent from "./components/main/section2";
import Navbar from "./components/main/Navbar";



export default function Home() {
  return (
    <main>


            {/* <Hero /> */}

    <ReactFullpage
      //fullpage options
      credits= {
       { enabled: false,
        label: "",
        position: "left"}
    }
      scrollingSpeed = {1000} /* Options here */
      scrollHorizontally = {true}  /* Because we are using the extension */
      scrollHorizontallyKey = {'YOUR KEY HERE'}

      render={({ state, fullpageApi }) => {

        return (
          <ReactFullpage.Wrapper >
            randomFunc()
            <div id="first-section" className="section">
            <Hero/>
              <button onClick={() => fullpageApi.moveSectionDown()}>
                Click me to move down
              </button>
            </div>
            <div id="second-section" className="section relative">
              <SliderComponent/>
            </div>
            <div id="third-section" className="section">
              <p>Section 3</p>
            </div>
          </ReactFullpage.Wrapper>
        );
      }}
    />

        {/* <div className='z-10'><Products /></div> */}

    </main>
  );
}
