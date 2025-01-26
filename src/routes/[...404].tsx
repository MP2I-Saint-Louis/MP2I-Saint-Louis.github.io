import { Title } from "@solidjs/meta";
import { HttpStatusCode } from "@solidjs/start";
import "./404.css";

export default function NotFound() {
  return (
    <main>
      <Title>Page introuvable</Title>
      <HttpStatusCode code={404} />
      <section>
        <h1>Page Introuvable</h1>
        <div id="explanation">
          <p>
            La page que vous recherchez n'existe pas ou plus.
          </p>
          <p>
            Nous vous invitons à retourner à la page d'accueil.
          </p>
        </div>

        <a href="/">Retour à la page d'accueil</a>
      </section>
    </main>
  );
}
