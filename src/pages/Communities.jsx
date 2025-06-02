import { Link } from 'react-router-dom';

function Communities() {
  return (
    <div>
      
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1625726411847-3d28f9e4895e.webp"
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
            src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1705.webp"
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
            src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
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
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
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
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
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
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
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