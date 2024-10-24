import Link from "next/link";
import Image from "next/image";
import { Suspense } from "react";
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoYoutube,
} from "react-icons/io5";
import {
  EsqueletoLink,
  EsqueloArticle,
  EsqueloImage,
  EsqueletonDivHeader,
} from "@/app/components/about";

const IconosWebPersonal = [
  {
    title: "Facebook",
    icon: <IoLogoFacebook key="Facebook" size={25} />,
    href: "https://www.facebook.com/",
  },
  {
    title: "Instagram",
    icon: <IoLogoInstagram key="Instagram" size={25} />,
    href: "https://www.instagram.com/",
  },
  {
    title: "Linkedin",
    icon: <IoLogoLinkedin key="Linkedin" size={25} />,
    href: "https://www.linkedin.com/in/jesus-jean-carlos-gonzales-vela-72344827a/",
  },
  {
    title: "Youtube",
    icon: <IoLogoYoutube key="Youtube" size={25} />,
    href: "https://www.youtube.com/@Slaming14",
  },
];

export const BodyAbautPage = () => {
  return (
    <div className="max-w-[1200px] w-full grid grid-cols-1 grid-rows-[repeat(auto-fit,minmax(300px,1fr))]  md:grid-cols-2 md:grid-rows-2 md:gap-5 md:p-5 p-2 gap-2 ">
      {/* todo sobre tu informacion */}
      <div className="md:col-start-1 md:row-start-1 row-start-2 md:row-span-2 ">
        <section className="flex flex-col gap-5  font-semibold *:text-pretty">
          <Suspense fallback={<EsqueletonDivHeader />}>
            <article className="md:p-5 p-0 ">
              <h1 className="font-extrabold text-[25px] md:text-[35px] dark:text-white text-gray-900 md:first-letter:text-[65px] first-letter:text-[35px] md:leading-[3rem]   ">
                Soy Jesus Jean Carlos Gonzales Vela. Vivo en Lima, donde las
                oportunidades no se pierden.
              </h1>
            </article>
          </Suspense>
          <Suspense fallback={<EsqueloArticle />}>
            <article className="md:leading-[1.5rem] text-[14px] md:text-[18px] ">
              <p className="md:first-letter:text-[35px] first-letter:text-[25px]  text-slate-700 dark:text-gray-600   ">
                Hola a todos. Permítanme comenzar presentándome. Mi nombre es
                Jesús Jean Carlos Gonzales Vela y estoy aquí hoy para compartir
                un poco sobre mí y lo que me apasiona.
              </p>
            </article>
          </Suspense>
          <Suspense fallback={<EsqueloArticle />}>
            <article className="md:leading-[1.5rem]  text-[14px] md:text-[18px] text-slate-700 dark:*:text-gray-600  ">
              <p>
                Elegí la carrera de Administración de Sistemas porque desde
                siempre me ha fascinado el mundo de la programación y el
                desarrollo de aplicaciones web. Con 21 años, vivo en el vibrante
                distrito de Villa María del Triunfo junto a mis padres y mi
                hermano.
              </p>
            </article>
          </Suspense>
          <Suspense fallback={<EsqueloArticle />}>
            <article className="md:leading-[1.5rem] text-[14px] md:text-[18px] text-slate-700 dark:*:text-gray-600 ">
              <p>
                Cuando no estoy inmerso en el mundo de la tecnología, me gusta
                relajarme por las tardes escuchando música, especialmente
                baladas que me permiten conectar con mis emociones y
                reflexionar.
              </p>
            </article>
          </Suspense>
          <Suspense fallback={<EsqueloArticle />}>
            <article className="md:leading-[1.5rem] text-[14px] md:text-[18px] text-slate-700 dark:*:text-gray-600 ">
              <p>
                Y hablando de placeres simples, no puedo resistirme a un buen
                plato de arroz con pollo y papa rellena, ¡es mi comida favorita!
                Pero más allá de mis gustos culinarios, tengo aspiraciones
                profesionales que me motivan todos los días.
              </p>
            </article>
          </Suspense>
          <Suspense fallback={<EsqueloArticle />}>
            <article className="md:leading-[1.5rem] text-[14px] md:text-[18px] text-slate-700 dark:*:text-gray-600 ">
              <p>
                Veo la venta de ropa como una excelente oportunidad de
                emprendimiento. Creo que mi combinación de habilidades técnicas
                y pasión por la moda.
              </p>
            </article>
          </Suspense>
          <Suspense fallback={<EsqueloArticle />}>
            <article className="md:leading-[1.5rem] text-[14px] md:text-[18px] text-slate-700 dark:*:text-gray-600 ">
              <p>
                En cuanto a mis expectativas para este curso, estoy emocionado
                por la oportunidad de ampliar mis conocimientos en
                Administración de Sistemas. Pero más importante aún, estoy
                ansioso por sumergirme en el mundo de la creatividad y la
                innovación.
              </p>
            </article>
          </Suspense>
          <Suspense fallback={<EsqueloArticle />}>
            <article className="md:leading-[1.5rem] text-[14px] md:text-[18px] text-slate-700 dark:*:text-gray-600 ">
              <p>
                Espero aprender nuevas formas de abordar los desafíos, descubrir
                nuevas tecnologías y desarrollar soluciones innovadoras que
                puedan impactar positivamente en el mundo que nos rodea.
              </p>
            </article>
          </Suspense>
        </section>
      </div>
      {/* todo sobre tu imagen */}
      <div className="md:col-start-2 row-start-1 flex justify-center items-center  ">
        <Suspense fallback={<EsqueloImage />}>
          <figure className="w-[250px] max-h-[250px] md:w-[400px] bg-center md:min-h-[400px] object-cover overflow-hidden bg-black rounded-xl rotate-6 shadow-lg  shadow-emerald-200 dark:shadow-gray-700 ">
            <Image
              src={"/imgs/image_acerca_2.jpg"}
              alt={"Photo de porfolio de about"}
              width={800}
              height={800}
              
            />
          </figure>
        </Suspense>
      </div>
      {/* todo sobre follow */}
      <div className=" md:col-start-2 md:row-start-2 row-start-3">
        <article>
          <ul className="flex flex-col md:gap-5 gap-3 md:items-end  mt-5 md:mt-0 p-1 md:p-5">
            {IconosWebPersonal.map(({ title, icon, href }) => (
              <Suspense key={title} fallback={<EsqueletoLink />}>
                <Link
                  href={href}
                  
                  className="flex w-1/2 items-center  gap-5  *:dark:hover:text-emerald-500 *:hover:text-emerald-500 transition-colors"
                >
                  <span className="dark:text-gray-600 text-gray-700 ">
                    {icon}
                  </span>
                  <li className="dark:text-white text-gray-700 text-[10px] font-semibold md:text-[14px] ">
                    Seguir en {title}
                  </li>
                </Link>
              </Suspense>
            ))}
            {/* <div className="border-t-2 dark:border-gray-700 border-slate-300 w-full "/> */}
          </ul>
        </article>
      </div>
    </div>
  );
};
