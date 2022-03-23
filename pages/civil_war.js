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
        <title>Civil War Reading Order</title>
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

          <Text fontSize='4xl' align={'center'}>Civil War</Text>

          <Box align='center'>
            <Image src='/pics/civil_war.png' width={1200*0.8} height={800*0.8} alt={'civil war'} />
          </Box>

          <Box width={'85%'} paddingBottom='10' paddingTop={'5'} paddingLeft='80'>
            <Text fontSize={'2xl'}>
            After a horrific tragedy raises questions on whether or not super heroes should register with the government, longtime Avengers teammates Captain America and Iron Man end up on opposite sides of the argument! 
            Writer Mark Millar and artist Steve McNiven split the Marvel Universe in two as friend fights friend in one of the most celebrated and successful events of all-time!
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
