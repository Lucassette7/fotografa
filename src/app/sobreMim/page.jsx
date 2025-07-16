import { Mail, Phone, Navigation} from 'lucide-react';
import React from 'react';

const SobreMim = () => {
  return (
    <section className="min-h-screen w-full bg-[#fdf6ec] text-[#5e4b3c] flex items-center justify-center px-6 py-12">
      <div className="max-w-6xl w-full bg-white/70 rounded-2xl shadow-2xl p-8 md:p-12">
        <h3 className="text-3xl font-bold mb-8 border-b-2 border-[#e6d3b3] inline-block">
          Sobre mim
        </h3>

        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Imagem */}
          <div className="flex-shrink-0">
            <img
              src="/fotoPerfil/imgVanessa.jpg"
              alt="Vanessa Ribeiro Sette"
              className="w-48 h-48 md:w-60 md:h-60 object-cover rounded-full shadow-lg border-4 border-[#e6d3b3]"
            />
          </div>

          {/* Texto */}
          <div>
            <p className="text-lg leading-relaxed mb-4">
              Olá! Me chamo <strong>Vanessa Ribeiro Sette</strong>, tenho 26 anos, sou fotógrafa apaixonada por capturar emoções e contar histórias por meio da minha lente.
              Vivo em <strong>Guarulhos/SP</strong> e acredito que cada detalhe, sorriso e olhar pode se transformar em uma memória eterna.
            </p>

            <p className="text-lg leading-relaxed mb-4">
              A fotografia entrou na minha vida como uma paixão e hoje é meu propósito. Amo transformar momentos simples em registros únicos — seja um casamento cheio de emoção ou um retrato que revela a essência de quem está à frente da câmera.
            </p>

            <p className="text-lg leading-relaxed mb-4">
              Com sensibilidade e profissionalismo, busco sempre criar imagens que expressem sentimentos reais, com luz natural, cores suaves e muita dedicação em cada clique.
            </p>

            <div className="mt-6 text-md">
              <p>
                 <strong> <Navigation/> Localização:</strong> Guarulhos – SP
              </p>
              <br />
              <p>
                 <strong> <Phone/> Telefone:</strong> (11) 96633‑9734
              </p>
              <br />
              <p>
                 <strong> <Mail/> E-mail:</strong> ribeirovanessatcm@tcm@gmail.com 
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SobreMim;
