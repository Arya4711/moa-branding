import NavBar from "../_ui/NavBar";
import Footer from "../_ui/Footer";

export default function Contact() {
  return (
    <>
      <NavBar />
      <div className="mx-20 flex space-between">
        <form>
          <label for="contact-info">YOUR DETAILS</label>
          <input className="rounded-md"></input>
        </form>
      </div>
      <Footer />
    </>
  );
}
