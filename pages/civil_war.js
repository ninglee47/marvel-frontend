import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import { gql } from "@apollo/client";
import client from "../apollo-client";


export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
    query {
      feed_civil_War {
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
      comics: data.feed_civil_War,
    },
 };
}

export default function Civil_War({comics}) {
  return (
    <div>
      <Head>
        <title>House of M Reading Order</title>
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
