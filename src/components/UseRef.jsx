// import { useRef } from 'react';
import Datos from './Datos';
import { UseAcount, UseRef } from './hooks/useCounter';
const UseRefi = () => {
  const { counter, handleClick } = UseAcount();
  const { ref, handleRef } = UseRef();
  return (
    <div className="ref">
      <textarea ref={ref}></textarea>
      <p onClick={handleRef}>
        añadir 'React app full stack con Go' en el text area
      </p>
      <h3>calculadora con hooks y mas jj</h3>
      <hr />
      <Datos value={counter} />
      <button onClick={handleClick}>hookk + 1</button>
    </div>
  );
};

export default UseRefi;
