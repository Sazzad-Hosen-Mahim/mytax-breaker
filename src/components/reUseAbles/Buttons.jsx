import React from "react";

const Button = ({ h = "h-10", w = "w-32", c = "bg-blue-500", text = "Click me" ,textColor="text-[#0C121D]", border = false, onClick }) => {
  return (
    <button 
      onClick={onClick}
      className={`${h} ${w} ${c} ${textColor} rounded-lg px-4 py-2 hover:opacity-80 ${border ? "border-[1px] border-black":""}`}
    >
      {text}
    </button>
  );
};

export default Button;