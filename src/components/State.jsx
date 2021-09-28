import { useState } from 'react';
import Datos from './Datos';

const State = () => {
  const [acount, setAcount] = useState(0);
  const [memorize, setMemo] = useState(false);
  const handleClick = () => {
    setAcount(acount + 2);
  };
  return (
    <div className="hooks__react">
      <h2>
        <strong>
          <Datos value={acount} />
        </strong>
      </h2>
      <br />
      <button onClick={handleClick}> aumentar en dos el contador </button>
      <button onClick={() => setMemo(!memorize)}>view memo</button>
    </div>
  );
};

export default State;
