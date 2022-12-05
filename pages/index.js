import styles from '../styles/Home.module.css'

import Image from 'next/image'

import PokeCard from '../components/PokeCard'

export async function getStaticProps() {
  const maxPokemons = 25
  const apiUrl = 'https://pokeapi.co/api/v2/pokemon/'

  const res = await fetch(`${apiUrl}/?limit=${maxPokemons}}`)
  const data = await res.json()

  data.results.forEach((item, index) => {
    item.id = index + 1
  })

  return {
    props: {
      pokemons: data.results
    }
  }
}

export default function Home({ pokemons }) {
  return (
    <>
      <div className={ styles.title_container }>
        <h1 className={ styles.title }>Poke<span>Next</span></h1>
        <Image src='/images/pokeball.png' width="50" height="50" alt="pokeball"></Image>
      </div>
      <div className={ styles.pokemons_container }>
        {
          pokemons.map(pokemon => {
              return (
                <PokeCard key={ pokemon.id } pokeData={ pokemon }></PokeCard>
              )
          })
        }
      </div>
    </>
  )
}
