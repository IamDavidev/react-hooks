import { useState } from 'react';

const Calculadora = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  const handleChange = (e) => {
    const valueInput = e.target.value;
    setNum1(valueInput);
  };
  const handleChange2 = (e) => {
    const valueInput = e.target.value;
    setNum2(valueInput);
  };

  return (
    <div className="calculadora">
      <input type="number" onChange={handleChange} value={num1} />
      <input type="number" onChange={handleChange2} value={num2} />
      <p>{num1}</p>
      <time>{num2}</time>
    </div>
  );
};

export default Calculadora;