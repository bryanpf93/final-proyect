import './styles.css';
import { Link } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useContext } from 'react';
import { ThemeContext } from '../../contexts/theme.context';



function Header() {
  
  // const [setTheme] = useContext(ThemeContext);
  const { t, i18n } = useTranslation('global');

  // const handleChange = (e) => {
  //   const cheked = e.target.cheked;
  //   const theme = cheked ? 'dark' : 'light';
  //   setTheme(theme);
  // }

  return (
    <header className='header_container'>
      <div className='logo'>
        <h1><Link className='nav-container' to='/'>WATCHDB</Link></h1>
      </div>
      <nav className='peliculas-series'>
        <h4><Link className='nav-container' to="/movies">{t('header.MOVIES')}</Link></h4>
        <h4><Link className='nav-container' to="/series">{t('header.TVSHOWS')}</Link></h4>
      </nav>
      <div>
        <button onClick={() => i18n.changeLanguage('es')} >ES</button>
        <button onClick={() => i18n.changeLanguage('en')}>EN</button>
      </div>
      <div>
        <label className='switch'>
          <input  type="checkbox" ></input>
          <span className='slider round'></span>
        </label>
      </div>
      <input type="text" placeholder={t('header.SEARCH_LABEL')} />
      <nav className='register-login'>
        <h4><Link className='nav-container' to="/auth/register">{t('header.REGISTER')}</Link></h4>
        <h4><Link className='nav-container' to="/auth/login">{t('header.LOGIN')}</Link></h4>
      </nav>
    </header>
  )
}

export default Header;