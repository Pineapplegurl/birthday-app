import React, { useState } from 'react';
import Animation from './components/Animation';
import Message from './components/Message';
import Download from './components/Download';
import BackgroundMusic from './components/BackgroundMusic'; // Import du composant de musique
import './App.css';
import Ballons from './components/Balloons';


const App = () => {
  const [step, setStep] = useState(0);

  const nextStep = () => setStep((prev) => prev + 1);

  return (
    <div>
      {/* Composant de musique global */}
      <BackgroundMusic />

      {/* Étapes de l'application */}
      {step === 0 && <Animation onCelebrate={nextStep} />}
      {step === 1 && <Ballons onComplete={nextStep} />}
      {step === 2 && <Message onNext={nextStep} />}
      {step === 3 && <Download />}
    </div>
  );
};

export default App;