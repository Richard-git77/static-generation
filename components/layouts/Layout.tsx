import Head from 'next/head'
import { FC, PropsWithChildren } from 'react';
import {Navbar} from '../ui';

interface Props{
  title?:string; 
}

export const Layout = ({ children, title }: PropsWithChildren<Props>) => {
  return (
   <>
   <Head>
     
     <title>{title || "characters app "}</title>
     
     <meta  name='author' content='Vincent'/>
     <meta name="description" content={`Informacion acerca del character${title}`} />
     <meta name="keywords" content={`${title}, character, dictionary`} />
   </Head>
   
      <Navbar/>

  
  
  
    <main style={{
      padding: '0px 20px'
    }}>
      {children}
    </main>
   </>
  )
}
