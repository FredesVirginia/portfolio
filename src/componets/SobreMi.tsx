

export default function SobreMi() {
  return (
   <div className="bg-gray-100 py-1">
  <div className="flex flex-col items-center mt-14 px-4 sm:px-6 md:px-10">
    <p className="text-center text-3xl font-bold text-gray-600 pb-1">Sobre mí</p>
    <span className="block h-1 bg-sky-400 w-14 mb-4"></span>

    <p className="max-w-4xl text-[17px] text-center">
      Soy una desarrolladora web apasionada por la automatización de procesos y la eliminación de tareas repetitivas, así como por la creación de soluciones escalables y a medida. Con experiencia en desarrollo web full stack. Mi enfoque se centra en escribir código limpio y mantenible, siguiendo las mejores prácticas y metodologías ágiles. Siempre estoy actualizándome con las últimas tecnologías para ofrecer la mejor solución a cada desafío.
    </p>
  </div>

  <div className="flex flex-col items-center bg-gray-100 pb-10 px-4 sm:px-6 md:px-10">
    <div className="flex flex-wrap justify-center gap-3 mt-5 max-w-5xl">
      {[
        "HTML5/CSS3", "JavaScript", "TypeScript", "Nest", "Docker", "AWS",
        "React", "Python", "Django", "Express", "GIT", "MySQL"
      ].map((skill) => (
        <div
          key={skill}
          className="border-2 text-cyan-400 border-cyan-300 font-bold w-fit p-3 rounded-full px-5 shadow-2xl shadow-cyan-300 text-center text-sm sm:text-base"
        >
          {skill}
        </div>
      ))}
    </div>
  </div>
</div>

  )
}
