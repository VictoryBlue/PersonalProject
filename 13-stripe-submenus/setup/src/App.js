import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Sidebar from './Sidebar';
import Submenu from './Submenu';
import { useGlobalContext } from './context';
function App() {
  // const { location } = useGlobalContext();
  return (
    <>
      <Navbar />
      <Sidebar />
      <Hero />
      <Submenu />
      {/* {console.log(location)} */}
      {console.log('home render')}
    </>
  );
}

export default App;
