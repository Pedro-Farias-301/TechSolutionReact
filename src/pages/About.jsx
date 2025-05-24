function About() {
  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center">
      <div className="card bg-base-100 p-6 shadow-xl">
        <h1 className="text-4xl font-bold text-center">Contato</h1>
        <p className="py-4">
          Entre em contato conosco: email@techsolution.com ou (11) 1234-5678.
        </p>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Nome</span>
          </label>
          <input type="text" className="input input-bordered" placeholder="Seu nome" />
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" className="input input-bordered" placeholder="Seu email" />
          <label className="label">
            <span className="label-text">Mensagem</span>
          </label>
          <textarea className="textarea textarea-bordered" placeholder="Sua mensagem"></textarea>
          <button className="btn btn-neutral mt-4">Enviar</button>
        </div>
      </div>
    </div>
  );
}

export default About; 