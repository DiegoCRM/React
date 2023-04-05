import './MyForm.css';
import {useState} from 'react';

const MyForm = ({user}) => {
    // 6- controlled inputs
    // 3 - gerenciamentos de dados
    const [name, setName] = useState(user ? user.name : '');
    const [email, setEmail] = useState(user ? user.email : '');

    const [bio, setBio] = useState(user ? user.bio : '');

    const [role, setRole] = useState(user ? user.role : '');

    const handleName = (e) => {
        setName(e.target.value)
    }

    /* console.log(name);
    console.log(email); */

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("enviando formulário");
        console.log(name, email, bio, role)

        // 7 - limpar form

        setName("");
        setEmail("");
        setBio("");
        setRole("");

    }


  return (
    <div>

      {/* 5- envio de form */}
      {/* 1- criacao de form */}

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input type="text" name="name" placeholder="Digite seu nome" onChange={handleName} value={name} />
        </div>


        {/* 2- label envolvendo input */}

        <label htmlFor="">
          <span>E-mail:</span>

          {/* 4- Simplicação de manipulação de state */}
          <input type="email" name="email" placeholder="Digite seu email" onChange={(e) => setEmail(e.target.value) } value={email}/>
        </label>

        {/* 8 - textarea */}

        <label >
          <span>Bio:</span>
          <textarea name="bio" placeholder="Descrição do usuário" onChange={(e) => setBio(e.target.value)} value={bio} ></textarea>
        </label>

        {/* 9 - select */}
        <label>
          <span>Função do Sistema</span>
          <select name="role" onChange={(e) => setRole(e.target.value)} value={role}>
            <option value="selecione">Selecione</option>
            <option value="user">Usuário</option>
            <option value="editor">Editor</option>
            <option value="admin">Administrador</option>
          </select>
        </label>

        <input type="submit" value="Enviar" />
      </form>
    </div>
  )
}

export default MyForm