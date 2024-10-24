


import Image from 'next/image'
import {ArraysImagesCarrusel} from '@/seed'


export const CarruselImages = () => {
    return (
        <>
            <div className="max-w-[1200px] [&>:nth-child(2)]:-rotate-3 [&>:nth-child(3)]:rotate-2 [&>:nth-child(4)]:rotate-2 w-full h-fit flex flex-row justify-center gap-5 overflow-hidden md:overflow-visible mt-5 ">
                
                {
                    ArraysImagesCarrusel.map(({key,url,alt}) => (
                        <div key={key} className={`md:w-[300px] w-[150px] h-[150px]   md:h-[300px] rounded-3xl flex-none overflow-hidden shadow-lg  shadow-emerald-200 dark:shadow-gray-800 last:-rotate-3 first:rotate-3`} >
                            <Image
                                width={500}
                                height={500}
                                className='w-full h-full object-cover'
                                alt={alt}
                                src={url}
                            />
                        </div>
                    ))
                }
            </div>
        </>
       
    );
}
