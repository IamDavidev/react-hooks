
import { useState } from 'react ';

const Learning = () => {
  const [acount, setAcount] = useState(0);
  const handleClick = () => {
    setAcount(acount + 2);
  };
  return (
    <div className="hooks__react">
      <small>
        <strong>{acount}</strong>
      </small>
      <button onClick={handleClick}> aumentar en dos el contador </button>t
    </div>
  );
};

export default Learning;
