import React from "react";
import "./App.css";
import fondo from "./assets/pantalla_principal.png";
import game from "./assets/gameplay.png";
import gol from "./assets/gol.png";
import barraVida from "./assets/barra-vida.png";
import barraXP from "./assets/barra-exp.png";
import subidaNivel from "./assets/subida.png";
import ataqueGif from "./assets/Ataque.gif";
import ataqueV1 from "./assets/Ataquev1.gif";
import ataqueV2 from "./assets/Ataquev2.gif";
import ataqueV3 from "./assets/Ataquev3.gif";

export default function App() {
  return (
    <div className="w-screen min-h-screen overflow-x-hidden bg-gradient-to-b from-[#0b0c10] to-black text-gray-200">
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

  {/* DESCRIPCIÓN GENERAL */}
  <p className="section-text leading-relaxed text-gray-300">
    El jugador controla a <strong className="text-yellow-400">Diego Mamani</strong>, mientras atraviesa diversos
    escenarios del altiplano boliviano enfrentando oleadas continuas de enemigos. 
    La mecánica se inspira en el estilo <strong>Vampire Survivors</strong>: el personaje ataca automáticamente
    con sus armas mientras el jugador solo debe moverse, sobrevivir y mejorar sus habilidades a lo largo de la partida.
  </p>

  <br />

{/* ATAQUE SIMPLE */}
<h4 className="text-lg font-bold text-yellow-300 mt-4">Ataque Simple</h4>
<p className="text-gray-400">
  El ataque básico del personaje se ejecuta automáticamente. El jugador solo debe concentrarse en moverse para esquivar a los enemigos mientras el ataque se dispara de forma continua.
</p>

<div className="flex justify-center my-4">
  <img 
    src={ataqueGif} 
    alt="Ataque simple" 
    className="w-full max-w-md rounded-lg shadow-lg"
  />
</div>


  {/* BARRA DE VIDA */}
  <h4 className="text-lg font-bold text-red-300">Barra de Vida</h4>
  <p className="text-gray-400">Muestra la salud actual del jugador. Si llega a cero, la partida termina.</p>

  <div className="flex justify-center my-4">
    <img src={barraVida} alt="Barra de vida" className="article-img" />
  </div>

  <br />

  {/* BARRA DE EXPERIENCIA */}
  <h4 className="text-lg font-bold text-blue-300">Barra de Experiencia</h4>
  <p className="text-gray-400">
    Cada enemigo derrotado deja caer puntos de experiencia. Al recogerlos, la barra se llena. 
    Cuando llega al máximo, Diego sube de nivel.
  </p>

  <div className="flex justify-center my-4">
    <img src={barraXP} alt="Barra de experiencia" className="article-img" />
  </div>

  <br />

  {/* SUBIDA DE NIVEL */}
  <h4 className="text-lg font-bold text-green-300">Subida de Nivel</h4>
  <p className="text-gray-400">
    Al subir de nivel, el jugador debe elegir entre tres ítems aleatorios que mejoran alguna de sus capacidades.
  </p>

  <div className="flex justify-center my-4">
    <img src={subidaNivel} alt="Subida de nivel" className="article-img" />
  </div>


  <br />

{/* ATAQUES POR NIVEL */}
<h4 className="text-lg font-bold text-yellow-300 mt-8">Ataques por Nivel</h4>
<p className="text-gray-400 mb-4">
  A medida que el jugador mejora sus armas, cada nivel de ataque incrementa el daño, la velocidad o el área de impacto.
</p>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

  {/* NIVEL 1 */}
  <div className="bg-gray-900 p-4 rounded-xl shadow-lg text-center">
    <h5 className="text-lg font-semibold text-yellow-400 mb-2">Nivel 1</h5>
    <img 
      src={ataqueV1} 
      alt="Ataque Nivel 1" 
      className="w-full h-48 object-contain rounded-lg border border-gray-700"
    />
    <p className="text-gray-400 text-sm mt-2">
      Ataque básico inicial. Daño moderado y ritmo constante.
    </p>
  </div>

  {/* NIVEL 2 */}
  <div className="bg-gray-900 p-4 rounded-xl shadow-lg text-center">
    <h5 className="text-lg font-semibold text-yellow-400 mb-2">Nivel 2</h5>
    <img 
      src={ataqueV2} 
      alt="Ataque Nivel 2" 
      className="w-full h-48 object-contain rounded-lg border border-gray-700"
    />
    <p className="text-gray-400 text-sm mt-2">
      Mayor rango y daño. Ideal para oleadas tempranas.
    </p>
  </div>

  {/* NIVEL 3 */}
  <div className="bg-gray-900 p-4 rounded-xl shadow-lg text-center">
    <h5 className="text-lg font-semibold text-yellow-400 mb-2">Nivel 3</h5>
    <img 
      src={ataqueV3} 
      alt="Ataque Nivel 3" 
      className="w-full h-48 object-contain rounded-lg border border-gray-700"
    />
    <p className="text-gray-400 text-sm mt-2">
      Golpes más amplios, mayor daño y mejor control del área.
    </p>
  </div>

</div>


  {/* DURACIÓN Y PROGRESIÓN */}
  <h4 className="text-lg font-bold text-purple-300">Duración de la Partida</h4>
  <p className="text-gray-400">
    La partida dura <strong>30 minutos</strong>. Conforme avanza el tiempo, las oleadas se vuelven más intensas.
  </p>

  <p className="text-gray-400 mt-2">Orden de aparición de enemigos:</p>
  <ul className="list-disc ml-6 mt-3 text-gray-400">
    <li>Robot</li>
    <li>Oso Blanco</li>
    <li>Llama Robot</li>
    <li>Oso Café</li>
    <li>Muerte</li>
  </ul>

  <br />

  {/* IMAGEN CENTRAL */}
  <div className="flex justify-center mt-6">
    <img src={gol} alt="Gameplay ilustrativo" className="article-img mt-6" />
  </div>

  <p className="text-gray-400 italic text-center mt-3">
    “Sobrevive, mejora, evoluciona… y resiste hasta el último minuto.”
  </p>
</section>



        {/* PERSONAJES */}
<section id="personajes" className="section">
  <h3 className="section-title text-red-400">Personajes</h3>

  <div className="grid md:grid-cols-3 gap-10">

    {/* KANTUMARU (Soldado Colorado) */}
    <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-red-500/40 transition transform hover:-translate-y-1">
      <img
        src="../../assets/images/diego.png"
        alt="Kantumaru"
        className="w-full h-56 object-cover"
      />
      <div className="p-5 text-center">
        <h4 className="text-xl font-semibold text-white mb-1">Diego</h4>
        <p className="text-gray-400 text-sm">
          Soldado Colorado nacido en Cochabamba. Portador del relicario Waraq’o, destinado a enfrentar
          espíritus ancestrales tras despertar el poder del Supay.
        </p>
      </div>
    </div>

    {/* OSO DE LA DIABLADA */}
    <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-red-500/40 transition transform hover:-translate-y-1">
      <img
        src="../../assets/images/ositoblanco.png"
        alt="Oso de la Diablada"
        className="w-full h-56 object-cover"
      />
      <div className="p-5 text-center">
        <h4 className="text-xl font-semibold text-white mb-1">Oso de la Diablada</h4>
        <p className="text-gray-400 text-sm">
          Criatura espiritual que protege los caminos del inframundo. Ataca con fuerza bruta y embestidas,
          guiado por cadenas rituales y fuego ancestral.
        </p>
      </div>
    </div>

    {/* DIABLO LANZADOR DE ESFERAS NEGRAS */}
    <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-red-500/40 transition transform hover:-translate-y-1">
      <img
        src="../../assets/images/diablada.png"
        alt="Diablo del Supay"
        className="w-full h-56 object-cover"
      />
      <div className="p-5 text-center">
        <h4 className="text-xl font-semibold text-white mb-1">Diablo del Supay</h4>
        <p className="text-gray-400 text-sm">
          Guerrero infernal al servicio del Supay. Ataca desde la distancia lanzando esferas negras de energía
          que corrompen el alma del objetivo.
        </p>
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
