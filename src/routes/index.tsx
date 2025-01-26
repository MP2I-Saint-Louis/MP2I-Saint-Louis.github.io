import { Title } from "@solidjs/meta";
import "./index.css";
import { Component } from "solid-js";
import Promotion, { PromotionProps, PromotionArt } from "~/components/Promotion";

const Header: Component = () => {
  return (
    <header>
      <picture>
        <source media="(min-width: 1024px)" srcset="/assets/images/saint_louis_1308.webp, /assets/images/saint_louis_1308.avif" />
        <source media="(max-width: 1024px)" srcset="/assets/images/saint_louis_1308_1024.webp, /assets/images/saint_louis_1308_1024.avif, /assets/images/saint_louis_1308_1024.jpg" />
        <img src="/assets/images/saint_louis_1308.jpg" alt="Lycée Saint Louis - 1308" />
      </picture>
      <div id="header-text">
        <div class="wider-container">
          <p>MP2I</p>
          <p>Lycée Saint Louis</p>
          <div id="header-trail"></div>
        </div>
      </div>
    </header>
  );
}

const OpenDoorsAside: Component = () => {
  return (
    <aside id="portes-ouvertes">
      <h2>Portes ouvertes</h2>
      <ul>
        <li>Portes ouvertes au Lycée Saint Louis le <strong>Samedi 1er février 2025 de 13h à 17h</strong> (voir <a href="https://pia.ac-paris.fr/serail/jcms/s1_3211599/fr/journee-portes-ouvertes-2025" target="_blank" rel="noopener">annonce</a>).</li>
        <li>
          Portes ouvertes virtuelles organisées par l'Association des Prépas MP2I et MPI le 
          <strong>Samedi 24 février de 13h à 17h</strong> sur <a href="https://prepas-mp2i.fr/forum/" target="_blank" rel="noopener">prepas-mp2i.fr</a>.
        </li>
      </ul>
    </aside>);
}

const QuickLinkAside: Component = () => {
  return (
    <aside id="quick-links">
      <h2>Liens rapides</h2>
      <ul>
        <li>
          <a href="https://pia.ac-paris.fr/serail/jcms/s1_2080084/fr/accueil" target="_blank" rel="noopener">
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M21 16v-5.9l-8.05 4.375q-.45.25-.95.25t-.95-.25l-8.45-4.6q-.275-.15-.388-.375T2.1 9t.113-.5t.387-.375l8.45-4.6q.225-.125.463-.188T12 3.275t.488.063t.462.187l9.525 5.2q.25.125.388.363T23 9.6V16q0 .425-.288.713T22 17t-.712-.288T21 16m-9.95 4.475l-5-2.7q-.5-.275-.775-.75T5 16v-3.8l6.05 3.275q.45.25.95.25t.95-.25L19 12.2V16q0 .55-.275 1.025t-.775.75l-5 2.7q-.225.125-.462.188t-.488.062t-.488-.062t-.462-.188"/></svg>
            Lycée Saint Louis
          </a>
        </li>
        <li>
          <a href="https://prepas-mp2i.fr/filiere/#le-programme-en-mp2i" target="_blank" rel="noopener">
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M6.75 22q-1.125 0-1.937-.763T4 19.35V5.4q0-.95.588-1.7t1.537-.95l7.5-1.475q.925-.2 1.65.4T16 3.225V15.15q0 .725-.45 1.288t-1.15.687L6.525 18.7q-.225.05-.375.238T6 19.35q0 .275.225.463T6.75 20H18V5q0-.425.288-.712T19 4t.713.288T20 5v15q0 .825-.587 1.413T18 22zm1.45-5.65q.35-.075.575-.35T9 15.375V5.45q0-.475-.363-.775t-.837-.2q-.35.075-.575.35T7 5.45v9.925q0 .475.362.775t.838.2"/></svg>
            Les programmes
          </a>
        </li>
        <li>
          <a href="https://prepas-mp2i.fr/" target="_blank" rel="noopener">
            <img class="icon" src="/assets/images/prepas-mp2i-logo.webp" alt="Icone Prépas-MP2I.fr" />
            Association des Prépas MP2I & MPI
          </a>
        </li>
      </ul>
    </aside>);
}

interface PromotionDisplayProps {
  id?: string;
  title: string;
  promotions: PromotionProps[];
  reverse?: boolean;
}

const PromotionDisplay: Component<PromotionDisplayProps> = (props) => {
  const _promotions = props.reverse ? props.promotions.toReversed() : props.promotions;

  return (
    <section id={props.id} class="promotion-display">
      <h2>{props.title}</h2>
      {_promotions.map((promotion) => (
        <Promotion {...promotion} />
      ))}
    </section>
  );
}

function createThreeVariantArt(src: string, alt: string): PromotionArt {
  const filename_without_extension = src.split('.').slice(0, -1).join('.');

  return {
    src: [filename_without_extension+".webp", filename_without_extension+".avif", filename_without_extension+".jpg"],
    alt: alt
  };
}

const promotions: PromotionProps[] = [
  {
    name: "MP2I [0] & MPI [0]",
    year: "2021 - 2023",
    description: "La classe préparatoire MP2I (Mathématiques, Physique, Informatique et Ingénierie) du lycée Saint Louis.",
    images: [
      createThreeVariantArt("/assets/images/promotions/2023/MP2I_0_square_logo.jpg", "Logo MP2I [0] variante carrée"),
      createThreeVariantArt("/assets/images/promotions/2023/MP2I_0_logo.jpg", "Logo MP2I [0] variante verticale"),
      createThreeVariantArt("/assets/images/promotions/2023/MPI_0_classic_logo.jpg", "Logo MPI [0]"),
      createThreeVariantArt("/assets/images/promotions/2023/MPI_0_light_logo.jpg", "Logo MPI [0] variante claire"),
    ],
  },
  {
    name: "MP2I [1] & MPI [1]",
    year: "2022 - 2024",
    description: "La classe préparatoire MPI (Mathématiques, Physique et Informatique) du lycée Saint Louis.",
    images: [
      createThreeVariantArt("/assets/images/promotions/2024/MP2I_1_logo.jpg", "Logo MP2I [1]"),
      createThreeVariantArt("/assets/images/promotions/2024/MPI_1_logo.jpg", "Logo MPI [1]"),
    ],
  },
  {
    name: "MP2I [2] & MPI [2]",
    year: "2023 - 2025",
    description: "La classe préparatoire MP2I (Mathématiques, Physique, Informatique et Ingénierie) du lycée Saint Louis.",
    images: [
      createThreeVariantArt("/assets/images/promotions/2025/MP2I_2_logo.jpg", "Logo MP2I [2]"),
      createThreeVariantArt("/assets/images/promotions/soon.jpg", "Logo MPI [2] - Coming soon"),
    ]
  },
  {
    name: "MP2I [3]",
    year: "2024 - 2026",
    description: "La classe préparatoire MP2I (Mathématiques, Physique, Informatique et Ingénierie) du lycée Saint Louis.",
    images: []
  }
];

const Home: Component = () => {
  return (
    <>
      <Header />
      <main class="container">
        <section id="abstract">
          <p>
            Le lycée Saint-Louis au coeur du Quartier Latin est le seul lycée en France dédié uniquement aux Classes Préparatoires aux Grandes Écoles. 
            <br />Grâce à son équipe pédagogique de qualité et à des khôlleurs expérimentés, le lycée saura vous offrir une préparation optimale pour les concours.
          </p>
          <p>
            <a href="https://prepas.org/index.php?rubrique=76" target="_blank" rel="noopener">La filière MP2I (Mathématiques Physique Informatique et Ingénierie)</a>, lancée à la rentrée 2021,
            est une formation innovante qui allie les mathématiques, la physique, l'informatique et l'ingénierie
            pour répondre aux besoins toujours plus présents d'ingénieurs polyvalents avec une solide formation scientifique
            et une aisance en informatique.
          </p>
          <p>
            Ouverte au lycée Saint Louis dès la rentrée 2021, c'est une formation exigeante
            qui vous préparera aux <a href="https://ens.fr/" target="_blank">Écoles Normales</a> ainsi qu'aux plus grandes écoles d'ingénieurs françaises, telles 
            que l'<a href="https://www.polytechnique.edu/" target="_blank">École Polytechnique</a>, 
            <a href="https://www.centralesupelec.fr/" target="_blank">CentraleSupélec</a>, 
            <a href="https://telecom.paris/" target="_blank">Télécom Paris</a>,
            l'<a href="https://ensimag.grenoble-inp.fr/" target="_blank">Ensimag</a>  etc.
          </p>
        </section>
        <QuickLinkAside />
        <OpenDoorsAside />
        <PromotionDisplay id="promotions-mp2i" title="Nos promotions" promotions={promotions} reverse={true}/>
      </main>
      <footer>
        <p>Fait avec ❤️ par les étudiants.</p>
        <p>Contributions sur <a href="https://github.com/MP2I-Saint-Louis" target="_blank">GitHub</a>.</p>
      </footer>
    </>
  );
}

export default Home;