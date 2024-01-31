"use client";
import Image from "next/image";
import Hero from "./components/main/Hero";
import Products from "./components/main/Product";
import Nav from "./components/main/Nav";
import ReactFullpage from "@fullpage/react-fullpage";
import SliderComponent from "./components/main/section2";
import SliderComponent1 from "./components/main/section3";
import Navbar from "./components/main/Navbar";
import { color } from "framer-motion";

export default function Home() {
  // const style = {
  //   "--url": "url('/section-two/pngs/knockio-contents.png')",
  // } as React.CSSProperties;
  return (
    <main>
      {/* <Hero /> */}
      <ReactFullpage
        //fullpage options
        sectionsColor={["#030014", "#4BBFC3", "#7BAABE"]}
        navigation
        slidesNavigation={true}
        credits={{ enabled: false, label: "", position: "left" }}
        scrollingSpeed={1000} /* Options here */
        scrollHorizontally={true} /* Because we are using the extension */
        scrollHorizontallyKey={"YOUR KEY HERE"}
        slidesNavPosition="bottom"
        keyboardScrolling
        fixedElements="can"
        lazyLoading={true}
        onSlideLeave={(section, origin, destination, direction, trigger) => {
          console.log({ section, origin, direction });
          // if (section.index == 2 && origin.index == 0 && direction == "right") {
          //   alert("Leaving the fist slide!!");
          // }
          let can = document.getElementById("slider1");
          if (section.index == 1 && origin.index == 0 && direction == "right") {
            if (can != null) {
              // can.style.setProperty("--left", "-360px");
              can.classList.remove("can-1");
              can.classList.add("can-2");

              setTimeout(() => {
                can.style.setProperty("--left", "-433px");
              }, 500);
            }
          }
          if (section.index == 1 && origin.index == 1 && direction == "left") {
            if (can != null) {
              can.classList.remove("can-2");
              can.classList.add("can-1");
            }
          }

          // if (can) {
          //   setTimeout(() => {
          //     can.style.setProperty("--left", "-443px");
          //   }, 5000);
          //   setTimeout(() => {
          //     can.style.setProperty("--left", "-800px");
          //   }, 1);
          // }
        }}
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <div id="first-section" className="section">
                <Hero />
                <button onClick={() => fullpageApi.moveSectionDown()}>
                  Click me to move down
                </button>
              </div>
              <div id="second-section" className="section relative ">
                <div
                  id={"slider1"}
                  className="flex place-content-center can-1 absolute top-44 left-[783px]"
                ></div>
                {/* <SliderComponent id="slider1" /> */}

                <div className="slide" id="slide-0">
                  asdf
                </div>
                <div className="slide">asfs</div>
              </div>
              <div id="third-section" className="section">
                <div className="slide"></div>
                <div className="slide"></div>
                <div className="slide"></div>
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
      {/* <div className='z-10'><Products /></div> */}
    </main>
  );
}
