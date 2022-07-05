import NewsPage from './components/NewsPage';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<NewsPage />}></Route>
      <Route path="/:category" element={<NewsPage />}></Route>
    </Routes>
  );
}

export default App;
