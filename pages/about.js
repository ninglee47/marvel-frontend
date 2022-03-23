import Link from "next/link"
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
        <Breadcrumb separator='-'>
            <BreadcrumbItem>
              <BreadcrumbLink href='/'>
                <Text fontSize='3xl' align={'center'}>Home</Text>
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>

        <Box align='center'>
          <Text>About the site</Text>
        </Box>

        <Box width={'60%'} >
        <Text>We provide suggested reading orders of Marvel Earth-616 events. 
            All reading guide use information from 
            <Link href='https://www.comicbookherald.com/the-complete-marvel-reading-order-guide/'><a target="_blank" className={styles.link}> Comic Book Herald</a></Link> as main references.
            There are other resources that also proivde good guide such as the <Link href={'https://www.marvel.com/comics/events_crossovers'}><a className={styles.link} target="_blank">officaial Marvel website</a></Link> 
            and this <Link href={'https://www.reddit.com/r/Marvel/wiki/faq/'}><a className={styles.link} target="_blank">Reddit post</a></Link>.
            The reading guides provided by the officail Marvel website might be slightly different than Comic Book Herald's guides, 
            since some Comic Book Herald's guides suggest a few issues that are not considered as a tie-in issue of events.
            In addition, all data are provided by Marvel. © 2022 MARVEL.
        </Text>
        </Box>
        </>
    )
}