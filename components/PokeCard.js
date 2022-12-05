import styles from '../styles/PokeCard.module.css'

import Image from 'next/image'
import Link from 'next/link'

export default function PokeCard({ pokeData }) {
    return (
        <div className={ styles.card }>
            <Image 
                src={ `https://cdn.traction.one/pokedex/pokemon/${pokeData.id}.png` } 
                width="120" 
                height="120" 
                alt={pokeData.name} />
            <p className={ styles.id }>#{ pokeData.id }</p>
            <h3 className={ styles.title }>{ pokeData.name }</h3>
            <Link className={ styles.link } href={ `/pokemon/${pokeData.id}` }>Detalhes</Link>
        </div>
    )
}