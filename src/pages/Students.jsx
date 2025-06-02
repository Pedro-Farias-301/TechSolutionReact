import { Link } from 'react-router-dom';

function Students() {
  return (
    <div>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="/carousel-student-1.webp"
            className="w-full h-64 object-cover object-center"
            alt="Estudantes 1"
            loading="lazy"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle">❮</a>
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="/carousel-student-2.webp"
            className="w-full h-64 object-cover object-center"
            alt="Estudantes 2"
            loading="lazy"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">❮</a>
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="/carousel-student-3.webp"
            className="w-full h-64 object-cover object-center"
            alt="Estudantes 3"
            loading="lazy"
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
              src="/card-resources.webp"
              alt="Recursos"
              className="w-full h-48 object-cover object-center"
              loading="lazy"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Recursos Educacionais
              <div className="badge badge-secondary">NOVO</div>
            </h2>
            <p>Acesse tutoriais e materiais de estudo exclusivos.</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Tutoriais</div>
              <div className="badge badge-outline">Estudo</div>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-sm">
          <figure>
            <img
              src="/card-support.webp"
              alt="Suporte"
              className="w-full h-48 object-cover object-center"
              loading="lazy"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Suporte aos Estudantes
              <div className="badge badge-secondary">NOVO</div>
            </h2>
            <p>Obtenha ajuda de mentores e colegas da comunidade.</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Mentoria</div>
              <div className="badge badge-outline">Comunidade</div>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-sm">
          <figure>
            <img
              src="/card-opportunities.webp"
              alt="Oportunidades"
              className="w-full h-48 object-cover object-center"
              loading="lazy"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Oportunidades de Aprendizado
              <div className="badge badge-secondary">NOVO</div>
            </h2>
            <p>Participe de workshops e eventos educacionais.</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Workshops</div>
              <div className="badge badge-outline">Eventos</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Students;