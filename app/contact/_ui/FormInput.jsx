"use client";

export default function FormInput({ placeholder, form, name, type = "text" }) {
  return (
    <input
      className="block rounded-full bg-neutral-200 px-5 py-2 outline outline-1 outline-neutral-400 transition hover:brightness-95 focus:bg-sky-50 focus:outline-sky-300"
      placeholder={placeholder}
      form={form}
      name={name}
      size="70"
      maxLength="30"
      type={type}
      required
    ></input>
  );
}
