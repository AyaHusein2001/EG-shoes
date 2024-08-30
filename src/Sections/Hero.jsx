import { arrowRight } from "../assets/icons";
import { bigShoe1 } from "../assets/images";
import Button from "../Components/Button";
import ShoeCard from "../Components/ShoeCard";
import { statistics,shoes } from "../constants";
import { useState } from "react";
const Hero = () => {
  const [bigShoeImg, setbigShoeImg] = useState(bigShoe1)
  // min-h-screen : takes the full height of the screen
  //flex-wrap : if our screen is smaller , they start collapsing slowly
  //leading : line height
  //sm:max-w-sm : sets max-width
  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center xl:min-h-screen
    gap-10 max-container "
    >
      <div
        className="relative
      xl:w-5/2 flex flex-col justify-center items-start
      w-full max-xl:padding-x py-28 px-2"
      >
        {/* <p className="text-xl font-montserrat text-strong-green">
          Our Summer Collection
        </p> */}
        <h1
          className="font-palanquin mt-10 text-8xl 
        max-sm:text-[72px] font-bold max-sm:leading-[82px]"
        >
          {/*xl:bg-white: because this span , on extra large devices , going to be above the image */}
          {/*whitespace-nowrap: No Text Wrapping: The text inside the element will not wrap to the next line, even if it overflows the container's width. Instead, it will stay on a single line.  */}
          <span
            className="xl:bg-white
          xl:whitespace-nowrap
          relative
          z-10 pr-10
          "
          >
            The New Arrival
          </span>
          <br />
          {/*
          The inline-block value is a CSS display property that allows an element to behave like an inline element while still allowing you to set width, height, margins, and paddings like a block element.
          */}
          <span
            className="
          text-strong-green mt-3 inline-block
          "
          >
            EG-shoes
          </span>{" "}
          Shoes
        </h1>
        <p
          className="
          font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm
          "
        >
          Discover Stylish EG-shoes arrivals, quality comfort, and innovation for
          your active life .
        </p>

        <Button label="Shop Now" iconURL={arrowRight} />
        <div
          className="flex justify-start items-start flex-wrap
         w-full mt-20 gap-16 "
        >
          {statistics.map((stat, index) => (
            <div key={stat.label}>
              <p
                className="
              text-4xl font-palanquin font-bold
              "
              >
                {stat.value}
              </p>
              <p className="leading-7 font-montserrat text-slate-gray">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative   bg-card bg-cover bg-center w-full flex justify-center items-center max-xl:py-40  xl:min-h-screen ">
        <img
          src={bigShoeImg}
          alt="shoe collection"
          width={610}
          height={500}
          className="object-contain relative z-10"
        />
        <div
        className="flex sm:gap-6 gap-4 absolute -bottom-[5%]
         max-sm:px-6
        "
        >
        {shoes.map((shoe,index)=>(
          <div key={shoe}>
            
            <ShoeCard
            imageURL={shoe}
            changeBigShoeImage={(shoe)=>setbigShoeImg(shoe)}
            bigShoeImage={bigShoeImg}
            />
          </div>
        ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
