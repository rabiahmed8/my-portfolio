"use client";
import Hero from "./components/main/Hero";
import ReactFullpage from "@fullpage/react-fullpage";
import FirstSlider from "./components/main/FirstSlider";
import React, { useTransition } from "react";
import SecondSlider from "./components/main/SecondSlider";

export default function Home() {
  // const style = {
  //   "--url": "url('/section-two/pngs/knockio-contents.png')",
  // } as React.CSSProperties;
  const [silderColor, setSliderColor] = React.useState("#9effc9");
  const [isPending, startTransition] = useTransition();

  return (
    <main>
      {/* <Hero /> */}
      <ReactFullpage
        //fullpage options
        sectionsColor={["#030014", silderColor, "#7BAABE"]}
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
          let color = document.getElementById("second-section");
          let cans = document.getElementsByClassName("can-1");
          let cans2 = document.getElementsByClassName("can-2");
          const knockio = cans[0] as HTMLElement;
          const markytech = cans2[0] as HTMLElement;

          if (section.index == 1 && origin.index == 0 && direction == "right") {
            knockio.style.setProperty("--left", "-360px");
            markytech.style.setProperty("--left", "-433px");
            color?.style.setProperty("background-color", "#afffec");
            color?.style.setProperty(
              "transition",
              "background-color 1000ms linear"
            );
            setTimeout(() => {
              knockio.style.setProperty("--z", "1");
              markytech.style.setProperty("--z", "2");
              // setSliderColor("rgb(175 255 236)");
            }, 400);
          }

          if (section.index == 1 && origin.index == 1 && direction == "left") {
            markytech.style.setProperty("--left", "-516px");
            knockio.style.setProperty("--left", "-433px");
            color?.style.setProperty("background-color", "#9effc9");
            color?.style.setProperty(
              "transition",
              "background-color 1000ms linear"
            );
            setTimeout(() => {
              knockio.style.setProperty("--z", "2");
              markytech.style.setProperty("--z", "1");
            }, 400);
          }
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
                <div
                  id={"slider1"}
                  className="flex place-content-center can-2 absolute top-44 left-[783px]"
                ></div>
                <div className="slide" id="slide-0">
                  <FirstSlider />
                </div>
                <div className="slide">
                  <SecondSlider />
                </div>
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
