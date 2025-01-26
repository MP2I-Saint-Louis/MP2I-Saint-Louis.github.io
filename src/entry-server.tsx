// @refresh reload
import { createHandler, StartServer } from "@solidjs/start/server";

export default createHandler(() => (
  <StartServer
    document={({ assets, children, scripts }) => (
      <html lang="fr">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <meta name="google-site-verification" content="ceqkKmtLXsTYqBnmXvfhOaUn3PPG8STrXfR3h70Yvcc" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="MP2I Saint Louis" />
          <meta property="og:url" content="https://mp2i-saint-louis.github.io/" />
          <meta property="og:description" content="Le lycée Saint-Louis, situé au cœur du Quartier Latin, est le seul lycée en France dédié exclusivement aux Classes Préparatoires aux Grandes Écoles. Il propose une préparation de qualité, notamment à travers la filière MP2I (Mathématiques, Physique, Informatique et Ingénierie), lancée en 2021. Cette formation innovante prépare les étudiants aux concours des plus grandes écoles d'ingénieurs." />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:title" content="MP2I Saint Louis" />
          <meta name="twitter:description" content="Le lycée Saint-Louis, situé au cœur du Quartier Latin, est le seul lycée en France dédié exclusivement aux Classes Préparatoires aux Grandes Écoles. Il propose une préparation de qualité, notamment à travers la filière MP2I (Mathématiques, Physique, Informatique et Ingénierie), lancée en 2021. Cette formation innovante prépare les étudiants aux concours des plus grandes écoles d'ingénieurs." />
          {assets}
        </head>
        <body>
          <div id="app">{children}</div>
          {scripts}
        </body>
      </html>
    )}
  />
));
