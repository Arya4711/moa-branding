"use client";

export default function FormInput({ placeholder, form, name, type }) {
  return (
    <input
      className="block rounded-full bg-neutral-200 px-5 py-2 outline outline-1 outline-neutral-400 transition hover:brightness-95 focus:bg-sky-50 focus:outline-sky-300"
      placeholder={placeholder}
      form={form}
      name={name}
      id={name}
      size="70"
      maxLength="30"
      type={type | "text"}
      required
    ></input>
  );
}
