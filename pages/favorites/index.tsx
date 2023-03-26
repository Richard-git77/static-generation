import { Layout, NoFavorites } from '@/components'
import  { useEffect, useState } from 'react'
import { localFavorites } from '@/utils';
import { Grid, Card } from '@nextui-org/react';
import { useRouter } from 'next/router';

const FavoritesPage = () => {


  const [favoritesCharacters, setfavoritesCharacters] = useState<number[]>([]);


  useEffect(() => {
      setfavoritesCharacters(localFavorites.charactersFavorites());


  }, [])
  

  const router= useRouter(); 

  
  return (

    


    <Layout title='Favorites Characters'>
      {
        favoritesCharacters.length === 0
        ? ( <NoFavorites/>)
        : (
          <Grid.Container gap={2} direction='row' justify='flex-start'>
            {
              favoritesCharacters.map(id =>(
                <Grid xs={6} sm={3} md={2} xl={1} key={id}
                >
                  <Card hoverable clickable css={{ padding: 10}}>
                  <Card.Image 
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
                  width={'100%'}
                  height={140}/>
                </Card>

                </Grid>
              ))
            }

          </Grid.Container>
        )
      }
      
    </Layout>

    )
}

export default FavoritesPage