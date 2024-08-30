import React from "react";

const Button = ({
  label,
  iconURL,
  backgroundColor,
  borderColor,
  textColor,
}) => {
  return (
<button
  className={`flex 
    justify-center
    items-center
    gap-2 
    px-7 
    py-4 
    border 
    font-montserrat 
    text-lg 
    leading-none
    rounded-full
    ${backgroundColor ? `${backgroundColor} ${textColor} ${borderColor}` : 'bg-strong-green  text-white border-coral-green'}`}
>


      {label}
      {iconURL && (
        <div className="bg-white flex justify-start text-center rounded-full pr-2">

          <img
            src={iconURL}
            alt="arow Right icon"
            className="ml-2 rounded-full w-5 h-5"
          />
        </div>
      )}
    </button>
  );
};

export default Button;
