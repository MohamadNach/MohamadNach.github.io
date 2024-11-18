import ScrollToTop from 'react-scroll-to-top';
import About from '../components/About';
import Contact from '../components/Contact';
import Experience from '../components/Experience';
import Footer from '../components/Footer';
import Projects from '../components/Projects';
import Technologies from '../components/Technologies';
import CookieConsent from 'react-cookie-consent';
import Hero from '../components/Hero';
import { ToastContainer } from 'react-toastify';
import { Helmet } from 'react-helmet-async';
import SEO from '../components/SEO';

const Landing = () => {
  return (
    <div>
      <SEO
        title='Mohamad Nachawati - Fullstack Developer'
        description='Full-stack developer skilled in React, Angular, ASP.NET Core, and Node.js. Explore my innovative portfolio.'
        name='Mohamad Nachawati'
        type='website'
        keywords='Mohamad, Nachawati, developer, Finland, React, Angular'
        canonicalUrl='https://mohamadnach.github.io/'
      />
      <Hero />
      <About />
      <Technologies />
      <Experience />
      <Projects />
      <Contact />
      <ScrollToTop smooth style={{ padding: '5px' }} />
      <CookieConsent
        debug={true}
        style={{ height: '100px', paddingTop: '20px' }}
        buttonStyle={{
          color: 'black',
          background: '#ededed',
          fontStyle: 'inherit',
          border: 'rounded',
        }}
        buttonText='OK'
      >
        This site use cookies.
      </CookieConsent>
      <ToastContainer />
    </div>
  );
};

export default Landing;
