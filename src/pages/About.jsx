import { Link } from 'react-router-dom';

function About() {
  return (
    <div>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1625726411847-3d28f9e4895e.webp"
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
            src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1705.webp"
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
            src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
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
          Fundada com a missão de transformar ideias em soluções tecnológicas inovadoras, a
          TechSolution tem mais de 5 anos de experiência ajudando empresas a prosperarem no mundo
          digital. Nosso compromisso é oferecer serviços de alta qualidade com foco em resultados.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <div className="card bg-base-100 w-80 shadow-sm">
            <div className="card-body">
              <h2 className="card-title">Missão</h2>
              <p>Empoderar negócios com tecnologia acessível e inovadora.</p>
            </div>
          </div>
          <div className="card bg-base-100 w-80 shadow-sm">
            <div className="card-body">
              <h2 className="card-title">Visão</h2>
              <p>Ser líder global em soluções tecnológicas até 2030.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-4 p-4 justify-center">
        <div className="card bg-base-100 w-96 shadow-sm">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              alt="CEO"
              className="w-full h-48 object-cover"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">João Silva - CEO</h2>
            <p>Líder visionário com mais de 10 anos na indústria tech.</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Liderança</div>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-sm">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              alt="Desenvolvedor"
              className="w-full h-48 object-cover"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Maria Oliveira - Desenvolvedora</h2>
            <p>Especialista em React e soluções web inovadoras.</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Desenvolvimento</div>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-sm">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              alt="Designer"
              className="w-full h-48 object-cover"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Pedro Santos - Designer</h2>
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