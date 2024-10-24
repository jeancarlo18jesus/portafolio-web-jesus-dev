import Link from "next/link";
import Image from "next/image";

export const NotFoundError = () => {
  return (
    <>
      <div className="w-full h-fit grid md:grid-cols-2 grid-cols-1">
        <div className="w-full md:h-[600px]  h-[300px] flex justify-center items-center flex-col gap-5 p-10">
          <h1 className="font-extrabold text-[24px] dark:text-gray-600 ">
            404
          </h1>
          <p className="font-medium dark:text-white text-[40px] ">
            Página no encontrada
          </p>
          <p className="font-normal dark:text-gray-500 text-[18px] text-center">
            Lo sentimos, no pudimos encontrar la página que estás buscando.
          </p>
          <button className="w-[120px] h-[35px] dark:bg-gray-900 dark:text-white  rounded-2xl dark:hover:bg-gray-800 transition-colors">
            <Link href={"/"}>Regresar</Link>
          </button>
        </div>
        <div className="w-full md:h-[600px] h-[300px]  flex justify-center items-center">
          <Image
            src="/imgs/not-found.png"
            alt="404 Not Found"
            width={400}
            height={400}
          />
        </div>
      </div>
    </>
  );
};
