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


export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
    query {
      feed_house_Of_M {
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
      comics: data.feed_house_Of_M,
    },
 };
}

export default function House_Of_M({comics}) {
  return (
    <div>
      <Head>
        <title>House of M Reading Order</title>
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

          <Text fontSize='4xl' align={'center'}>House of M</Text>
          <Box align='center'>
            <Image src='/pics/House-of-M.jpeg' width={1280*0.8} height={720*0.8} alt={'House of M'} />
          </Box>

          <Box width={'85%'} paddingBottom='10' paddingTop={'5'} paddingLeft='80'>
            <Text fontSize={'2xl'}>
              When the Scarlet Witch alters reality, the Avengers and X-Men face a world like none they’ve ever known! 
              Writer Brian Michael Bendis and artist Olivier Coipel re-imagine the Marvel Universe with Magneto bringing mutantkind to prominence in an eight-issue event.
              As the only person who remembers how things used to be, can Wolverine set things right? Should he?"
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
