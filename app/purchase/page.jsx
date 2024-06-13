"use client";
import Form from "../_ui/Form";
import SectionButton from "../_ui/SectionButton";

export default function Purchase() {
  return (
    <>
      <SectionButton id="purchase" text="PURCHASE" hasYMargin={false} />
      <Form
        action="https://formkeep.com/f/05660d2f62f5"
        headers={["YOUR DETAILS", "DESCRIBE YOUR VISION"]}
        isPurchase={true}
      />
      <p className="mx-auto text-xl">
        If you are having any issues with submitting this form, please feel free
        to send us an email at{" "}
        <span className="text-sky-500">
          <a
            className="underline decoration-sky-500 transition-all hover:decoration-transparent"
            href="mailto:moabrandingfl@gmail.com"
          >
            moabrandingfl@gmail.com
          </a>
        </span>{" "}
        or{" "}
        <span className="text-sky-500">
          <a
            className="underline decoration-sky-500 transition-all hover:decoration-transparent"
            href="https://calendar.app.google/WJ1hAdc2iSTD9hkm8"
            target="_blank"
          >
            book a meeting
          </a>
        </span>{" "}
        with us.
      </p>
    </>
  );
}
