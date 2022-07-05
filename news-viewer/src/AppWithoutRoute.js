import { useCallback, useState } from 'react';
import axios from 'axios';
import NewsList from './components/NewsList';
import Categories from './components/Categories';

function AppWithoutRoute() {
  const [category, setCategory] = useState('all');
  const handleSelect = useCallback((category) => setCategory(category), []);

  return (
    <>
      <Categories category={category} handleSelect={handleSelect}></Categories>
      <NewsList category={category}></NewsList>
    </>
  );
}

export default AppWithoutRoute;
