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
    <div className="flex flex-col items-center justify-around rounded-md border border-sky-400 bg-sky-50 p-5">
      <Image
        className="inline w-auto"
        src={image}
        width={100}
        height={100}
        alt={name}
      />
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
