import { BodyContacto } from "@/app/components";
import { Metadata } from "next";
export const metadata: Metadata = {
    title: "Jesus | Contacto",
  };

  
  export default  function ContactPage() {
   return(
    <BodyContacto/>
   )
  }

  // export default  async function Page() {
//     await new Promise(resolve => setTimeout(resolve, 1000)); 
//     return (
//             <BodyAbautPage/>
//     );
// }