'use client';
import React from 'react';
import { Home, User, Image, Server } from 'lucide-react';

const SideBar = ({ scrollTo, valorSelecionado }) => {
  const botoes = [
    { id: 0, nome: 'Início', icone: <Home size={20} />, valor: 'inicio' },
    { id: 1, nome: 'Sobre Mim', icone: <User size={20} />, valor: 'sobreMim' },
    { id: 2, nome: 'Portfólio', icone: <Image size={20} />, valor: 'portfolio' },
    { id: 3, nome: 'Serviços', icone: <Server size={20} />, valor: 'contato' },
  ];

  return (
    <aside className="fixed top-1/2 left-4 transform -translate-y-1/2 flex flex-col gap-12 z-50">
      {botoes.map((item) => {
        const isSelected = item.valor === valorSelecionado;
        return (
          <button
            key={item.id}
            title={item.nome}
            onClick={() => scrollTo[item.valor]()}
            className={`w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 shadow-md relative group ${
              isSelected ? 'bg-[#e6d3b3] text-gray-500 hover:text-gray-500' : 'bg-white shadow-[#e6d3b3] hover:bg-[#e6d3b3] text-gray-500'
            }`}
          >
            {item.icone}
            <span className="absolute left-12 top-1/2 -translate-y-1/2 text-sm bg-white px-2 py-1 rounded-md shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap text-[#5e4b3c]">
              {item.nome}
            </span>
          </button>
        );
      })}
    </aside>
  );
};

export default SideBar;
