import { Spacer, Text, useTheme ,Link} from '@nextui-org/react';
import NextLink from 'next/link'


export const Navbar = () => {



    const  {theme} = useTheme(); 
  return (
    <div style={{
            display: 'flex',
            width: '100%',
            flexDirection: 'row',

            alignItems: 'center',
            justifyContent: 'start',
            padding: '0px 20px',
           
            backgroundColor: theme?.colors.gray700.value,


    }}>
      <NextLink href='/' passHref>
      <Link>
      
        <Text color="white" h2>C</Text>
        <Text color="white" h3>haracters</Text>
      </Link>

      </NextLink>
        
        
        <Spacer css={{flex: 1}}/>
        

        <NextLink href="/favorites" passHref>
          <Link>
        
        <Text color="white" >Favoritos</Text>
          </Link>
        </NextLink>

    </div>
  )
}
