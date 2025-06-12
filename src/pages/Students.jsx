import { Link } from 'react-router-dom';

function Students() {
  return (
    <div>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://academiatech.s3.amazonaws.com/wp-content/uploads/2023/06/mulher-computador-24062023-649b65bf8e1ad-1024x576.webp"
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
            src="https://academiatech.s3.amazonaws.com/wp-content/uploads/2023/10/homem-computador-23102023-6536b66c49549.webp"
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
            src="https://wordpress-cms-revista-prod-assets.quero.space/legacy_posts/post_images/41144/4651d2a2d188dadf1fa0af405f0f722a25517843.jpg?1660153136"
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
              src="https://portal.pucrs.br/wp-content/uploads/2024/07/ages-engenharia-de-software-2.png"
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
              src="https://cdn.portal.estacio.br/E_necessario_saber_programar_antes_de_comecar_o_curso_mobile_8534e28d1d.png"
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
              src="https://static.mundoeducacao.uol.com.br/vestibular/2021/04/1-engenheiro-de-computacao.jpg"
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