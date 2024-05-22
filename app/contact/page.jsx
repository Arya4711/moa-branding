import NavBar from "../_ui/NavBar";
import Footer from "../_ui/Footer";
import FormInput from "./_ui/FormInput";

export default function Contact() {
  return (
    <>
      <div className="flex h-screen flex-col justify-between">
        <NavBar />
        <h1 className="mx-auto text-6xl">
          Let&apos;s make it
          <span className="text-sky-500"> happen.</span>
        </h1>
        <div className="mx-[40rem] flex justify-around">
          <form
            className="flex flex-col items-start space-y-5"
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
            />
            <FormInput
              placeholder="PHONE NUMBER"
              form="contact"
              name="phone"
              type="tel"
            />
            <label htmlFor="summary" className="pt-5 text-3xl font-bold">
              DESCRIBE YOUR VISION
            </label>
            <textarea
              className="rounded-2xl bg-neutral-200 px-5 py-2 outline outline-1 outline-neutral-400 transition hover:brightness-95 focus:bg-sky-50 focus:outline-sky-300"
              placeholder="SUMMARY"
              form="contact"
              id="summary"
              name="summary"
              cols="70"
              rows="5"
              required
            />
            <input
              type="submit"
              className="rounded-2xl bg-neutral-200 px-10 py-1 outline outline-1 outline-neutral-400 transition hover:cursor-pointer hover:bg-sky-50 hover:outline-sky-300"
              value="SUBMIT"
            />
          </form>
        </div>
        <p className="mx-auto text-xl">
          If you are having any issues with submitting this form, please feel
          free to send us an email at{" "}
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
        <Footer />
      </div>
    </>
  );
}
