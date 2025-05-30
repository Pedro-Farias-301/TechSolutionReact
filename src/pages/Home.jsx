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
        <div className="badge badge-secondary text-white">Comunidade</div>
        <div className="badge badge-secondary text-white">Estudante</div>
        <div className="badge badge-secondary text-white">Mentores</div>
      </div>

      {/* Seção dos Cards */}
      <div className="flex flex-col md:flex-row gap-4 p-4 justify-center">
        {/* Card 1 */}
        <div className="card bg-base-100 w-96 shadow-sm">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Software"
              className="w-full h-48 object-cover"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Solução 1
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>Desenvolvimento de software personalizado para atender às suas necessidades específicas.</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Software</div>
              <div className="badge badge-outline">Customização</div>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="card bg-base-100 w-96 shadow-sm">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Consultoria"
              className="w-full h-48 object-cover"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Solução 2
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>Consultoria em TI para otimizar sua infraestrutura e processos tecnológicos.</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Consultoria</div>
              <div className="badge badge-outline">TI</div>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="card bg-base-100 w-96 shadow-sm">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Cloud"
              className="w-full h-48 object-cover"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Solução 3
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>Soluções em nuvem para maior escalabilidade e segurança dos seus dados.</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Cloud</div>
              <div className="badge badge-outline">Segurança</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;