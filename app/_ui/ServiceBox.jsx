"use client";

export default function ServiceBox({ image, text, link }) {
  return (
    <>
      <a
        className={`bg-${image} inline-flex h-80 w-96 basis-[30%] flex-col justify-end rounded-xl bg-cover bg-center bg-no-repeat transition hover:brightness-75`}
        href={link}
      >
        <div className="rounded-b-xl border-t-2 border-white/10 py-4 pl-4 text-left text-xl text-white backdrop-blur-3xl">
          {text}
        </div>
      </a>
    </>
  );
}
