import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import { gql } from "@apollo/client";
import client from "../apollo-client";
import { Box, Grid, GridItem, Text, HStack } from '@chakra-ui/react';

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
        <Box  pos="absolute" top="0" left="0">
          <Image src={'/pics/avengers_dissasembled.jpeg'} width='144' height='290' />
        </Box>
        
        <Box mt='85px' ml='85px'>
          <Link href='/'>
            <a>
            <Image src={'/pics/home@3x.png'} width='209px' height='100px'/>
            </a>
          </Link>
        </Box>

        <Box pl='95px'>
            <Text textShadow={'-12px 0px black'} color='#d25050' fontFamily={'OstrichSans'} fontSize='180px' fontWeight={'900'}>
              AVENGERS
            </Text>
            <Text textShadow={'-12px 0px black'} color='#d25050' fontFamily={'OstrichSans'} fontSize='180px' fontWeight={'900'}>
             DISASSEMBLED
            </Text>
        </Box>
        
        


          <Box align='center'  paddingBottom='10'>
            <Text fontFamily='OstrichSans' fontSize={'50px'} fontWeight='900' color={'#272727'}>
              SUGGESTED READING ORDER</Text>
          </Box>
          
          <Box align='center'>
          <Grid templateColumns='repeat(4, 1fr)' gap={1} width={'70%'}>
          {comics.map((link, index) => (
            <GridItem pr='95px'>
              <Box>
              <Link href={link.url}>
                <a target="_blank">
                  <Image src={link.img} width={'238px'} height={'352px'} alt={link.title} />
               </a>
               </Link>
               </Box>

               <Box pt='23px' pb='15px'>
                 <Text fontFamily='OstrichSans' fontSize={'50px'} fontWeight='900' color={'#272727'}>
                 {index + 1}
                 </Text>
               </Box>

               <Box pb='100px'>
                 <Link href={link.url}>
                   <a target="_blank">
                     <p key={link.id}>
                     <Text fontFamily='OstrichSans' fontSize={'20px'} fontWeight='900' color={'#272727'}>
                       {link.title}
                     </Text>
                    </p>
                   </a>
                 </Link>
               </Box>
            </GridItem>
            
          ))}
          </Grid>
          </Box>

          <HStack>
          <Box align='left' pb='40px' pl='100px'>
            <Link href="/house_of_m">
              <a>
              <Image src={'/pics/house-of-m@3x.png'} width='338px' height='100px'/>
            </a>
            </Link>
          </Box>
          
          <Box align='left' pb='40px' pl='90px'>
            <Link href="/civil_war">
            <a>
            <Image src={'/pics/civil-war@3x.png'} width='381px' height='100px'/>
            </a>
            </Link>
            </Box>
          </HStack>

      </div>
    </div>
  )
}
