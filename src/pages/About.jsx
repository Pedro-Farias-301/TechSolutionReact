import { Link } from 'react-router-dom';

function About() {
  return (
    <div>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://academiatech.s3.amazonaws.com/wp-content/uploads/2023/06/mulher-computador-24062023-649b65bf8e1ad-1024x576.webp"
            className="w-full h-64 object-cover"
            alt="Equipe 1"
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
            alt="Equipe 2"
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
            alt="Equipe 3"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">❮</a>
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>
      <div className="p-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Sobre a TechSolution</h1>
        <p className="mb-4">
          Fundada com a missão de transformar ideias da Comunidade em soluções tecnológicas inovadoras,
          usando o conhecimento dos jovem estudantes e lideres para criar mais experiencias e criar uma comunidade tecnologica.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <div className="card bg-base-100 w-80 shadow-sm">
            <div className="card-body">
              <h2 className="card-title">Missão</h2>
              <p>Empoderar negócios com tecnologia, e criar novos profissionais capaciados.</p>
            </div>
          </div>
          <div className="card bg-base-100 w-80 shadow-sm">
            <div className="card-body">
              <h2 className="card-title">Visão</h2>
              <p>Ajudar no crescimento de mais de 1000 estudantes ate 2030.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-4 p-4 justify-center">
        <div className="card bg-base-100 w-96 shadow-sm">
          <figure>
            <img
              src="/public/eduardo.jpeg"
              alt="CEO"
              className="w-full h-48 object-cover"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Eduardo Faria - CEO</h2>
            <p>Líder visionário com mais de 20 anos na indústria tech.</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Liderança</div>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-sm">
          <figure>
            <img
              src="/public/pedro.jpeg"
              alt="Desenvolvedor"
              className="w-full h-48 object-cover"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Pedro - Desenvolvedor</h2>
            <p>Especialista em React e soluções web inovadoras.</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Desenvolvimento</div>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-sm">
          <figure>
            <img
              src="/public/marcos.jpeg"
              alt="Designer"
              className="w-full h-48 object-cover"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Marcos Estrela - Designer</h2>
            <p>Cria interfaces modernas e user-friendly.</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Design</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;