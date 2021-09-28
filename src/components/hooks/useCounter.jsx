import { useRef, useState,memo } from 'react';

export const UseAcount = () => {
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setCounter((i) => i + 1);
  };
  return {handleClick, counter };
};

export const UseRef = () => {
  const ref = useRef('');

  const handleRef = () => {
    ref.current.value = 'ya se mas o menos como se maneja el use effect ayudemn jsjsjsj creo que escribo mas rapido asi jsjsjsjs';
    ref.current.select();
  };
  return { handleRef, ref };
};
