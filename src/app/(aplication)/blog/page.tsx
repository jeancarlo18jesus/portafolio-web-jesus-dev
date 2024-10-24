
import { Metadata } from "next";

import { BodyBlog } from '@/app/components/blog'

export const metadata: Metadata = {
    title: "Jesus | Blog",
  };



  
  export default  function Page() {

    return(
      <BodyBlog/>
    )
  }

    // export default  async function Page() {
//     await new Promise(resolve => setTimeout(resolve, 1000)); 
//     return (
//             <BodyAbautPage/>
//     );
// }