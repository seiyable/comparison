import React from 'react';
import styles from './App.module.css';
import ResultDisplay from '../ResultDisplay';
import Controls from '../Controls';

function App() {
  return (
    <main className={styles.container}>
      <ResultDisplay />
      <Controls />
    </main>
  );
}

export default App;
