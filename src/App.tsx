import { HelmetProvider } from 'react-helmet-async';

import Footer from './components/Footer';
import Navbar from './layout/Navbar';
import 'react-toastify/dist/ReactToastify.css';
import Landing from './layout/Landing';

function App() {
  const helmetContext = {};
  return (
    <HelmetProvider context={helmetContext}>
      <div className='overflow-x-hidden text-[#ededed] antialiased selection:bg-cyan-300 selection:text-cyan-900'>
        <div className='fixed top-0 -z-10 h-full w-full'>
          <div className='absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]'></div>
        </div>
        <div className='container mx-auto px-8'>
          <Navbar />
          <Landing />
          <Footer />
        </div>
      </div>
    </HelmetProvider>
  );
}

export default App;
