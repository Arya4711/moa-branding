import NavBar from "../_ui/NavBar";
import Footer from "../_ui/Footer";
import FormInput from "../_ui/FormInput";

export default function Contact() {
  return (
    <>
      <div className="flex h-screen flex-col justify-between">
        <NavBar />
        <div className="space-around mx-[40rem] flex justify-around">
          <form className="flex flex-col items-start space-y-5">
            <label className="text-3xl font-bold">YOUR DETAILS</label>
            <FormInput placeholder="NAME" />
            <FormInput placeholder="EMAIL ADDRESS" />
            <FormInput placeholder="PHONE NUMBER" />
            <label for="contact-info" className="pt-5 text-3xl font-bold">
              DESCRIBE YOUR VISION
            </label>
            <textarea
              className="rounded-2xl bg-neutral-200 px-5 py-2 outline outline-1 outline-neutral-400 transition hover:brightness-95 focus:bg-sky-50 focus:outline-sky-300"
              placeholder="SUMMARY"
              cols="70"
              rows="5"
            />
            <button
              type="submit"
              className="rounded-2xl bg-neutral-200 px-10 py-1 outline outline-1 outline-neutral-400 transition hover:bg-sky-50 hover:outline-sky-300"
            >
              SUBMIT
            </button>
          </form>
        </div>
        <Footer />
      </div>
    </>
  );
}
