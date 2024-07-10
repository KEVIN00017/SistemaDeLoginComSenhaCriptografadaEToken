import { useEffect } from 'react';
import './App.css';
import axios from 'axios';
const api = axios.create({
  baseURL: 'http://localhost:3200/'
});

function App() {
  const history = useHistory(); // Hook para redirecionamento

  useEffect(() => {
    const logout = async () => {
      const token = localStorage.getItem('token');

      if (!token) {
        console.log("Usuário não está logado");
        history.push('/login'); // Redireciona para a página de login
        return;
      }

      try {
        const response = await api.post('/logout', {}, {
          headers: {
            'authorization-token': token
          }
        });

        if (response.status === 200) {
          localStorage.removeItem('token');
          console.log("Logout realizado com sucesso!");
         // Redireciona para a página de login
        } else {
          console.log("Erro ao realizar logout");
        }
      } catch (error) {
        console.error("Erro ao realizar logout:", error);
      }
    };

    logout();
  }, []);

  return (
    <>
      <div>
     
      </div>
    </>
  );
}

export default App;
