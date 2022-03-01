import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import { gql } from "@apollo/client";
import client from "../apollo-client";

const Feed_query = gql`{
  feed {
    id
    title
  }
}`

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
    query {
      feed {
        id
        title
        img
        url
      }
    }
    `,
  });

  return {
    props: {
      comics: data.feed,
    },
 };
}

export default function Avenger_Dissamble({comics}) {
  return (
    <div>
      <Head>
        <title>Avenger Dissamble Reading Order</title>
      </Head>
      <div>
          <Link href="/">
              <a>Back to home page</a>
          </Link>
      
          {comics.map((link) => (
            <>
            <p key={link.id}>{link.title}</p>
            <Link href={link.url}>
              <a>
                <Image src={link.img} width={225} height={139} alt={link.title} />
             </a>
             </Link>
            </>
            
          ))}
        
      </div>
    </div>
  )
}
