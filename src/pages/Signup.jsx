function Signup() {
  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center">
      <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
        <div className="card-body">
          <h1 className="text-3xl font-bold text-center">Inscreva-se na TechSolution</h1>
          <fieldset className="fieldset">
            <label className="label">Nome</label>
            <input type="text" className="input" placeholder="Seu nome" />
            <label className="label">Email</label>
            <input type="email" className="input" placeholder="Email" />
            <label className="label">Senha</label>
            <input type="password" className="input" placeholder="Password" />
            <label className="label">Confirmar Senha</label>
            <input type="password" className="input" placeholder="Confirmar Password" />
            <button className="btn btn-primary mt-4">Criar Conta</button>
          </fieldset>
          <p className="text-center mt-4">
            Já tem uma conta?{' '}
            <a href="/" className="link link-hover">
              Faça login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;