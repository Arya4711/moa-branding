"use client";

import SectionButton from "../_ui/SectionButton";
import FormInput from "../purchase/_ui/FormInput";
import MemberInfo from "./_ui/MemberInfo";

export default function Contact() {
  const memberInfoData = [
    {
      name: "Micah Massey",
      image: "/micah-headshot.png",
      email: "micahmahone23@gmail.com",
      phone: "8504189653",
      linkedIn: "micahmahone",
    },
    {
      name: "Owen Crosby",
      image: "/owen-headshot.png",
      email: "owendcrosby@gmail.com",
      phone: "4072228570",
      linkedIn: "owencrosby",
    },
    {
      name: "Arya Malekjahani",
      image: "/arya-headshot.png",
      email: "armlk4711@gmail.com",
      phone: "3212103740",
      linkedIn: "arya-malekjahani",
    },
  ];

  return (
    <>
      <SectionButton text="CONTACT" id="contact" />
      <div className="mx-20 flex h-3/4 justify-between">
        <div className="basis-1/2">
          <h1 className="mb-5 text-center text-4xl font-bold">
            OUR INFORMATION
          </h1>
          <div className="mb-10 flex h-5/6 justify-between">
            {memberInfoData.map((item) => (
              <MemberInfo {...item} key={item.name} />
            ))}
          </div>
        </div>
        <div className="basis-1/2">
          <h1 className="mb-5 text-center text-4xl font-bold">
            HAVE A QUESTION?
          </h1>
          <form
            className="mb-10 flex h-5/6 flex-col items-center justify-between"
            id="contact"
            name="contact"
            action="https://formsubmit.co/armlk4711@gmail.com"
            method="POST"
          >
            <label className="text-3xl font-bold">YOUR DETAILS</label>
            <FormInput placeholder="NAME" form="contact" name="name" />
            <FormInput
              placeholder="EMAIL ADDRESS"
              form="contact"
              name="email"
              type="email"
              required
            />
            <FormInput
              placeholder="PHONE NUMBER"
              form="contact"
              name="phone"
              type="tel"
            />
            <label htmlFor="request" className="mt-5 text-3xl font-bold">
              HOW CAN WE HELP?
            </label>
            <textarea
              className="block rounded-2xl bg-neutral-200 px-5 py-2 outline outline-1 outline-neutral-400 transition hover:brightness-95 focus:bg-sky-50 focus:outline-sky-300"
              placeholder="SUMMARY"
              form="contact"
              id="request"
              name="request"
              cols="70"
              rows="8"
              required
            />
            <button
              type="submit"
              className="rounded-2xl bg-neutral-200 px-10 py-1 outline outline-1 outline-neutral-400 transition hover:cursor-pointer hover:bg-sky-50 hover:outline-sky-300"
              value="SUBMIT"
            />
          </form>
        </div>
      </div>
    </>
  );
}
