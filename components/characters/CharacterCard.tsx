import { FC } from 'react'
import { Card, Grid, Row, Text } from '@nextui-org/react';
import { smallCharacter } from '@/interfaces';
import { useRouter } from 'next/router';

interface Props{
    characters: smallCharacter
}







export const CharacterCard:FC<Props> = ({characters}) => {

        const router = useRouter();

        const onClick = () =>{
            router.push(`/pokemon/${characters.id}`);
        }


  return (
  
    
     

        <Grid xs={ 6 }sm={3} md={2} xl={1} key={ characters.id}>
          
          <Card 
           hoverable
            clickable
            onClick={ onClick}>

            <Card.Body css={{p:1}}>
              <Card.Image 
              src={characters.img}
              width="100%"
              height={140}/>
            </Card.Body>
            <Card.Footer>
              <Row justify='space-between'>
              <Text transform='capitalize' >{characters.name}</Text>
              <Text >#{characters.id}</Text>
              </Row>
            </Card.Footer>
          </Card>
        </Grid>

    
  )
}



