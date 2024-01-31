import { Navbar, Footer } from "../components/layout";
import { ContactUsHeader, ContactForm } from "../components/common/ContactUs";
import "../assets/styles/style.css";

function ContactUs() {
  return (
    <div>
      <Navbar />
      <div className="page-wrapper-1">
        <ContactUsHeader />
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
}

export default ContactUs;
