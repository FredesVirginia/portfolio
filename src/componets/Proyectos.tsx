

export default function Proyectos() {
  return (
    <div>
        <div className="pb-10 mt-10 flex flex-col items-center">
            <p className="text-center text-3xl font-bold text-gray-600 pb-1">Proyectos Destacados</p>
          <span className="block h-1 my-2  bg-sky-400 w-50"></span>
        </div>

        <div className="flex  flex-wrap gap-6 justify-center">
            <div className="w-90 h-96 rounded-2xl border-l-10 border-cyan-300 bg-gray-200 shadow-2xl shadow-cyan-300">
              <p className="text-center text-[18px] pt-4 text-cyan-400 font-bold">
                Oxford Gear Kids
              </p>
              
              </div>
            <div className="w-90 h-96 rounded-2xl border-l-10 border-cyan-300 bg-gray-200 shadow-2xl shadow-cyan-300">
               <p className="text-center text-[18px] pt-4 text-cyan-400 font-bold">
                Schools
              </p>
            </div>
             <div className="w-90 h-96 rounded-2xl border-l-10 border-cyan-300 bg-gray-200 shadow-2xl shadow-cyan-300">
               <p className="text-center text-[18px] pt-4 text-cyan-400 font-bold">
                Peps
              </p>
             </div>
              <div className="w-90 h-96 rounded-2xl border-l-10 border-cyan-300 bg-gray-200 shadow-2xl shadow-cyan-300">
                 <p className="text-center text-[18px] pt-4 text-cyan-400 font-bold">
                NovaTrend Shop
              </p>
              </div>
        </div>
    </div>
  )
}
