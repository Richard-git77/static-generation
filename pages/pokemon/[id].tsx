import { Layout } from '@/components'
import { useRouter } from 'next/router';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { characterApi } from '@/api';
import { CharacterFull } from '../../interfaces/characterFull';
import { Button, Card, Container, Grid, Text ,Image} from '@nextui-org/react';
import { localFavorites } from '@/utils';
import { useState } from 'react';


interface Props{
  character: CharacterFull;
}


const CharacterPage: NextPage<Props> = ({character}) => {

  // el use router da la informacion del url 
    const router = useRouter();
    console.log(router.query);
    
    console.log(character);


    const [isInFavorites, setIsInFavorites] = useState(localFavorites.existInFavorites( character.id))

    const onToggle =()=>{
      
     
      localFavorites.localFavorite(character.id);
      setIsInFavorites(!isInFavorites);
    }

    
    




  return (

<Layout title={character.name}>
    
        <Grid.Container>
        <Grid xs={12} sm={4}>
          <Card hoverable css={{padding:" 30px "}}>
            <Card.Body>
              <Card.Image 
                src={character.sprites.other?.dream_world.front_default || '/no-image.png'}
                alt={character.name}
                width="100%"
                height={200}
              />
            </Card.Body>
          </Card>
        </Grid>

        
        <Grid xs={12} sm={8}>
          <Card>
            <Card.Header css={{display: "flex", justifyContent: 'space-between'}}>
            <Text h1 transform='capitalize'>{character.name}</Text>
                <Button  
                color="gradient"
                ghost={!isInFavorites}
                onClick={ onToggle}
                >
                  {isInFavorites ? 'in Favorites' : 'save In Favorites'}
                </Button>
                </Card.Header>


                <Card.Body>
                  <Text size={30}>Sprites</Text>
                  <Container direction='row' display='flex' gap={0}>
                    <Image
                    src={character.sprites.front_default}
                    alt={character.name}
                    width={100}
                    height={100}
                    />
                    <Image
                    src={character.sprites.back_default}
                    alt={character.name}
                    width={100}
                    height={100}
                    />
                    <Image
                    src={character.sprites.front_shiny}
                    alt={character.name}
                    width={100}
                    height={100}
                    />
                    <Image
                    src={character.sprites.back_shiny}
                    alt={character.name}
                    width={100}
                    height={100}
                    />
                  </Container>
                </Card.Body>
            
          </Card>

        </Grid>
        </Grid.Container>
</Layout>  


)
}


//obteniendo el path del url desde el servidor,el ctx contexto nos da mucha informacion de el url si le hacemos console.log a el contexto console.log(ctx);

      export const getStaticPaths: GetStaticPaths =async (ctx) => {
      
              const charactersLenght = [...Array(151)].map((value,index)=> `${ index + 1}`);
      
        return {
          paths:charactersLenght.map( id => ({
            params: { id }
          })),
          
          fallback:false
        }
      }


      //haciendo el fetching de la api co axios trayendo la informacion y annadiendole el id que previamente obtuvimos con get static paths,par despues enviarsela al componente desde el servidor con los props del mismo getstaticprops y el componente los recibe en los props

export const getStaticProps: GetStaticProps = async ({params}) => {
    


      const { id } = params as { id: string }
      
        
  const {data} =await characterApi.get<CharacterFull>(`/pokemon/${ id }`)
  console.log({data});
 

  return {
   
    props:{
      character: data

    }
  }
}



export default CharacterPage