import { useLocation } from 'react-router-dom';
import { useState } from 'react';

function Hero() {
  const location = useLocation();
  const isAboutPage = location.pathname === '/about';


  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    role: 'Membro da comunidade', 
    phone: ''
  });

 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    
    const googleFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSe39f0DqhLfEb1cy2gKveNBp9fJFNJtLhfZd6zQYDN3ThrWxg/formResponse';
    
    const formBody = new URLSearchParams({
      'entry.585719826': formData.fullName, 
      'entry.999077649': formData.email,    
      'entry.676528212': formData.role,     
      'entry.351666918': formData.phone    
    });

    try {
      const response = await fetch(googleFormUrl, {
        method: 'POST',
        body: formBody,
        mode: 'no-cors' 
      });
      alert('Formulário enviado com sucesso!');
    
      setFormData({
        fullName: '',
        email: '',
        role: 'Membro da comunidade',
        phone: ''
      });
    } catch (error) {
      console.error('Erro ao enviar o formulário:', error);
      alert('Erro ao enviar o formulário. Tente novamente.');
    }
  };

  return (
    <div
      className="hero min-h-[50vh]"
      style={{
        backgroundImage: "url(https://img.freepik.com/vetores-premium/fundo-de-conceito-futuro-tecnologia-cyber-circuito-roxo_42077-4016.jpg)",
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Bem-vindo à TechSolution!!</h1>
          <p className="mb-5">
            Uma plataforma projetada para conectar estudantes, comunidade e mentores, criando soluções e oportunidades para todos. Se tiver dúvidas, deixe seu contato!
          </p>
          {!isAboutPage && (
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <fieldset className="fieldset">
                    <label className="label">Nome completo</label>
                    <input
                      type="text"
                      name="fullName"
                      className="input "
                      placeholder="Nome completo"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                    />
                    <label className="label">Email</label>
                    <input
                      type="email"
                      name="email"
                      className="input"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                    <label className="label">Você é</label>
                    <select
                      name="role"
                      className="select select-bordered w-full"
                      value={formData.role}
                      onChange={handleChange}
                      required
                    >
                      <option value="Membro da comunidade">Membro da comunidade.</option>
                      <option value="Estudante">Estudante.</option>
                      <option value="Mentor">Mentor.</option>
                    </select>
                    <label className="label">Telefone.
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      className="input"
                      placeholder="Telefone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                    <div className="flex gap-2 mt-4">
                      <button type="submit" className="btn btn-neutral flex-1">
                        Enviar
                      </button>
                    </div>
                  </fieldset>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Hero;