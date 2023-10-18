import React from "react";

function Home() {
    return (
        <div className="menu">
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css"></link>
            <link rel="stylesheet" href="home.css" ></link>
            <p>isso e minha</p>

            <div className="perfil" >

                <p className="nome1">instagrão</p>

                <div className="n5" ><i class="bi bi-house-door-fill"></i> Pagina inicial</div>
                <div className="n5" ><i class="bi bi-search"></i> Pesquisa</div>
                <div className="n5" ><i class="bi bi-compass"></i>  Explorar</div>
                <div className="n5" ><i class="bi bi-camera-reels"></i> Reels </div>
                <div className="n5" ><i class="bi bi-chat-dots"></i> Mensagem</div>
                <div className="n5" ><i class="bi bi-heart"></i> Notificação</div>
                <div className="n5" ><i class="bi bi-plus-square"></i> Criar</div>
                <div className="n5" ><i class="bi bi-person-circle"></i> Perfil</div>
                <div className="n51" ><i class="bi bi-list"></i> Mais</div>
            </div>


            <div className="q">

                    <div className="t">
                        <p className="todonome" ><i class="bi bi-person-circle"></i>  Maria de lins <span className="fd" ><i class="bi bi-three-dots"></i></span></p>
                    </div>
                    <div ><img className="foto" src="https://images.pexels.com/photos/1394841/pexels-photo-1394841.jpeg?auto=compress&cs=tinysrgb&w=600"></img></div>
                    <div className="icon">
                        <i class="bi bi-heart"></i>
                        <i class="bi bi-chat-dots"></i>
                        <i class="bi bi-send"></i>
                        <span className="salva" ><i class="bi bi-bookmark"></i></span>

                    </div>

                </div>


        </div>
    )
};
export default Home;