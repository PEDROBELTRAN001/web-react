import React from "react";
import "./App.css";
import fondo from "./assets/pantalla_principal.png";
import game from "./assets/gameplay.png";
import gol from "./assets/gol.png";

export default function App() {
  return (
    <div className="bg-gradient-to-b from-[#0b0c10] to-black text-gray-200 min-h-screen">
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-black/70 backdrop-blur-sm border-b border-gray-800 py-4 px-10 flex justify-between items-center">
        <h1 className="text-3xl font-extrabold text-yellow-400 tracking-wide">
          ALPACAS GAMERS
        </h1>
        <nav className="space-x-8 text-sm font-medium uppercase tracking-wider">
          <a href="#historia" className="hover:text-yellow-400 transition">
            Historia
          </a>
          <a href="#gameplay" className="hover:text-yellow-400 transition">
            Jugabilidad
          </a>
          <a href="#personajes" className="hover:text-yellow-400 transition">
            Personajes
          </a>
          <a href="#personajes" className="hover:text-yellow-400 transition">
            Items
          </a>
          <a href="#desarrolladores" className="hover:text-yellow-400 transition">
            Desarrolladores
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section
  className="relative h-[70vh] flex flex-col justify-center items-center text-center bg-cover bg-center shadow-lg"
  style={{ backgroundImage: `url(${fondo})` }}
>

        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 px-6">
          <h2 className="text-5xl md:text-6xl font-extrabold text-yellow-400 mb-3 drop-shadow-lg">
            PACHAMA: Supervivencia boliviana
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg italic">
            “Ser soldado boliviano es un acto de valentía y honor.”
          </p>
        </div>
      </section>

      {/* CONTENIDO PRINCIPAL */}
      <main className="max-w-5xl mx-auto px-6 py-16 space-y-24">
        {/* HISTORIA */}
        <section id="historia" className="section">
          <h3 className="section-title text-red-400">Historia</h3>
          <p className="section-text leading-relaxed text-gray-300">
            <strong className="text-yellow-400">Diego Mamani</strong>, un Soldado Colorado nacido
            en Cochabamba, llegó al altiplano tras recibir apoyo de sus padres para unirse al ejército.
            Tras completar su instrucción, fue enviado en una misión especial cerca de Oruro para
            investigar ataques nocturnos donde los testigos aseguraban haber visto figuras
            parecidas a diablos danzando entre la arena y el viento.
            <br/><br/>
            Allí encontró un antiguo relicario llamado <strong className="text-red-400">Waraq’o</strong>,
            una piedra negra grabada con símbolos ancestrales. Al tocarla, el poder del Supay despertó,
            marcando su piel con un sello espiritual. Sin saberlo, Kuntur se convirtió en portador
            de un objeto capaz de abrir portales entre mundos.
            <br/><br/>
            Ese acto desató la furia de espíritus ancestrales representados por la{" "}
            <span className="text-red-400 font-bold">Diablada</span>: demonios de máscaras brillantes,
            ojos incandescentes y pasos que resonaban como cadenas. Además de ellos, criaturas
            andinas corrompidas comenzaron a acecharlo: zorros con ojos de fuego, vicuñas fantasmales,
            cóndores oscuros y llamas infernales hechas de ceniza volcánica.
            <br/><br/>
            Ahora Kuntur debe sobrevivir mientras decide si usa el poder del relicario para proteger
            a la humanidad o si lo devuelve al inframundo para detener la invasión espiritual que él
            mismo desató.
            <br/><br/>
            <em className="text-gray-400">
              Su misión ya no es militar… es ancestral.
            </em>
          </p>

          <img src={game} alt="Cinemática historia" className="article-img mt-6" />

        </section>

        {/* GAMEPLAY */}
<section id="gameplay" className="section">
  <h3 className="section-title text-red-400">Jugabilidad</h3>
  <p className="section-text leading-relaxed text-gray-300">
    El jugador controla a <strong className="text-yellow-400">Diego Mamani</strong>, el Soldado Colorado de Bolivia,
    mientras recorre distintos escenarios del altiplano y pueblos andinos. Su objetivo es sobrevivir al ataque
    constante de demonios inspirados en la Diablada y criaturas míticas bolivianas.
    <br/><br/>
    Kuntur puede lanzar diferentes armas de ataque a distancia, como:
    <ul className="list-disc ml-6 mt-3 text-gray-400">
      <li>Huesos encantados obtenidos de espíritus</li>
      <li>Lanzas ceremoniales</li>
      <li>Reliquias sagradas y objetos místicos</li>
    </ul>
    <br/>
    Cada enemigo derrotado deja caer <strong className="text-green-400">gemas espirituales</strong>, las cuales pueden ser
    recogidas por el jugador. Estas gemas llenan automáticamente una barra de energía espiritual ubicada en la
    interfaz del juego.
    <br/><br/>
    Una vez la barra esté completa, las gemas se canjean de forma automática por uno de tres ítems especiales:
    <ul className="list-disc ml-6 mt-3 text-gray-400">
      <li><strong>Cocaquina</strong> — Aumenta tu energia y velocidad</li>
      <li><strong>Chanchirron de Pollo</strong> — ataque con un 5% mas de efectividad</li>
      <li><strong>Api</strong> — Si te gusta mucho te protege</li>
    </ul>
    <br/>
    El jugador deberá gestionar estratégicamente sus ataques y movilidad para sobrevivir mientras enfrenta hordas
    cada vez más intensas y criaturas más poderosas del inframundo andino.
  </p>

  <div className="flex justify-center mt-6">
    <img src={gol} alt="Cinemática historia" className="article-img mt-6" />

  </div>

  <p className="text-gray-400 italic text-center mt-3">
    “Domina las reliquias, reclama las gemas… y sobrevive al Supay.”
  </p>
</section>


{/* PERSONAJES */}
<section id="personajes" className="section">
  <h3 className="section-title text-red-400">Personajes</h3>

  {/* Carril horizontal invisible */}
  <div
    className="flex space-x-6 overflow-x-auto pb-4 snap-x snap-mandatory scroll-smooth"
    style={{
      scrollbarWidth: "none",  
      msOverflowStyle: "none"     
    }}
  >
    {/* Ocultar scroll */}
    <style>
      {`
        #personajes::-webkit-scrollbar {
          display: none;
        }
      `}
    </style>

    <div id="personajes" className="flex space-x-6">
      {/* JUANCITO PINTO */}
      <div className="bg-gray-900 min-w-[280px] rounded-2xl overflow-hidden shadow-lg hover:shadow-red-500/40 transition transform hover:-translate-y-1 snap-start">
        <img
          src="../../assets/images/p1.png"
          alt="Juancito Pinto"
          className="w-full h-56 object-cover"
        />
        <div className="p-5 text-center">
          <h4 className="text-xl font-semibold text-white mb-1">Juan Pablo</h4>
          <p className="text-gray-400 text-sm">Personaje: Colorado de Bolivia.</p>
          <p className="text-gray-400 text-sm">Nacionalidad: Boliviano.</p>
          <p className="text-gray-400 text-sm">Ciudad: La Paz.</p>
          <p className="text-gray-400 text-sm">Vida: 100 HP.</p>
          <p className="text-gray-400 text-sm">Daño: 25 DMG.</p>
        </div>
      </div>

      {/* OSO BLANCO */}
      <div className="bg-gray-900 min-w-[280px] rounded-2xl overflow-hidden shadow-lg hover:shadow-red-500/40 transition transform hover:-translate-y-1 snap-start">
        <img
          src="../../assets/images/osob.png"
          alt="Oso Blanco"
          className="w-full h-56 object-cover"
        />
        <div className="p-5 text-center">
          <h4 className="text-xl font-semibold text-white mb-1">Oso Blanco</h4>
          <p className="text-gray-400 text-sm">Personaje: Oso de la Diablada.</p>
          <p className="text-gray-400 text-sm">Nacionalidad: Boliviana.</p>
          <p className="text-gray-400 text-sm">Ciudad: Oruro.</p>
          <p className="text-gray-400 text-sm">Vida: 300 HP.</p>
          <p className="text-gray-400 text-sm">Daño: 40 DMG.</p>
        </div>
      </div>

      {/* OSO CAFÉ */}
      <div className="bg-gray-900 min-w-[280px] rounded-2xl overflow-hidden shadow-lg hover:shadow-red-500/40 transition transform hover:-translate-y-1 snap-start">
        <img
          src="../../assets/images/osoc.png"
          alt="Oso Cafe"
          className="w-full h-56 object-cover"
        />
        <div className="p-5 text-center">
          <h4 className="text-xl font-semibold text-white mb-1">Oso Café</h4>
          <p className="text-gray-400 text-sm">Personaje: Oso de la Diablada.</p>
          <p className="text-gray-400 text-sm">Nacionalidad: Boliviana.</p>
          <p className="text-gray-400 text-sm">Ciudad: Oruro.</p>
          <p className="text-gray-400 text-sm">Vida: 300 HP.</p>
          <p className="text-gray-400 text-sm">Daño: 40 DMG.</p>
        </div>
      </div>

      {/* DIABLO */}
      <div className="bg-gray-900 min-w-[280px] rounded-2xl overflow-hidden shadow-lg hover:shadow-red-500/40 transition transform hover:-translate-y-1 snap-start">
        <img
          src="../../assets/images/diablo.png"
          alt="Diablo del Supay"
          className="w-full h-56 object-cover"
        />
        <div className="p-5 text-center">
          <h4 className="text-xl font-semibold text-white mb-1">Diablo</h4>
          <p className="text-gray-400 text-sm">Personaje: Diablo de la Diablada.</p>
          <p className="text-gray-400 text-sm">Nacionalidad: Boliviana.</p>
          <p className="text-gray-400 text-sm">Ciudad: Oruro.</p>
          <p className="text-gray-400 text-sm">Vida: 300 HP.</p>
          <p className="text-gray-400 text-sm">Daño: 50 DMG.</p>
        </div>
      </div>

      {/* LLAMA */}
      <div className="bg-gray-900 min-w-[280px] rounded-2xl overflow-hidden shadow-lg hover:shadow-red-500/40 transition transform hover:-translate-y-1 snap-start">
        <img
          src="../../assets/images/llamar.png"
          alt="Llama"
          className="w-full h-56 object-cover"
        />
        <div className="p-5 text-center">
          <h4 className="text-xl font-semibold text-white mb-1">Llama</h4>
          <p className="text-gray-400 text-sm">Personaje: Llama Robot.</p>
          <p className="text-gray-400 text-sm">Nacionalidad: Boliviana.</p>
          <p className="text-gray-400 text-sm">Ciudad: La Paz.</p>
          <p className="text-gray-400 text-sm">Vida: 200 HP.</p>
          <p className="text-gray-400 text-sm">Daño: 40 DMG.</p>
        </div>
      </div>

      {/* MUERTE */}
      <div className="bg-gray-900 min-w-[280px] rounded-2xl overflow-hidden shadow-lg hover:shadow-red-500/40 transition transform hover:-translate-y-1 snap-start">
        <img
          src="../../assets/images/muerte.png"
          alt="Muerte"
          className="w-full h-56 object-cover"
        />
        <div className="p-5 text-center">
          <h4 className="text-xl font-semibold text-white mb-1">Muerte</h4>
          <p className="text-gray-400 text-sm">Personaje: Muerte.</p>
          <p className="text-gray-400 text-sm">Nacionalidad: Desconocida.</p>
          <p className="text-gray-400 text-sm">Ciudad: Desconocida.</p>
          <p className="text-gray-400 text-sm">Vida: Infinita HP.</p>
          <p className="text-gray-400 text-sm">Daño: Infinita DMG.</p>
        </div>
      </div>

    </div>
  </div>
</section>

{/* CONCLUSIÓN */}
<section className="section">
  <h3 className="section-title text-red-400">Conclusión</h3>
  <p className="section-text leading-relaxed text-gray-300">
    <strong className="text-yellow-400">PACHAMA</strong> combina mitología andina, folclore boliviano y acción de supervivencia
    en un mundo donde el inframundo despierta tras siglos de silencio. El viaje de Kantumaru no es solo una batalla
    contra criaturas ancestrales, sino un choque entre tradición, identidad y el peso espiritual de la tierra que lo vio nacer.
    <br/><br/>
    Cada enemigo derrotado, cada reliquia obtenida y cada decisión tomada lo acerca más a comprender la verdad del Waraq’o
    y su conexión con el Supay, señor del inframundo. La historia es una lucha por equilibrio, no por dominación.
    <br/><br/>
    <em className="text-gray-400">
      El destino de los espíritus, de Bolivia y de la Pachamama queda en manos del Soldado Colorado.
      La guerra apenas comienza.
    </em>
  </p>
</section>

      </main>

      {/* FOOTER */}
      <footer className="text-center py-8 border-t border-gray-800 text-gray-500 text-sm">
        © 2025 EpicVerse Studios — Todos los derechos reservados.
      </footer>
    </div>
  );
}
