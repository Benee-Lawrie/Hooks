import { useState, useEffect } from 'react';
import './index.css'; 

const useGetName = (arr, name) => {
  const [filteredName, setFilteredName] = useState('');

  useEffect(() => {
    const filteredName = arr.filter((item) => item === name);
    setFilteredName(filteredName[0]);
  }, [arr, name]);

  return filteredName;
};


const NamesComponent = () => {
  const names = ['Benny', 'Johnny', 'Nancy', 'Nelson', 'Salvation'];
  const specificName = useGetName(names, 'Benny'); 

  return (
    <div className='container'>
      <h2 className='heading'>Filtered Name:</h2>
      <p className='name'>{specificName || 'Not found'}</p>
    </div>
  );
};

export default NamesComponent; 

  





