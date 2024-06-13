"use client";

export default function FormInput({
  placeholder,
  name,
  type = "text",
  pattern = ".*",
  label = "",
}) {
  return (
    <div>
      <label htmlFor={name} className="ml-5 text-lg">
        {label}
      </label>
      <input
        className="block rounded-full bg-neutral-200 px-5 py-2 outline outline-1 outline-neutral-400 transition hover:brightness-95 focus:bg-sky-50 focus:outline-sky-300"
        placeholder={placeholder}
        name={name}
        id={name}
        size="70"
        maxLength="30"
        type={type}
        pattern={pattern}
        required
      ></input>
    </div>
  );
}
