import Link from "next/link"
import Image from 'next/image'
import { Text, Box, Stack } from '@chakra-ui/react';

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
  } from '@chakra-ui/react'
import styles from '../public/about.module.css'

export default function About() {
    return (
        <>
        <Box mt='85px' ml='85px'>
          <Link href='/'>
            <a>
            <Image src={'/pics/home@3x.png'} width='209px' height='100px'/>
            </a>
          </Link>
        </Box>

        <Box pl='95px'>
            <Text textShadow={'-12px 0px black'} color='#d25050' fontFamily={'OstrichSans'} fontSize='180px' fontWeight={'900'}>
              ABOUT
            </Text>
          </Box>

        <Box  pl='85px' pr='40px' pb='350px'>
        <Text fontFamily={'MuseoSans'} fontWeight='500' fontSize={'20px'} color='#272727'>
            We provide suggested reading orders of Marvel Earth-616 events. 
            All reading guide use information from 
            <Link href='https://www.comicbookherald.com/the-complete-marvel-reading-order-guide/'><a target="_blank" className={styles.link}> Comic Book Herald</a></Link> as main references.
            There are other resources that also proivde good guide such as the <Link href={'https://www.marvel.com/comics/events_crossovers'}><a className={styles.link} target="_blank">officaial Marvel website </a></Link> 
            and this <Link href={'https://www.reddit.com/r/Marvel/wiki/faq/'}><a className={styles.link} target="_blank">Reddit post</a></Link>.
            The reading guides provided by the officail Marvel website might be slightly different than Comic Book Herald's guides, 
            since some Comic Book Herald's guides suggest a few issues that are not considered as a tie-in issue of events. 
            I will keep adding more events in the future.<br/>
            In addition, all data are provided by Marvel. © 2022 MARVEL.
        </Text>
        </Box>

        <Box align='center' pb='150px'>
          <Text fontFamily={'OstrichSans'} fontWeight='900' fontSize={'50px'} color='#272727'>
            CONTACT ME
          </Text>
          <Text fontFamily={'MuseoSans'} fontWeight='500' fontSize={'20px'} color='#272727'>
            ning.lee0704@gmail.com
          </Text>
        </Box>

        <Box align='center' pb={'30px'}>
          <Text fontFamily={'OstrichSans'} fontWeight='900' fontSize={'50px'} color='#272727'>
            EXPLORE EVENTS
          </Text>
        </Box>

        <Stack>
          <Box align='left' pb='40px' pl='90px'>
            <Link href="/avenger_dissamble">
              <a>
              <Image src={'/pics/avengers-disassemble@3x.png'} width='823px' height='100px'/>
              </a>
            </Link>
          </Box>

          <Box align='left' pb='40px' pl='90px'>
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
          </Stack>
        </>
    )
}