import { FaTrash } from "react-icons/fa";
import { useEffect, useState, useRef } from "react";
import './style.css'
import api from "../../services/api";

export default function Home() {
  const [users, setUsers] = useState([]);

  const inputName = useRef();
  const inputAge = useRef();
  const inputEmail = useRef();

  async function getUsers() {
    const usersFromDatabase = await api.get('/usuarios')
    setUsers(usersFromDatabase.data);
  }

  async function deleteUsers(id) {
    await api.delete(`/usuarios/${id}`);
    getUsers();
  }

  async function createUsers() {
    await api.post('/usuarios', {
      name: inputName.current.value,
      age: inputAge.current.value,
      email: inputEmail.current.value
    });
    getUsers();
  }

  useEffect(() => {
    getUsers();
  }, [])

  return (
    <div className='container'>
      <form>
        <h1>Cadastro de Usuários</h1>
        <input type="text" placeholder="Name" ref={inputName} />
        <input type="text" placeholder="Idade" ref={inputAge} />
        <input type="email" placeholder="Email" ref={inputEmail} />
        <button onClick={createUsers} type="submit">
          Cadastrar
        </button>
      </form>

      {users.map((user) => (
        <div className="card" key={user.id}>
          <div>
            <p>Nome:
              <span>{user.name}</span>
            </p>
            <p>Idade:
              <span>{user.age}</span>
            </p>
            <p>EmaiL:
              <span>{user.email}</span>
            </p>
          </div>
          <button onClick={() => deleteUsers(user.id)}>
            <FaTrash size={15} />
          </button>
        </div>
      ))}
    </div>
  )
}
