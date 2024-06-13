"use client";

import Form from "../_ui/Form";
import SectionButton from "../_ui/SectionButton";
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
          <Form
            action="https://formkeep.com/f/6b48b95e5cf1"
            headers={["YOUR DETAILS", "HOW CAN WE HELP?"]}
          />
        </div>
      </div>
    </>
  );
}
