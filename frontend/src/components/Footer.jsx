import React from "react";

function Footer() {
  const year=new Date().getFullYear();
  return (
    <div className="bg-slate-500">
      <div  className="max-w-[1240px] mx-auto text-center">
      <p>MyShop &copy; {year}</p>
      </div>
    
    </div>
  );
}

export default Footer;
