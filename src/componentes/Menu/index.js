import styles from './Menu.module.css';
import Inicio from './../../paginas/Inicio/index';

export default function Menu(){
    return(
        <header>
            <nav className={styles.navegacao}>
                <a className={styles.link} href='/'>
                    Inicio
                </a>
                <a className={styles.link} href='/sobremim'>
                    Sobre Mim
                </a>

            </nav>
        </header>
    )
}