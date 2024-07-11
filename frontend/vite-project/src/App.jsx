import { useEffect } from 'react';
import './App.css';
import axios from 'axios';
import  useNavigate from 'react-router-dom'
const api = axios.create({
  baseURL: 'http://localhost:3200/'
});

function App() {
 const logout=()=>{
  localStorage.clear()
  navigate('/')
 }

  return (
    <>
      <div>
     
      </div>
    </>
  );
}

export default App;
