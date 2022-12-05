import Image from "next/image"
import styles from '../styles/Sobre.module.css'

export default function Sobre() {
    return (
        <div className={ styles.about }>
            <h1>Sobre o projeto</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fringilla sagittis nisi, fringilla ultrices elit elementum at. Mauris pharetra dolor sed lectus interdum, non fermentum ante aliquet. Nunc cursus nibh quam. Phasellus commodo consectetur venenatis. Sed commodo sem ac turpis feugiat rhoncus. Nullam sagittis bibendum est ac luctus. Nulla vulputate eu est eget pharetra. Mauris sed metus quis est finibus cursus ut quis libero. Nam laoreet sapien vitae lorem pretium, sed elementum metus faucibus.</p>
            <Image src="/images/charizard.png" width="300" height="300" alt="Charizard"></Image>
        </div>
    )
}