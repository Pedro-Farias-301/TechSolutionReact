import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="flex flex-col items-center bg-base-200 min-h-screen">
      {/* Seção Hero Inicial (mantida, mas será substituída pelo Hero do Layout) */}
      <div className="hero bg-base-200 min-h-[50vh]">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Bem-vindo à TechSolution</h1>
            <p className="py-6">
              Oferecemos as melhores soluções tecnológicas para o seu negócio. Explore nossos
              serviços e entre em contato!
            </p>
          </div>
        </div>
      </div>

      {/* Seção dos Badges */}
      <div className="flex gap-4 p-4 justify-center">
        <div className="badge badge-primary text-white">Estudantes</div>
        <div className="badge badge-primary text-white">Comunidade</div>
        <div className="badge badge-primary text-white">Mentores</div>
      </div>

      {/* Seção dos Cards */}
      <div className="flex flex-col md:flex-row gap-4 p-4 justify-center">
        {/* Card 1 */}
        <div className="card bg-base-100 w-96 shadow-sm">
          <figure>
            <img
              src='/public/slide1.jpg'
              alt="Software"
              className="w-full h-48 object-cover"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Estudantes
              <div className="badge badge-primary"></div>
            </h2>
            <p>Construa um portfólio que mostre seu talento e conquiste oportunidades únicas!</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Software</div>
              <div className="badge badge-outline">Desenvolvimento</div>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="card bg-base-100 w-96 shadow-sm">
          <figure>
            <img
              src="/public/slide2.jfif"
              alt="Consultoria"
              className="w-full h-48 object-cover"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Comunidade
              <div className="badge badge-primary"></div>
            </h2>
            <p>Leve suas ideias ao próximo nível com soluções tecnológicas sob medida.</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Negicios</div>
              <div className="badge badge-outline">Soluções Tecnologicas</div>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="card bg-base-100 w-96 shadow-sm">
          <figure>
            <img
              src="/public/slide3.jfif"
              alt="Cloud"
              className="w-full h-48 object-cover"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Mentores
              <div className="badge badge-primary"></div>
            </h2>
            <p>Inspire e guie a nova geração de profissionais em projetos desafiadores.</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Mentoria</div>
              <div className="badge badge-outline">Liderança</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;