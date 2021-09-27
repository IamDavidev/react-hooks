import { useRef } from 'react';

const UseRef = () => {
  const ref = useRef('');
const handleClick = ()=>{
    ref.current.value = 'React app full stack con Go';
    ref.current.select()
}
  return (
    <div className="ref">
      <textarea ref={ref}></textarea>
      <p onClick={handleClick}>añadir 'React app full stack con Go' en el text area</p>
    </div>
  );
};

export default UseRef;
