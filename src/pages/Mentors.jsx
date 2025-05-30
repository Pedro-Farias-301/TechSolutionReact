import { Link } from 'react-router-dom';

function Mentors() {
  return (
    <div>
      {/* Carrossel */}
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1625726411847-3d28f9e4895e.webp"
            className="w-full h-64 object-cover"
            alt="Mentores 1"
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
            alt="Mentores 2"
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
            alt="Mentores 3"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">❮</a>
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>

      {/* Cards */}
      <div className="flex flex-col md:flex-row gap-4 p-4 justify-center">
        <div className="card bg-base-100 w-96 shadow-sm">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Orientação"
              className="w-full h-48 object-cover"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Orientação Profissional
              <div className="badge badge-secondary">NOVO</div>
            </h2>
            <p>Receba orientação personalizada de mentores experientes.</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Carreira</div>
              <div className="badge badge-outline">Mentoria</div>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-sm">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Workshops"
              className="w-full h-48 object-cover"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Workshops Exclusivos
              <div className="badge badge-secondary">NOVO</div>
            </h2>
            <p>Participe de workshops práticos com mentores da TechSolution.</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Workshops</div>
              <div className="badge badge-outline">Prática</div>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-sm">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Suporte"
              className="w-full h-48 object-cover"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Suporte Contínuo
              <div className="badge badge-secondary">NOVO</div>
            </h2>
            <p>Tenha suporte contínuo para seus projetos e dúvidas.</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Suporte</div>
              <div className="badge badge-outline">Projetos</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mentors;