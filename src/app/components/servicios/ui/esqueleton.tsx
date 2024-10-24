



export const EsqueletonServicios = () => {
    return (
      <div className="min-h-screen text-slate-900 rounded-xl p-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="font-bold mb-4 w-1/2 h-11 bg-slate-900 animate-pulse rounded-xl ">Mis Servicios de Programacion</h1>
          <p className="bg-slate-900 animate-pulse mb-12 rounded-xl w-full h-14">
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {[...Array(6)].map((_, index) => (
           <div key={index} className=" rounded-lg p-6  animate-pulse transition-colors w-[350px] h-[180px]">
            <div className="flex items-center mb-4">
                <i className="w-8 h-8 bg-slate-900 animate-pulse rounded-full"></i>
              <h2 className="  ml-4 bg-slate-900 animate-pulse w-3/4 h-16 rounded-xl"></h2>
            </div>
            <p className="w-full h-20 rounded-xl bg-slate-900 animate-pulse"></p>
          </div>
            
          ))}
          </div>
          <div className="mt-16 flex justify-center items-center flex-col ">
            <h2 className="w-1/2 h-9 font-bold mb-4 bg-slate-900 animate-pulse rounded-xl"></h2>
            <p className="bg-slate-900 h-5 animate-pulse mb-8 rounded-xl w-[40%]">
            </p>
            <a 
              href="/contacto" 
              className="bg-slate-900 animate-pulse font-bold py-3 px-6  transition-colors rounded-xl w-[20%]"
            >
              P
            </a>
          </div>
        </div>
      </div>
    )
  }