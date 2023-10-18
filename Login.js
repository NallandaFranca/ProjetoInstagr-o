import React, { useState } from 'react';

function LoginForm() {
    const [nomeUsuario, setNomeUsuario] = useState('');
    const [senhaUsuario, setSenhaUsuario] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const usuarios = [
        { nome: "nallanda", senha: "nallanda14" },
        { nome: "mayara", senha: "mayara14" },
        { nome: "ester", senha: "ester14" },
        { nome: "kusuki", senha: "fumof1" }
    ];

    function manipulaLogin() {
        // Verificar se o nome de usuário e a senha são válidos
        const usuarioValido = usuarios.find(user => user.nome === nomeUsuario && user.senha === senhaUsuario);

        if (usuarioValido) {
            window.location.href = "/Home";
        } else {
            setErrorMessage('Nome de usuário ou senha incorretos.');
        }
    }

    return (
        <div className="login-container">
          
            <h2>Instagrão</h2>
            <input
                className='imp1'
                type="text"
                placeholder="Número de telemóvel, nome de utilizador ou Email"
                value={nomeUsuario}
                onChange={(e) => setNomeUsuario(e.target.value)}
                required
            /> <br></br>
            <input
                className='imp1'
                type="password"
                placeholder="Palavra-passe"
                value={senhaUsuario}
                onChange={(e) => setSenhaUsuario(e.target.value)}
                required
            /><br></br>
            <button className='buut' onClick={manipulaLogin}>Iniciar Sessão</button>
            <p style={{ color: 'red' }}>{errorMessage}</p>
            <div className="separator">
                <div className="line"></div>
                <span>OU</span>
                <div className="line"></div>
            </div>

            <div className='face'>
                <h4>Iniciar sessão com o facebook</h4><br></br>
                <p>Esqueceste-te da palavra-passe?</p>
            </div>
           
        </div>

    );
}

export default LoginForm;
