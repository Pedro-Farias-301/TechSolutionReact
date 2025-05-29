function Students() {
  return (
    <div>
      {/* Carrossel */}
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1625726411847-3d28f9e4895e.webp"
            className="w-full h-64 object-cover"
            alt="Estudantes 1"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1705.webp"
            className="w-full h-64 object-cover"
            alt="Estudantes 2"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
            className="w-full h-64 object-cover"
            alt="Estudantes 3"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>

      {/* Cards entre o Carrossel e o Hero */}
      <div className="flex flex-col md:flex-row gap-4 p-4 justify-center">
        {/* Card 1 */}
        <div className="card bg-base-100 w-96 shadow-sm">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Recursos"
              className="w-full h-48 object-cover"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Recursos Educacionais
              <div className="badge badge-secondary">NOVO</div>
            </h2>
            <p>Acesse tutoriais e materiais de estudo exclusivos.</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Tutoriais</div>
              <div className="badge badge-outline">Estudo</div>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="card bg-base-100 w-96 shadow-sm">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Suporte"
              className="w-full h-48 object-cover"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Suporte aos Estudantes
              <div className="badge badge-secondary">NOVO</div>
            </h2>
            <p>Obtenha ajuda de mentores e colegas da comunidade.</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Mentoria</div>
              <div className="badge badge-outline">Comunidade</div>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="card bg-base-100 w-96 shadow-sm">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Oportunidades"
              className="w-full h-48 object-cover"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Oportunidades de Aprendizado
              <div className="badge badge-secondary">NOVO</div>
            </h2>
            <p>Participe de workshops e eventos educacionais.</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Workshops</div>
              <div className="badge badge-outline">Eventos</div>
            </div>
          </div>
        </div>
      </div>

      {/* Seção Hero */}
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
            <h1 className="mb-5 text-5xl font-bold">Página para Estudantes</h1>
            <p className="mb-5">
              Aqui você encontrará recursos exclusivos para estudantes da TechSolution. Explore
              materiais, suporte e oportunidades de aprendizado.
            </p>
            <button className="btn btn-primary">Começar Agora</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Students;