function Home() {
  return (
    <div className="flex flex-col items-center bg-base-200 min-h-screen ">
      {/* Seção Hero com Boas-vindas e Login */}
      <div className="hero bg-base-200 min-h-[50vh]">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Bem-vindo à TechSolution</h1>
            <p className="py-6">
              Oferecemos as melhores soluções tecnológicas para o seu negócio. Explore nossos serviços e entre em contato!
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl bg-gray-900">
            <div className="card-body ">
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input type="email" className="input" placeholder="Email" />
                <label className="label">Senha</label>
                <input type="password" className="input" placeholder="Insira sua senha" />
                <div>
                  <a className="link link-hover">Esqueceu sua Senha?</a>
                </div>
                <button className="btn btn-neutral mt-4">Entrar</button>
              </fieldset>
            </div>
          </div>
        </div>
      </div>

      {/* Seção dos Cards */}
      <div className="flex flex-col md:flex-row gap-4 p-4 justify-center ">
        {/* Card 1 */}
        <div className="card bg-base-100 w-96 shadow-sm">
          <figure>
            <img
              src="./public/slide2.jfif" alt="Software"
              className="w-full h-48 object-cover"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Comunidade
              <div className="badge badge-primary"></div>
            </h2>
            <p>Precisa de profissionais talentosos para transformar sua visão em realidade?
              Veja seu negócio crescer ao colaborar com uma equipe dedicada e criativa de jovens extremamente talentosos!
            </p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Software</div>
              <div className="badge badge-outline">Comunidade</div>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="card bg-base-100 w-96 shadow-sm">
          <figure>
            <img
              src="./public/slide1.jpg" alt="Software"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Estudante
              <div className="badge badge-primary"></div>
            </h2>
            <p>Quer aprender na pratica ao lado de profissionais experientes e adquirir habilidades essenciais para sua carreira?
              Construa um portifólio que mostre seu talento e conquiste Oportunidades únicas!
            </p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Experiência</div>
              <div className="badge badge-outline">Portifólio</div>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="card bg-base-100 w-96 shadow-sm">
          <figure>
            <img src="./public/slide3.jfif" alt="Software" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Mentores
              <div className="badge badge-primary   "></div>
            </h2>
            <p>Está pronto para compartilhar sua experiencia e fortalecer sua liderança?
              Veja o impacto direto do seu conhecimento na formação dos futuros lideres!
            </p>
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