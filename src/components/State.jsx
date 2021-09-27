import { useRef } from 'react';

const State = () => {
  const ref = useRef(null);
  const handleClick = () => {
    ref.current.value = 'hola mundo en rect';
    ref.current.select()
  };
  return (
    <div className="app__state">
      <h2>useRef</h2>
      <textarea
        ref={ref}
        name="nolose"
        id="tutancamon"
        cols="30"
        rows="10"
      ></textarea>
      <br />
      <button onClick={handleClick}>imprimir hola mundo con useRef</button>
    </div>
  );
};

export default State;
