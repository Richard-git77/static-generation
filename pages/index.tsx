import { Button,  Grid, Row } from '@nextui-org/react';
import {GetStaticProps, NextPage} from 'next'
import {Layout} from '../components/layouts';
import {characterApi} from '../api';
import { CharacterList ,smallCharacter} from '../interfaces';
import { CharacterCard } from '@/components';

interface Props{
  characters: smallCharacter[];
}

const HomePage: NextPage<Props> = ({characters}) => {
  console.log({characters});
    
  return (
    <Layout title='Listado de Characters'>

    <Grid.Container gap={ 2 } justify='flex-start'>
      {
     characters.map((character)=>(


      <CharacterCard key={character.id} characters={character}/>
     
      ))

     }
     
    <Button color="gradient">Press</Button>

  </Grid.Container>

    </Layout>
  )
}


export const getStaticProps: GetStaticProps = async (ctx) => {
    
  const {data}=await characterApi.get<CharacterList>('/pokemon?limit=151')
console.log({data});



 
const characters: smallCharacter[]= data.results.map((character,i)=>({

        ...character,
        id: i + 1,
        img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i+1}.svg`

  }))

  return {
    props:{
      characters

    }
  }
}





export default HomePage;