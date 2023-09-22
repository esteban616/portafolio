import "./styles/Contact.css";
const Contact = () => {
  return (
    <div id="contact" className="contact__container">
      <section className="cotact">
        <h2 className="contact__title">Contactame!</h2>
        <ul>
          <li className="contact__links">
            <a
              target="_blank"
              rel="noreferrer"
              href="mailto:estebanbmth99@gmail.com"
            >
              <i className="bx bxl-gmail"></i> estebanbmth99@gmail.com
            </a>
          </li>
          <li className="contact__links">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://wa.me/+573113195202"
            >
              <i className="bx bxl-whatsapp"></i>+57 3113195202
            </a>
          </li>
          <ul className="contact__l">
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/juan-esteban-bustos-34178b275/"
              >
                <i className="bx bxl-linkedin"></i>
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.facebook.com/juanesteban.bustosmorales/"
              >
                <i className="bx bxl-facebook"></i>
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.instagram.com/estebanlmtf/"
              >
                <i className="bx bxl-instagram"></i>
              </a>
            </li>
          </ul>
        </ul>
      </section>
    </div>
  );
};

export default Contact;
