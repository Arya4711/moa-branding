"use client";
import FormInput from "../purchase/_ui/FormInput";
export default function Form({ action, headers, isPurchase = false }) {
  const dropDownData = [
    "Branding Package ($120.00)",
    "Business Card Design ($60.00)",
    "Color Palette and Fonts ($50.00)",
    "Logo Design ($50.00)",
    "Logo Redesign ($50.00)",
    "Website Design (per page - no template) ($200.00)",
    "Website Design (per page - with template) ($80.00)",
  ];
  return (
    <form
      className={`flex ${isPurchase ? "h-2/3" : "h-5/6"} flex-col items-center justify-between`}
      id="contact"
      name="contact"
      action={action}
      target="_blank"
      method="POST"
      acceptCharset="UTF-8"
      encType="multipart/form-data"
    >
      <h1 className="text-3xl font-bold">{headers[0]}</h1>
      <FormInput label="Name" placeholder="NAME" name="name" />
      <FormInput
        label="Email"
        placeholder="EMAIL ADDRESS"
        name="email"
        type="email"
      />
      <FormInput
        label="Phone (ex. 123-456-7890)"
        placeholder="PHONE NUMBER"
        name="phone"
        type="tel"
        pattern="\d{3}[\-]\d{3}[\-]\d{4}"
      />
      <div
        className={`${isPurchase ? "block" : "hidden"} flex flex-col items-center justify-between`}
      >
        <label htmlFor="service" className="text-3xl font-bold">
          WHAT SERVICE WOULD YOU LIKE?
        </label>
        <select
          id="service"
          name="service"
          className="mt-3 block rounded-md bg-neutral-200 p-2 outline outline-1 outline-neutral-400 transition-all hover:brightness-95 focus:bg-sky-50 focus:outline-sky-300"
        >
          {dropDownData.map((item) => (
            <option value={item} key={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
      <h1 className="text-3xl font-bold">{headers[1]}</h1>
      <div>
        <label htmlFor="request" className="ml-5 text-lg">
          Request
        </label>
        <textarea
          className="block rounded-2xl bg-neutral-200 px-5 py-2 outline outline-1 outline-neutral-400 transition hover:brightness-95 focus:bg-sky-50 focus:outline-sky-300"
          placeholder="REQUEST"
          id="request"
          name="request"
          cols="70"
          rows="3"
          required
        />
      </div>
      <input
        type="submit"
        className="rounded-2xl bg-neutral-200 px-10 py-1 outline outline-1 outline-neutral-400 transition hover:cursor-pointer hover:bg-sky-50 hover:outline-sky-300"
        value="SUBMIT"
      />
    </form>
  );
}
