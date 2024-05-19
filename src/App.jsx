import { useState } from 'react';
import logo from './assets/investment-calculator-logo.png';
import Header from './components/Header.jsx';
import Result from './components/Result';

function App() {
  const [values, setValues] = useState({
    INITIAL_INVESTMENT: 0,
    ANUAL_INVESTMENT: 0,
    EXPECTED_RETURN: 0,
    DURATION: 0,
  });

  function getValues(name, value) {
    setValues((prev) => ({ ...prev, [name]: value }));
  }

  return (
    <div id="header">
      <img src={logo} alt="investment-calculator-logo" />
      <h1>React Investment Calculator</h1>
      <Header getValues={getValues} />
      <Result values={values} />
    </div>
  );
}

export default App;
