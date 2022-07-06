import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import { LoginPage } from './pages/LoginPage';
import { Layout } from './components/Layout';
import { Counter } from './components/Counter';

function App() {
  
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
           <Route path="login" element={<LoginPage />}/>
           <Route path="counter" element={<Counter />}/>
           <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>    
  );
}

export default App;
