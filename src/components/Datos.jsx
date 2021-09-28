import { memo } from 'react';

const Datos = ({ value }) => {
  console.log('._.');
  return <>{value}</>;
};

export default memo(Datos);
