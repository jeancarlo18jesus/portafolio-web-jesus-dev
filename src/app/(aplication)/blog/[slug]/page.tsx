
import {BodyPost} from '@/app/components/post/BodyPost';
import InitialDataPost from '@/app/schema/InitialDataPost.json'
import { notFound } from 'next/navigation';


interface Props {
  params: {
    slug: string; // Cambia a slug
  };
}

export default function Page({ params }: Props) {
  const { slug } = params; // Cambia a slug
  
  const post = InitialDataPost.find(post => post.id === slug);

  if (!post) {
    notFound()
  }

  return (
    <div> 
      <BodyPost slug={post}/>
    </div>
  );
}
