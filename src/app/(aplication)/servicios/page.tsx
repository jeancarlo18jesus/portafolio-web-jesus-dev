
import { BodyServicios } from "@/app/components";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Jesus | Servicios",
  };

export default   function Page(){

    return (
       <BodyServicios/>
    );
}

// export default  async function Page() {
//     await new Promise(resolve => setTimeout(resolve, 1000)); 
//     return (
//             <BodyAbautPage/>
//     );
// }