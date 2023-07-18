import { useState } from "react"
import "./styles/Header.css"
const Header = () => {
  const [open, setOpen] = useState(false)
  const handleOpen=()=>{
    if (open) {
      setOpen(false)
    }else{
      setOpen(true)
    }
  }
  const handleCLose=()=>{
    setOpen(false)
  }

  return (
    <header className="header">
       
        <div className="header_basic"> 
        <h2 className="header__title"><a href="#home">Juan Esteban Bustos</a></h2>
        {
          open?<i onClick={handleOpen} className='bx bx-x'></i>:<i onClick={handleOpen} className='bx bx-menu'></i>
        }
        
        </div>
        <ul className={open?"header__options header__open":"header__options header__close"}>
            <li onClick={handleCLose} className="header__option"><a href="#home">Inicio</a> </li>
            <li onClick={handleCLose} className="header__option"><a href="#projects">Proyectos</a></li>
            <li onClick={handleCLose} className="header__option"><a href="#contact">Contacto</a></li>
            <ul className="header__links">
              <li className="header__link"><a target="_blank" rel="noreferrer" href="mailto:estebanbmth99@gmail.com"><i className='bx bxl-gmail'></i> </a></li>
              <li className="header__link"><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/juan-esteban-bustos-34178b275/"><i className='bx bxl-linkedin' ></i></a></li>
              <li className="header__link"><a target="_blank" rel="noreferrer"href="https://wa.me/+573113195202"><i className='bx bxl-whatsapp' ></i></a></li>
            </ul>
        </ul>
      
    </header>
  )
}

export default Header