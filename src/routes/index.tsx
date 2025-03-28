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
          Portes ouvertes virtuelles organisées par l'Association des Prépas MP2I et MPI
          le <strong>Samedi 24 février de 13h à 17h</strong> sur <a href="https://prepas-mp2i.org/forum/" target="_blank" rel="noopener">prepas-mp2i.org</a>.
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
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M21 16v-5.9l-8.05 4.375q-.45.25-.95.25t-.95-.25l-8.45-4.6q-.275-.15-.388-.375T2.1 9t.113-.5t.387-.375l8.45-4.6q.225-.125.463-.188T12 3.275t.488.063t.462.187l9.525 5.2q.25.125.388.363T23 9.6V16q0 .425-.288.713T22 17t-.712-.288T21 16m-9.95 4.475l-5-2.7q-.5-.275-.775-.75T5 16v-3.8l6.05 3.275q.45.25.95.25t.95-.25L19 12.2V16q0 .55-.275 1.025t-.775.75l-5 2.7q-.225.125-.462.188t-.488.062t-.488-.062t-.462-.188" /></svg>
            Lycée Saint Louis
          </a>
        </li>
        <li>
          <a href="https://www.onisep.fr/formation/apres-le-bac-les-etudes-superieures/les-principales-filieres-d-etudes-superieures/les-cpge-classes-preparatoires-aux-grandes-ecoles/les-prepas-scientifiques/la-prepa-mp2i-mathematiques-physique-ingenierie-et-informatique" target="_blank" rel="noopener">
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M6.75 22q-1.125 0-1.937-.763T4 19.35V5.4q0-.95.588-1.7t1.537-.95l7.5-1.475q.925-.2 1.65.4T16 3.225V15.15q0 .725-.45 1.288t-1.15.687L6.525 18.7q-.225.05-.375.238T6 19.35q0 .275.225.463T6.75 20H18V5q0-.425.288-.712T19 4t.713.288T20 5v15q0 .825-.587 1.413T18 22zm1.45-5.65q.35-.075.575-.35T9 15.375V5.45q0-.475-.363-.775t-.837-.2q-.35.075-.575.35T7 5.45v9.925q0 .475.362.775t.838.2" /></svg>
            La fiche ONISEP
          </a>
        </li>
        <li>
          <a href="https://prepas-mp2i.fr/filiere/#le-programme-en-mp2i" target="_blank" rel="noopener">
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M6.75 22q-1.125 0-1.937-.763T4 19.35V5.4q0-.95.588-1.7t1.537-.95l7.5-1.475q.925-.2 1.65.4T16 3.225V15.15q0 .725-.45 1.288t-1.15.687L6.525 18.7q-.225.05-.375.238T6 19.35q0 .275.225.463T6.75 20H18V5q0-.425.288-.712T19 4t.713.288T20 5v15q0 .825-.587 1.413T18 22zm1.45-5.65q.35-.075.575-.35T9 15.375V5.45q0-.475-.363-.775t-.837-.2q-.35.075-.575.35T7 5.45v9.925q0 .475.362.775t.838.2" /></svg>
            Les programmes
          </a>
        </li>
        <li>
          <a href="https://prepas-mp2i.org/" target="_blank" rel="noopener">
            <img class="icon" src="/assets/images/prepas-mp2i-logo.webp" alt="Icone Prépas-MP2I.org" />
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
    src: [filename_without_extension + ".webp", filename_without_extension + ".avif", filename_without_extension + ".jpg"],
    alt: alt
  };
}

const promotions: PromotionProps[] = [
  {
    name: "MP2I [0] & MPI [0]",
    year: "2021 - 2023",
    description: (
      <>
        <p>
          Première promotion des voies MP2I et MPI, lancées à la rentrée 2021.
          Il se démarque directement des autres filières, en numérotant leur promotion à partir de 0, entre crochets, comme
          les indices d'un tableau en informatique.
        </p>
        <p>
          Évidemment, ils conservent les mascottes des précédentes promotions de MPSI et MP qu'ils remplacent, le mammouth et le chacal. <em>Avez-vous aperçu les deux chacals du logo ?</em>
        </p>
        <p>
          En l'honneur de leur professeure de mathématiques, nouvellement nommée au Lycée Saint Louis, ils inscrivent
          les caractères ASCII «<em>VMS?</em>» qui correspondent à une phrase très souvent entendue lors de son cours.
        </p>
        <p>
          Ils réalisent un album de musique, remplie de musiques originales et de reprises,
          toute pleine de références. Ils éditent une cinquantaine de versions physiques de l'album ainsi qu'une
          distribution numérique (disponible sur <a href="https://music.youtube.com/playlist?list=PLegzBcyUCv-jDyIUl6dOOIgo81iYFW6Ad" target="_blank" rel="noopener">YT Music</a>, <a href="https://open.spotify.com/intl-fr/track/7hkjE2U4sU2EwiXJgWk3yM" target="_blank" rel="noopener">Spotify</a> et <a href="https://www.deezer.com/en/album/400906047" target="_blank" rel="noopener noreferrer">Deezer</a>).
        </p>
        <p>
          Après deux ans de travail, ils obtiennent des résultats admirablement bons, avec
          8 intégrés à X/ENS, 2 intégrés aux Centrales, 15 intégrés aux Mines-Ponts (dont 1 aux Mines Paris, 4 à TELECOM Paris et 4
          à IMT Atlantique), 8 aux Mines TELECOM et 6 à CCINP. Six d'entre eux décident de retenter leur chance aux concours
          en redoublant bien qu'ils étaient admis à une école du concours CCINP (ou plus).
        </p>
      </>
    ),
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
    description: (
      <>
        <p>
          Bien que numérotée 1, il s'agit de la deuxième promotion MP2I/MPI du lycée Saint-Louis.
          Il s'agit d'un clin d'oeil informatique, comme l'est aussi la balise HTML <code>&lt;/2023&gt;</code> qui indique l'année.
        </p>
        <p>
          Les deux mascottes de la promotion sont toujours présentes : le mammouth et le chacal, à laquelle s'ajoute une nouvelle créature,
          le <a href="https://leagueoflegends.fandom.com/wiki/Poro" target="_blank" rel="noopener noreferrer">poro (inspiré du jeu vidéo League of Legends)</a>.
          L'horloge de la vénérable salle C253 est toujours bien présente ainsi que l'inscription codée en binaire «<em>VMS?</em>».
        </p>
        <p>
          Les objectifs de cette promotion sont très différents de ceux de la promotion précédente. Ils sont peu à viser (et à passer)
          les Écoles Normales Supérieures (ENS) et préfèrent les Écoles d'ingénieurs, notamment les Centrales.
          <br />Sans surprise,
          ils sont 3 à intégrer X/ENS, 5 à intégrer les Centrales (dont 3 à CentraleSupélec),
          10 à intégrer Mines-Ponts (dont 1 aux Mines Paris, 2 aux Ponts et 1 à TELECOM Paris),
          8 à intégrer Mines TELECOM, 4 à intégrer CCINP et 4 à intégrer E3C/Polytech.
        </p>
      </>
    ),
    images: [
      createThreeVariantArt("/assets/images/promotions/2024/MP2I_1_logo.jpg", "Logo MP2I [1]"),
      createThreeVariantArt("/assets/images/promotions/2024/MPI_1_logo.jpg", "Logo MPI [1]"),
    ],
  },
  {
    name: "MP2I [2] & MPI [2]",
    year: "2023 - 2025",
    description: (
      <>
        <p>
          Troisième promotion en MP2I/MPI du lycée Saint-Louis, elle
          n'a pas encore passé les concours qui commenceront par les écrits en avril
          et se termineront par les oraux entre mi-juin et fin juillet
        </p>
        <p>
          Elle reprend les codes des promotions précédentes, avec
          les mascottes emblématiques, le mammouth et le chacal.
          L'année est encore présentée sous forme de balise HTML, <code>&lt;2024&gt;</code> et
          on retrouve l'inscription codée en binaire «<em>VMS?</em>».
          <br />
          Sont introduits, les cables et connectiques emblématiques
          de l'informatique : câble RJ45, câble USB, prise jack, connecteur HDMI, etc.
        </p>
      </>
    ),
    images: [
      createThreeVariantArt("/assets/images/promotions/2025/MP2I_2_logo.jpg", "Logo MP2I [2]"),
      createThreeVariantArt("/assets/images/promotions/2025/MPI_2_logo.jpg", "Logo MPI [2]"),
    ]
  },
  {
    name: "MP2I [3]",
    year: "2024 - 2026",
    description: (
      <p>
        La promotion MP2I [3] est la quatrième promotion de la filière MP2I du lycée Saint-Louis.
        <br />
        Rentrée en 2024, elle est composée d'une cinquantaine d'étudiants et étudiantes.
        Ils leur reste un peu moins de deux ans pour se préparer aux concours des grandes écoles d'ingénieurs.
      </p>
    ),
    images: [
      createThreeVariantArt("/assets/images/promotions/2026/MP2I_3_logo.jpg", "Logo MP2I [3]"),
      createThreeVariantArt("/assets/images/promotions/soon.jpg", "Logo MP2I [3] - Coming soon"),
    ]
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
            que l'<a href="https://www.polytechnique.edu/" target="_blank">École Polytechnique</a>, <a href="https://www.centralesupelec.fr/" target="_blank">CentraleSupélec</a>, <a href="https://telecom.paris/" target="_blank">Télécom Paris</a>, l'<a href="https://ensimag.grenoble-inp.fr/" target="_blank">Ensimag</a>  etc.
          </p>
        </section>
        <QuickLinkAside />
        <OpenDoorsAside />
        <PromotionDisplay id="promotions-mp2i" title="Nos promotions" promotions={promotions} reverse={true} />
      </main>
      <footer>
        <p>Fait avec ❤️ par les étudiants.</p>
        <p>Contributions sur <a href="https://github.com/MP2I-Saint-Louis" target="_blank">GitHub</a>.</p>
      </footer>
    </>
  );
}

export default Home;