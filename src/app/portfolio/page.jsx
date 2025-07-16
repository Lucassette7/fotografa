import React from 'react';

const Portfolio = () => {
  const imagens = [
    { id: 0, caminho: '/imagens/foto1.jpg' },
    { id: 1, caminho: '/imagens/foto2.jpg' },
    { id: 2, caminho: '/imagens/foto3.jpg' },
    { id: 3, caminho: '/imagens/foto4.jpg' },
    { id: 4, caminho: '/imagens/foto5.jpg' },
    { id: 5, caminho: '/imagens/foto6.jpg' },
    { id: 6, caminho: '/imagens/foto7.jpg' },
    { id: 7, caminho: '/imagens/foto8.jpg' },
  ];

  return (
    <section className="min-h-screen w-full bg-[#fdf6ec] text-[#5e4b3c] px-6 py-12">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-3xl font-bold mb-10 border-b-2 border-[#e6d3b3] inline-block">
          Portfólio
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {imagens.map((item) => (
            <div
              key={item.id}
              className="overflow-hidden rounded-xl shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300 bg-white"
            >
              <img
                src={item.caminho}
                alt={`Foto ${item.id + 1}`}
                className="w-full h-64 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
