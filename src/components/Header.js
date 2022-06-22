 import React from "react";
 import './Header.css';
 import Logo from'../imagens/logonetflix.png'

 export default ({black}) => {
     return (
         <header className={black ? 'black' : ''}>
             <div className="header--logo">
                 <a href="/">
                     <img src={Logo} alt="Netflix" />
                 </a>
                 </div>
            <div className="header--user">
                <a href="/">
                    <img src="https://i.pinimg.com/474x/b6/77/cd/b677cd1cde292f261166533d6fe75872.jpg" alt="Usuário" />
                </a>
            </div>
         </header>
     )
 }