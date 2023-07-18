import "./styles/Projects.css"

const Projects = () => {
  return (
    <article  className="projects">
      
      <p className="projects__desc">Estoy emocionado por mostrar algunos de mis proyectos, donde he aplicado mis conocimientos, he utilizado <span>axios</span>, <span>react hook form</span>, <span>react router dom</span> y <span>redux</span> para algunos de ellos ¡Echa un vistazo a continuación y siéntete libre de ponerse en contacto conmigo si tienes alguna pregunta o si te gustaría colaborar en un proyecto emocionante!</p> 
      <section className="projects__info">
        <div className="projects__card">
          <h3>Pokedex</h3>
          <div className="projects__links">
            <div className="projects__card-img">
          <a target="_blank"  rel="noreferrer" href="https://poekdex-esteban-bustos.netlify.app/">
            <img src="/pokedex.png" alt="" />
          </a>
            </div>
            <div>
          <a target="_blank"  rel="noreferrer" href="https://poekdex-esteban-bustos.netlify.app/"><i className='bx bx-link-external'></i></a> <br />
          <a target="_blank"  rel="noreferrer" href="https://github.com/esteban616/pokedex"><i className='bx bxl-github'></i></a>
            </div>
          </div>
        </div>
        <div className="projects__card">
          <h3>Rick & Morty </h3>
          <div className="projects__links">
            <div className="projects__card-img">
          <a target="_blank"  rel="noreferrer" href="https://rickandmortyapp-esteban-bustos.netlify.app/">
            <img src="/rickandmorty.png" alt="" />
          </a>
            </div>
            <div>
          <a target="_blank"  rel="noreferrer" href="https://rickandmortyapp-esteban-bustos.netlify.app/"><i className='bx bx-link-external'></i></a> <br />
          <a target="_blank"  rel="noreferrer" href="https://github.com/esteban616/rickAndMortyApp"><i className='bx bxl-github'></i></a>
            </div>
          </div>
        </div>
        <div className="projects__card">
          <h3>E-comerce</h3>
          <div className="projects__links">
            <div className="projects__card-img">
          <a target="_blank"  rel="noreferrer" href="https://ecomerce-esteban-bustos.netlify.app/">
            <img src="/ecomerce.png" alt="" />
          </a>
            </div>
            <div>
          <a target="_blank"  rel="noreferrer" href="https://ecomerce-esteban-bustos.netlify.app/"><i className='bx bx-link-external'></i></a> <br />
          <a target="_blank"  rel="noreferrer" href="https://github.com/esteban616/e-comerce"><i className='bx bxl-github'></i></a>
            </div>
          </div>
        </div>
        <div className="projects__card">
          <h3>WeatherApp</h3>
          <div className="projects__links">
            <div className="projects__card-img">
          <a target="_blank"  rel="noreferrer" href="https://wheaterapp-esteban.netlify.app/">
            <img src="/weatherapp.png" alt="" />
          </a>
            </div>
            <div>
          <a target="_blank"  rel="noreferrer" href="https://wheaterapp-esteban.netlify.app/"><i className='bx bx-link-external'></i></a> <br />
          <a target="_blank"  rel="noreferrer" href="https://github.com/esteban616/weather-app"><i className='bx bxl-github'></i></a>
            </div>
          </div>
        </div>

      </section>
       
    </article>
  )
}

export default Projects