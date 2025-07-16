import React from 'react';
import { Navigation, Phone, Mail } from 'lucide-react';

const Contato = () => {
  const numero = '5511966339734'   
  return (
  <section className="min-h-screen w-full bg-[#fdf6ec] text-[#5e4b3c] px-6 py-12 flex items-center justify-center">
    <div className="w-full max-w-4xl bg-white/80 rounded-2xl shadow-2xl p-8 md:p-12">
      <h3 className="text-3xl font-bold mb-8 border-b-2 border-[#e6d3b3] inline-block">
        Contato
      </h3>

      {/* Grid para alinhar à esquerda e à direita */}
      <div className="flex flex-col md:flex-row justify-between gap-8 mb-10">
        {/* Informações de contato */}
        <div className="space-y-4">
          <p className="flex items-center gap-2">
            <Navigation className="text-[#5e4b3c]" /> Endereço: Vila Flórida, Guarulhos/SP
          </p>
          <p className="flex items-center gap-2">
            <Phone className="text-[#5e4b3c]" /> (11) 96633‑9734
          </p>
          <p className="flex items-center gap-2">
            <Mail className="text-[#5e4b3c]" /> ribeirovanessatcm@tcm@gmail.com 
          </p>
        </div>

        {/* WhatsApp */}
        <div className="text-right md:text-left">
          <p className="text-lg font-medium">
            Entre em contato pelo <span className="text-green-600">WhatsApp</span>
          </p>
          <a
            href={`https://wa.me/${numero}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition"
          >
            Enviar Mensagem
          </a>
        </div>
      </div>
    </div>
  </section>

  );
};

export default Contato;
