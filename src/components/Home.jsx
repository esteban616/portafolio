import "./styles/Home.css"

const Home = () => {
  return (
    <div id="home" className="home">
        
        <article className="home__article">
            <h2 className="home__title">Transformando ideas en experiencias digitales cautivadoras</h2>
            <p className="home__desc">¡Hola! Soy un apasionado desarrollador web con experiencia en el desarrollo de aplicaciones y sitios web utilizando tecnologías como JavaScript, HTML, CSS y React. Mi objetivo principal es crear experiencias interactivas y atractivas para los usuarios, centrándome en la usabilidad y el rendimiento.</p>
          <ul className="home__icons">
            <li className="home__icon"><i className='bx bxl-html5'></i></li>
            <li className="home__icon"><i className='bx bxl-css3'></i></li>
            <li className="home__icon"><i className='bx bxl-javascript' ></i> </li>
            <li className="home__icon"><i className='bx bxl-react' ></i></li>
          </ul>
        </article>
      
    </div>
  )
}

export default Home