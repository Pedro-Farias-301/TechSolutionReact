import { Link } from 'react-router-dom';

function Mentors() {
  return (
    <div>
      
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://academiatech.s3.amazonaws.com/wp-content/uploads/2023/06/mulher-computador-24062023-649b65bf8e1ad-1024x576.webp"
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
            src="https://academiatech.s3.amazonaws.com/wp-content/uploads/2023/10/homem-computador-23102023-6536b66c49549.webp"
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
            src="https://wordpress-cms-revista-prod-assets.quero.space/legacy_posts/post_images/41144/4651d2a2d188dadf1fa0af405f0f722a25517843.jpg?1660153136"
            className="w-full h-64 object-cover"
            alt="Mentores 3"
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
              src="https://faculdadeinfnet.com.br/wp-content/uploads/sites/10/2021/06/engenheiro-trabalhando-engenharia-de-software.jpg"
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
              src="https://cdn2.hubspot.net/hubfs/2961792/eng-software-curso-undb.jpg"
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
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaBY65yHMO6lJ2b37-1_cSycmd--YGe21o1qRYZvWgoKajZEcK9YgSExnHVjUANBLCyD4&usqp=CAU"
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