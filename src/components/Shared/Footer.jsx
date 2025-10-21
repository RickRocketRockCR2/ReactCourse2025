import classes from './Footer.module.css'
import { Link, useLocation } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaPlusCircle  } from 'react-icons/fa';

const Footer = () => {
  const location = useLocation();

  return (
    <footer className={classes.footer}> {/* dot notation */}
      <div className={classes['footer-container']}>  { /* bracket notation, which allows you to access class names that include characters not allowed in dot notation — like hyphens */}
        <div className={classes['footer-logo']}>
          <h2>Study Cards App</h2>
        </div>

        <nav className={classes['footer-nav']}>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </nav>

        <div className={classes['footer-social']}>
          <a href="https://github.com/RickRocketRockCR2" target="_blank" rel="noopener noreferrer"><FaGithub size={25}/></a>
          <a href="https://www.linkedin.com/in/ricky-jimenez-guzman-cr/" target="_blank" rel="noopener noreferrer"><FaLinkedin size={25}/></a>
        </div>

        <div className={classes.buttonCounterContainer}>
          <Link to={location.pathname === "/" ? "/counter1" : "/counter2"} className={classes.button} >
            <FaPlusCircle size={18} />
            Add {location.pathname === "/" ? "+1" : "+2" }
            </Link>
        </div>

        <div className={classes['footer-copy']}>
          <p>&copy; {new Date().getFullYear()} Ricky Jiménez. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer