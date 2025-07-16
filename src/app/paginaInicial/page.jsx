'use client';
import React, { useRef, useState } from 'react';
import SideBar from '../components/sideBar';
import SobreMim from '../sobreMim/page';
import Portfolio from '../portfolio/page';
import Contato from '../contato/page';

const PaginaInicial = () => {
  const [escolha, setEscolha] = useState('inicio');

  const topRef = useRef(null);
  const sobreRef = useRef(null);
  const portfolioRef = useRef(null);
  const contatoRef = useRef(null);

  const scrollTo = {
    inicio: () => {
      setEscolha('inicio');
      topRef.current?.scrollIntoView({ behavior: 'smooth' });
    },
    sobreMim: () => {
      setEscolha('sobreMim');
      sobreRef.current?.scrollIntoView({ behavior: 'smooth' });
    },
    portfolio: () => {
      setEscolha('portfolio');
      portfolioRef.current?.scrollIntoView({ behavior: 'smooth' });
    },
    contato: () => {
      setEscolha('contato');
      contatoRef.current?.scrollIntoView({ behavior: 'smooth' });
    },
  };

  return (
    <>
      {/* Hero da página inicial */}
      <section ref={topRef} className="relative w-full h-screen">
        <img
          src="/fotoPerfil/imgVanessa.jpg"
          alt="Vanessa Ribeiro Sette"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white bg-opacity-40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-md text-[#e6d3b3]">
            Vanessa Ribeiro Sette
          </h1>
          <span className="text-xl md:text-2xl bg-white/20 px-4 py-2 rounded-md backdrop-blur-sm text-[#e6d3b3]">
            Fotógrafa Profissional
          </span>
        </div>
      </section>

      {/* Sidebar */}
      <SideBar scrollTo={scrollTo} valorSelecionado={escolha} />

      {/* Seções */}
      <section ref={sobreRef}>
        <SobreMim />
      </section>
      <section ref={portfolioRef}>
        <Portfolio />
      </section>
      <section ref={contatoRef}>
        <Contato />
      </section>
    </>
  );
};

export default PaginaInicial;
