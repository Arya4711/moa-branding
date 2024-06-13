import SocialMediaIcon from "@/app/_ui/SocialMediaIcon";
import Image from "next/image";

export default function MemberInfo({ name, image, email, phone, linkedIn }) {
  const phoneDisplay =
    "(" +
    phone.substring(0, 3) +
    ") " +
    phone.substring(3, 6) +
    "-" +
    phone.substring(6);
  return (
    <div className="relative flex w-[32%] flex-col items-center justify-around overflow-hidden rounded-[2.5rem] border border-sky-400 bg-sky-50">
      <div
        className={`bg-${image} absolute top-0 h-1/2 w-full bg-cover bg-center`}
      ></div>
      <div className="h-1/2"></div>
      <h1 className="inline text-3xl font-bold">{name}</h1>
      <div className="flex h-1/4 flex-col items-center justify-between">
        <a
          href={`mailto:${email}`}
          className="decoration-text-sky-500 text-xl text-sky-500 underline transition-all hover:decoration-transparent"
        >
          {email}
        </a>
        <a
          href={`tel:${phone}`}
          className="decoration-text-sky-500 text-xl text-sky-500 underline transition-all hover:decoration-transparent"
        >
          {phoneDisplay}
        </a>
        <SocialMediaIcon
          src="/linked-in-logo.svg"
          alt="LinkedIn Profile"
          href={`https://www.linkedin.com/in/${linkedIn}/`}
        />
      </div>
    </div>
  );
}
