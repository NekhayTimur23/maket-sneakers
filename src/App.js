import React from 'react';
import styles from './App.module.sass';
import HeaderSection from './components/HeaderSection/HeaderSection.jsx';
import MainSection from './components/MainSection/MainSection.jsx';
import FooterSection from './components/FooterSection/FooterSection';

function App() {
  return (
    <div className={styles.main}>
      <HeaderSection />
      <MainSection />
      <FooterSection />
    </div>
  );
}

export default App;
