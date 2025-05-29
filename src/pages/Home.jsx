import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="flex flex-col items-center bg-base-200 min-h-screen">
      {/* Seção Hero Inicial */}
      <div className="hero bg-base-200 min-h-[50vh]">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Bem-vindo à TechSolution</h1>
            <p className="py-6">
              Junte-se à plataforma que conecta talentos, desafios e conhecimento para criar soluções impactantes!
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
              src="./public/slide1.jpg"
              alt="Software"
              className="w-full h-48 object-cover"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Estudantes
              <div className="badge badge-primary"></div>
            </h2>
            <p>Construa um portifólio que mostre seu talento e conquiste Oportunidades únicas!</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Experiência</div>
              <div className="badge badge-outline">Portifolio</div>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="card bg-base-100 w-96 shadow-sm">
          <figure>
            <img
              src="./public/slide2.jfif"
              alt="Consultoria"
              className="w-full h-48 object-cover"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Comunidade
              <div className="badge badge-primary"></div>
            </h2>
            <p>Veja seu negócio crescer ao colaborar com uma equipe dedicada e criativa de jovens extremamente talentosos!</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Consultoria</div>
              <div className="badge badge-outline">Software</div>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="card bg-base-100 w-96 shadow-sm">
          <figure>
            <img
              src="./public/slide3.jfif"
              alt="Cloud"
              className="w-full h-48 object-cover"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Mentores
              <div className="badge badge-primary"></div>
            </h2>
            <p>Torne-se um mentor e faça parte de uma comunidade que valoriza e reconhece sua contribuição!</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Liderança</div>
              <div className="badge badge-outline">Conhecimento</div>
            </div>
          </div>
        </div>
      </div>

      {/* Seção Hero no final com botão de inscrição */}
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Bem-vindo à TechSolution</h1>
            <p className="mb-5">
              Uma plataforma projetada para conectar estudantes, comunidade e mentores, criando soluções e oportunidades para todos,
              Faça Login ou Cadastre-se para fazer parte!
            </p>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
              <div className="card-body">
                <fieldset className="fieldset">
                  <label className="label">Email</label>
                  <input type="email" className="input" placeholder="Email" />
                  <label className="label">Senha</label>
                  <input type="password" className="input" placeholder="Senha" />
                  <div>
                    <a className="link link-hover">Esqueceu a senha?</a>
                  </div>
                  <div className="flex gap-2 mt-4">
                    <button className="btn btn-neutral flex-1">Entrar</button>
                    <Link to="/signup" className="btn btn-primary flex-1">Inscrever-se</Link>
                  </div>
                </fieldset>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;