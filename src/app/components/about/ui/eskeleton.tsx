import Link from 'next/link'

export function EsqueloLink(){
    return (
        <Link href={''} className="flex w-1/2 h-9 bg-slate-900 animate-pulse rounded-xl">

        </Link>
    )
}
export function EsqueletoLink(){
    return(
       <>
       <EsqueloLink/>
       <EsqueloLink/>
       <EsqueloLink/>
       <EsqueloLink/>
       </>
    )
}
export function EsqueloImage(){
    return(
        <figure className="w-[250px] h-[250px] md:w-[400px] md:min-h-[400px] animate-pulse object-cover overflow-hidden bg-slate-900 rounded-xl rotate-6  ">
            
        </figure>
    )
}

export function EsqueloArticle(){
    return (
    <article className=" w-full h-[80px] bg-slate-900 animate-pulse rounded-xl">
        
    </article>
    )
}

export function EsqueloArticles(){
    return(
        <>
        <EsqueloArticle/>
        <EsqueloArticle/>
        <EsqueloArticle/>
        <EsqueloArticle/>
        <EsqueloArticle/>
        <EsqueloArticle/>
        <EsqueloArticle/>
        </>
    )
}

export function EsqueletonDivHeader(){
    return (
        <div className=" w-full h-[250px]   bg-slate-900 animate-pulse rounded-xl ">
            
        </div>
    )
}
export const EsqueletoUiAcerca = ()=>{
    return (
        <div className="max-w-[1200px] w-full grid grid-cols-1 grid-rows-[repeat(auto-fit,minmax(300px,1fr))]  md:grid-cols-2 md:grid-rows-2 md:gap-5 md:p-5 p-2 gap-2 ">
        {/* todo sobre tu informacion */}
      <div className="md:col-start-1 md:row-start-1 row-start-2 md:row-span-2 ">
        <section className="flex flex-col gap-5  ">
          <EsqueletonDivHeader/>
         <EsqueloArticles/>
        </section>
      </div>
      {/* todo sobre tu imagen */}
      <div className="md:col-start-2 row-start-1 flex justify-center items-center  ">
       <EsqueloImage/>
      </div>
      {/* todo sobre follow */}
      <div className=" md:col-start-2 md:row-start-2 row-start-3">
        <article >
          <ul className="flex flex-col md:gap-5 gap-3 md:items-end  mt-5 md:mt-0 p-1 md:p-5">
           <EsqueletoLink/>
          </ul>
        </article>
      </div>
    </div>
    )
}