import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import styles from '../styles/Home.module.css'
import { Text, Box, Stack } from '@chakra-ui/react';
import { useState } from 'react';
//import '@easyfonts/ostrich-sans/regular.css';
import "fontsource-ostrich-sans/900.css"

import { useSprings, animated } from 'react-spring'


export default function Home() {

  const AnimatedDonut = animated(Box)
  const [flip, setFlip] = useState(false)
  const [index, setIndex] = useState(null);

  const test = [1, 2 ,3]
  const imgs = [
  {pic:'/pics/avengers-disassemble@3x.png', href: '/avenger_dissamble', width: '823px'}, 
  {pic: '/pics/house-of-m@3x.png', href:'/house_of_m', width: '338px'}, 
  {pic:'/pics/civil-war@3x.png', href:'/civil_war', width: '381px'}]

  const springs = useSprings(
    imgs.length,
    imgs.map((item, i) => ({
      from: {scale: 1},
      scale: i === index ? 1.2 : 1,
      delay: 300
    }))
  );

  return (
    <div className={styles.container}>
      <Head>
        <title>Marvel Universe Reading Order</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
      
         
          <Box mt='85px' ml='85px'>
            <Link href='/about'>
              <a>
              <Image src={'/pics/about@3x.png'} width='209px' height='100px'/>
              </a>
            </Link>
          </Box>
          

          <Stack pb='45px'>
          <Box pl='95px'>
            <Text textShadow={'-12px 0px black'} color='#d25050' fontFamily={'Ostrich Sans'} fontSize='250px' fontWeight={'900'}>
              MARVEL EARTH 616
            </Text>
          </Box>

          <Stack alignItems={'end'}>
            {springs.map( (scale, i) => (
              <Box pb='40px' pr='90px'>
                <AnimatedDonut 
                key={i}
                onMouseEnter={() => {
                  setFlip(true)
                  setIndex(i)}}
                onMouseLeave={() => {setFlip(false)
                 setIndex(null)}}
                 style = {scale}>
                  
                   <Link href={imgs[i].href}>
                   <a>
                     <Image src={imgs[i].pic} width={imgs[i].width} height='100px'/>
                   </a>
                   </Link>
                   
                </AnimatedDonut>
                </Box>
              )
            )}
          </Stack>
          
          
          </Stack>
        
      </div>      
    </div>
  )
}
