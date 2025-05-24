function Estudantes() {
  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center">
      <div className="card bg-base-100 p-6 shadow-xl">
        <h1 className="text-4xl font-bold text-center">Estudantes</h1>
        <p className="py-4">
          Aqui é para Estudantes
        </p>
        <div className="flex gap-4 mt-4">
          <div className="badge badge-secondary">Desenvolvimento</div>
          <div className="badge badge-secondary">Consultoria</div>
          <div className="badge badge-secondary">Nuvem</div>
        </div>
      </div>
    </div>
  );
}

export default Estudantes;