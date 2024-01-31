import React from "react";
import Image from "next/image";

// const imageStyle = {
//   mask-image: 'url(w3logo.png)'
//   }

const SliderComponent = ({ id }: { id: string }) => {
  return (
    <div
      id={id}
      className="flex place-content-center can absolute top-44 left-[783px]"
    ></div>
  );
};

export default SliderComponent;
