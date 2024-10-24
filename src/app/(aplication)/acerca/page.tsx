import { BodyAbautPage } from "@/app/components";
import { Metadata } from "next";
export const metadata: Metadata = {
    title: "Jesus | Acerca",
  };



export default function Page() {
    
    return (
            <BodyAbautPage/>
    );
}
// export default  async function Page() {
//     await new Promise(resolve => setTimeout(resolve, 1000)); 
//     return (
//             <BodyAbautPage/>
//     );
// }