import { useLocation } from 'react-router-dom';

function Hero() {
  const location = useLocation(); 
  const isAboutPage = location.pathname === '/about'; 

  return (
    <div
      className="hero min-h-[50vh]"
      style={{
        backgroundImage: "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Bem-vindo à TechSolution</h1>
          <p className="mb-5">
            Uma plataforma projetada para conectar estudantes, comunidade e mentores, criando soluções e oportunidades para todos. Se tiver dúvidas, deixe seu contato!
          </p>
          {/* Condicionalmente renderizar o formulário */}
          {!isAboutPage && (
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
              <div className="card-body">
                <fieldset className="fieldset">
                  <label className="label">Nome</label>
                  <input type="text" className="input" placeholder="Nome" />
                  <label className="label">Email</label>
                  <input type="email" className="input" placeholder="Email" />
                  <label className="label">Telefone</label>
                  <input type="number" className="input" placeholder="Telefone" />
                  <div className="flex gap-2 mt-4">
                    <button className="btn btn-neutral flex-1">Enviar</button>
                  </div>
                </fieldset>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Hero;