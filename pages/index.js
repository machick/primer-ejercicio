import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../components/header'
import Main from '../components/main'
import Footer from '../components/footer'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    //==================
    //ACTIVE MENU
    //==================
    let menu = document.getElementsByClassName('header')[0];
    let hamburger = document.getElementsByClassName('com-hamburger')[0];

    //le agregamos o le quitamos la clase dependiendo si la tiene o no
    let handleMenu = () => {
      menu.classList.toggle("--active-menu");
    }

    //le asiganmos la func al click del menu
    hamburger.addEventListener('click', handleMenu)

    //Hacemos que el menu se cierre cuando clickeamos esc.
    window.addEventListener('keydown', function (e) {
      //preg si la tecla es esc cuando tecleamos
      if ((e.key == 'Escape' || e.key == 'Esc' || e.keyCode == 27)) {
        e.preventDefault();
        //recorremos todos los active y lo capturamos
        let isActive = document.querySelector('.--active-menu');

        //si es true lo volamos y se cierra el menu
        if (isActive) {
          isActive.classList.remove("--active-menu");
        }
        return false;
      }
    });
    //==================
    //ACTIVE SEARCH
    //==================
    let input = document.getElementsByClassName('com-search__input')[0];
    let header = document.getElementsByClassName('header')[0];
    let headerMobile = document.getElementsByClassName('com-nav-mobile')[0];
    //agregamos la clase al evento focus
    input.addEventListener("focus", function () {
      header.classList.add('--active-search');
    });

    //removemos la clase cuando nos salimos del input
    input.addEventListener("blur", function () {
      header.classList.remove('--active-search');
    });
    //Iniciamos la posicion del scroll
    let scrollPos = 0;

    let share = document.getElementsByClassName('com-share')[0];

    //funcion en la cual detectamos el scrollDown scrollUp y
    // le asig su respectiva clase a un elemento que pasamos como parametro (elemento) y el valor actual de "Y" de window (windowY)
    let scrollAnimation = (elemento, windowY) => {
      //Validamos que exista el elemento y sino arafue. 
      if (!elemento) {
        return false
      }

      //si es menor el punto "Y" scroll al scrollPos definido entramos (scrollUp)
      //caso contrario estariamos haciendo scrollDOwn, dentro definimos la clase para el estado
      if (windowY < scrollPos) {
        // Scroll UP
        elemento.classList.add('--scrollUp');
        elemento.classList.remove('--scrollDown');
      } else {
        // Scroll DOWN
        elemento.classList.add('--scrollDown');
        elemento.classList.remove('--scrollUp');
      }
    }

    //agregamos una function scroll y dnetro de ella colocar todas las animaciones que funcionen con scroll
    window.addEventListener('scroll', () => {
      //asignamos el valor del punto "Y" en cada scroll
      let windowY = window.scrollY;

      //MENU DESKTOP
      scrollAnimation(header, windowY);

      // MENU MOBILE
      // se le agrega el cond xq en safari con un determinado mouse el scroll hace un rebote en el explorador que 
      // genera que entienda que se esta haciendo scrolldown y entonces desaparece
      if (windowY > 75) {
        scrollAnimation(headerMobile, windowY);
      }

      //SHARE
      /* if (document.documentElement.clientWidth < 1024) {
        scrollAnimation(share, windowY);
        //agregamos el condicional en el cual validamos que no este en top 
        //para que no se pise con el header
        if (share.classList.contains('--scrollUp') && windowY < 100) {
          share.style.display = 'none';
        } else {
          share.style.display = 'block';
        }
      } */
      //le damos el valor actual del punto "Y" scroll a scrollPos para saber en la sig iteracion
      //si es mayor o menor y de esta forma sabemos si esta subiendo o bajando. 
      //ESTE VALOR DEBERIA IR SIEMPRE A LO ULTIMO DEL SCROLL
      scrollPos = windowY;
    });
    
  }, []);
  
  return (
    <div className={styles.container}>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>Acumulado</title>
        {/* <link rel="stylesheet" href="https://especiales.lanacion.com.ar/arc-css/css/site.css"/> */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}
