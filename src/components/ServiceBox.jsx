import React from "react";
import "../output.css";

function ServiceBox({ image, text, link }) {
  return (
    <>
      <a
        className={`inline-flex flex-col justify-end bg-${image} h-80 w-[35rem] rounded-xl bg-cover bg-center bg-no-repeat transition hover:brightness-75`}
        href={link}
      >
        {/* <div
          className={`h-full w-full bg-${image} absolute inset-0 rounded-full bg-cover bg-no-repeat`}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-8 w-8 rotate-45 transform border-r-2 border-t-2 border-white"></div>
        </div> */}
        <div className="rounded-b-xl border-t-2 border-white/10 py-4 pl-4 text-left text-xl text-white backdrop-blur-3xl">
          {text}
        </div>
      </a>
    </>
  );
}

export default ServiceBox;
