import { Title } from "@solidjs/meta";
import Counter from "~/components/Counter";
import "./index.css";
import { Component } from "solid-js";
import Promotion, { PromotionProps } from "~/components/Promotion";

const Header: Component = () => {
  return (
    <header>
      <img src="/assets/images/saint_louis_1308.jpg" alt="Lycée Saint Louis - 1308" />
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

const QuickLinkAside: Component = () => {
  return (
    <aside id="quick-links">
      <h2>Liens rapides</h2>
      <ul>
        <li>
          <a href="https://pia.ac-paris.fr/serail/jcms/s1_2080084/fr/accueil" target="_blank" rel="noopener">
            Lycée Saint Louis
          </a>
        </li>
        <li>
          <a href="https://prepas-mp2i.fr/filiere/#le-programme-en-mp2i" target="_blank" rel="noopener">
            Les programmes
          </a>
        </li>
        <li>
          <a href="https://prepas-mp2i.fr/" target="_blank" rel="noopener">
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
  const _promotions = props.reverse ? props.promotions.reverse() : props.promotions;

  return (
    <section id={props.id} class="promotion-display">
      <h2>{props.title}</h2>
      {_promotions.map((promotion) => (
        <Promotion {...promotion} />
      ))}
    </section>
  );
}

const promotions: PromotionProps[] = [
  {
    name: "MP2I [0]",
    year: "2022 - 2023",
    description: "La classe préparatoire MP2I (Mathématiques, Physique, Informatique et Ingénierie) du lycée Saint Louis.",
    images: [
      "https://mp2i-saint-louis.github.io/images/avatar.png",
      "/assets/images/mp2i-2.jpg",
      "/assets/images/mp2i-3.jpg",
    ],
  },
  {
    name: "MPI",
    year: "2021 - 2022",
    description: "La classe préparatoire MPI (Mathématiques, Physique et Informatique) du lycée Saint Louis.",
    images: [
      "/assets/images/mpi-1.jpg",
      "/assets/images/mpi-2.jpg",
      "/assets/images/mpi-3.jpg",
    ],
  },
];

const Home: Component = () => {
  return (
    <>
      <Header />
      <main class="container">
        <section id="abstract">
          <p>Les classes préparatoires MP2I et MPI du Lycée Saint Louis, Paris 6, vous accueille sur ce site, maintenu par leur soin.
            <br />Nous espérons que vous y trouverez les informations que vous cherchez.</p>
        </section>
        <QuickLinkAside />
        <PromotionDisplay id="promotions-mp2i" title="Promotions" promotions={promotions} reverse={true}/>
      </main>
    </>
  );
}

export default Home;