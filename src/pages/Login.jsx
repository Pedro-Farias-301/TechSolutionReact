import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center">
      <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
        <div className="card-body">
          <h1 className="text-3xl font-bold text-center">Faça Login na TechSolution!</h1>
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input type="email" className="input" placeholder="Email" />
            <label className="label">Senha</label>
            <input type="password" className="input" placeholder="Password" />
            <div>
              <a className="link link-hover">Esqueceu a senha?</a>
            </div>
            <button className="btn btn-primary mt-4">Entrar</button>
          </fieldset>
          <p className="text-center mt-4">
            Não tem uma conta?{' '}
            <Link to="/signup" className="link link-hover">
              Inscreva-se
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;