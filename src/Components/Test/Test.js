import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function Test() {
  const location = useLocation();
  const [previousPage, setPreviousPage] = useState(null);

  useEffect(() => {
    setPreviousPage(location.pathname);
  }, [location]);

  return (
    <div>
      <h1>Текущая страница: {location.pathname}</h1>
      <h2>Предыдущая страница: {previousPage}</h2>
    </div>
  );
}

export default Test;
