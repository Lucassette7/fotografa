import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Portfolio = () => {
  const [imagemSelecionada, setImagemSelecionada] = useState(null);

  const imagens = Array.from({ length: 52 }, (_, i) => ({
    id: i,
    caminho: `/imagens/fotos/foto${i + 1}.jpg`,
  }));

  return (
    <section className="min-h-screen w-full bg-[#fdf6ec] text-[#5e4b3c] px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-3xl font-bold mb-10 border-b-2 border-[#e6d3b3] inline-block">
          Portfólio
        </h3>

        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          className="pb-10"
        >
          {imagens.map((item) => (
            <SwiperSlide key={item.id}>
              <div
                className="rounded-xl shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300 bg-white cursor-pointer overflow-hidden"
                onClick={() => setImagemSelecionada(item.caminho)}
              >
                <img
                  src={item.caminho}
                  alt={`Foto ${item.id + 1}`}
                  className="w-full h-96 object-cover" // ← altura maior aqui
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Modal para imagem expandida */}
      {imagemSelecionada && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setImagemSelecionada(null)}
        >
          <div className="relative max-w-4xl w-full px-4">
            <button
              onClick={() => setImagemSelecionada(null)}
              className="absolute top-4 right-4 text-white text-2xl font-bold z-50"
            >
              &times;
            </button>
            <img
              src={imagemSelecionada}
              alt="Imagem ampliada"
              className="w-full max-h-[80vh] object-contain rounded-lg shadow-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
