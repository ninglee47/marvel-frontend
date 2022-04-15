import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import { gql } from "@apollo/client";
import client from "../apollo-client";
import { Box, Grid, GridItem, Text, HStack } from '@chakra-ui/react';
import "fontsource-ostrich-sans/900.css"

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

const styles = {
  container: {
      backgroundImage: 'url(/pics/avengers_dissasembled.jpeg)',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      width: '100vw',
      height: '100vh'
  }
};

export default function Avenger_Dissamble({comics}) {
  return (
    <div>
      <Head>
        <title>Avenger Disassembled Reading Order</title>
      </Head>
      <div>
        <Box 
         backgroundImage="url('/pics/group-2@3x.png')"
         backgroundPosition="right"
         backgroundRepeat="no-repeat"
         backgroundSize={'contain'}>
        <Box  pt='85px' ml='85px'>
          <Link href='/'>
            <a>
            <Image src={'/pics/home@3x.png'} width='209px' height='100px'/>
            </a>
          </Link>
        </Box>

        <Box pl='95px'>
            <Text textShadow={'-12px 0px black'} color='#d25050' fontFamily={'Ostrich Sans'} fontSize='180px' fontWeight={'900'}>
              AVENGERS
            </Text>
            <Text textShadow={'-12px 0px black'} color='#d25050' fontFamily={'Ostrich Sans'} fontSize='180px' fontWeight={'900'}>
             DISASSEMBLED
            </Text>
        </Box>
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
