import { Link } from 'react-router-dom';

function Communities() {
  return (
    <div>
      
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://academiatech.s3.amazonaws.com/wp-content/uploads/2023/06/mulher-computador-24062023-649b65bf8e1ad-1024x576.webp"
            className="w-full h-64 object-cover"
            alt="Comunidade 1"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle">❮</a>
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://academiatech.s3.amazonaws.com/wp-content/uploads/2023/10/homem-computador-23102023-6536b66c49549.webp"
            className="w-full h-64 object-cover"
            alt="Comunidade 2"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">❮</a>
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://wordpress-cms-revista-prod-assets.quero.space/legacy_posts/post_images/41144/4651d2a2d188dadf1fa0af405f0f722a25517843.jpg?1660153136"
            className="w-full h-64 object-cover"
            alt="Comunidade 3"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">❮</a>
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>

      
      <div className="flex flex-col md:flex-row gap-4 p-4 justify-center">
        <div className="card bg-base-100 w-96 shadow-sm">
          <figure>
            <img
              src="https://portal.pucrs.br/wp-content/uploads/2024/07/ages-engenharia-de-software-2.png"
              alt="Networking"
              className="w-full h-48 object-cover"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Networking
              <div className="badge badge-secondary">NOVO</div>
            </h2>
            <p>Conecte-se com profissionais e amplie sua rede de contatos.</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Conexões</div>
              <div className="badge badge-outline">Networking</div>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-sm">
          <figure>
            <img
              src="https://anhanguera.s3.amazonaws.com/wp-content/uploads/2024/08/necessidades-dos-usuarios-de-forma-mais-agil-engenheiros-de-software-29-08-2024-66d1080a85498.webp"
              alt="Colaboração"
              className="w-full h-48 object-cover"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Colaboração
              <div className="badge badge-secondary">NOVO</div>
            </h2>
            <p>Trabalhe em projetos conjuntos com outros membros da comunidade.</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Projetos</div>
              <div className="badge badge-outline">Equipe</div>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-sm">
          <figure>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxQPImMc1fWXY0_tPz1ftEaxl062qjODbWbRQSJcGa7LNwa48-ODfTkM6l13pXavU9L4Q&usqp=CAU"
              alt="Eventos"
              className="w-full h-48 object-cover"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Eventos
              <div className="badge badge-secondary">NOVO</div>
            </h2>
            <p>Participe de eventos e meetups organizados pela comunidade.</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Meetups</div>
              <div className="badge badge-outline">Eventos</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Communities;