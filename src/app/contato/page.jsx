"use client"
import React from 'react';
import { Navigation, Phone, Mail } from 'lucide-react';
import axios from 'axios';

const Contato = () => {

  const enviarMsgWhats = () => {
    const numero = '5511966339734';
    const mensagem = encodeURIComponent('Olá, tudo bem? Gostaria de um orçamento.');
    const url = `https://wa.me/${numero}?text=${mensagem}`;
    window.open(url, '_blank');
  };

  return (
    <section className="min-h-screen w-full bg-[#fdf6ec] text-[#5e4b3c] px-6 py-12 flex items-center justify-center">
      <div className="w-full max-w-6xl bg-white/80 rounded-2xl shadow-2xl p-10 md:p-16 min-h-[500px]">
        <h3 className="text-3xl font-bold mb-8 border-b-2 border-[#e6d3b3] inline-block">
          Contato
        </h3>

        <div className="flex flex-col md:flex-row justify-between gap-12 mb-10">
          {/* Informações de contato */}
          <div className="space-y-12 text-base md:text-lg">
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
          <div className="text-right md:text-left flex flex-col justify-center">
            <p className="text-lg font-medium">
              Entre em contato pelo <span className="text-green-600">WhatsApp</span>
            </p>
            <button
              className="inline-block mt-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg transition"
              onClick={enviarMsgWhats}
            >
              Enviar Mensagem
            </button>
          </div>
        </div>
      </div>
    </section>



  );
};

export default Contato;
