import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import { gql } from "@apollo/client";
import client from "../apollo-client";
import { Box, Grid, GridItem, Text } from '@chakra-ui/react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from '@chakra-ui/react'

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
        <title>Avenger Disassembled Reading Order</title>
      </Head>
      <div>
          <Breadcrumb separator='-'>
            <BreadcrumbItem>
              <BreadcrumbLink href='/'>
                <Text fontSize='3xl' align={'center'}>Home</Text>
              </BreadcrumbLink>
            </BreadcrumbItem>
          
            <BreadcrumbItem>
              <BreadcrumbLink href='/about'>
                <Text fontSize='3xl' align={'center'}>About</Text>
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>

          <Text fontSize='4xl' align={'center'}>Avenger Disassembled</Text>
          <Box align='center'>
            <Image src='/pics/avengers-disassembled.jpeg' width={1024*0.8} height={790*0.8} alt={'avengers_dissasembled'} />
          </Box>

          <Box width={'85%'} paddingBottom='10' paddingTop={'5'} paddingLeft='80'>
            <Text fontSize={'2xl'}>
            Writer Brian Michael Bendis kicks off his historic run with the Avengers by bringing the previous era to a close alongside artist David Finch! 
            Chaos reigns when of Earth’s Mightiest Heroes turns against their teammates, leading the Avengers into a battle that not all will survive! 
            Featuring Iron Man, Captain America, Hawkeye, the Scarlet Witch and more!
            </Text>
          </Box>

          <Box align='center'  paddingBottom='10'>
            <Text fontSize={'3xl'}>SUGGESTED READING ORDER</Text>
          </Box>
          
          <Box align='center'>
          <Grid templateColumns='repeat(5, 1fr)' gap={1} width={'70%'}>
          {comics.map((link, index) => (
            <GridItem>
              <Box>
              <Link href={link.url}>
                <a target="_blank">
                  <Image src={link.img} width={200} height={300} alt={link.title} />
               </a>
               </Link>
               </Box>
               <Box>
                 {index + 1}
               </Box>
               <Box>
                 <Link href={link.url}>
                   <a target="_blank">
                     <p key={link.id}>{link.title}</p>
                   </a>
                 </Link>
               </Box>
            </GridItem>
            
          ))}
          </Grid>
          </Box>

      </div>
    </div>
  )
}
