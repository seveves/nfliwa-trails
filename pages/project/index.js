import Head from 'next/head';
import Navigation from '../../components/Navigation';

export default function Project() {
  return (
    <div className="container">
      <Head>
        <title>NaturFreunde Lichtenwald - Projekt</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="main">
        <Navigation />
        <div>
          <p>
            Dieses Projekt wurde von Mountainbikern der NaturFreunde
            Deutschlands Ortsgruppe Plochingen-Reichenbach-Lichtenwald e.V. ins
            Leben gerufen.
            <br />
            Das Ziel ist es Trails zu schaffen, welche sich in die Natur
            integrieren und ohne bauliche Maßnahmen auskommen.
            <br />
            <br />
            Gestartet hat das Projekt 2020. In enger Zusammenarbeit mit den
            Gemeinden, der unteren Naturschutzbehörde und des Forsamts des
            Landkreis Esslingen konnten wir 2021 den ersten Trail direkt an
            unserem Naturfreundehaus eröffnen.
            <br />
            Dieser Trail "Naddefatz" ist familienfreundlich und soll dazu dienen
            Kinder an das Mountainbiken heranzuführen und den Spaß am Sport in
            und mit der Natur zu vermitteln.
            <br />
            <br />
            Der Trail bietet auch anderen Gruppen die Möglichkeit sich an das
            Mountainbiken wieder heranzutasten.
            <br />
            Viele "ältere" Mitglieder probieren sich aktuell mit E-Bikes aus und
            können auf dem "Naddefatz"-Trail ihr Fahrgefühl wiederfinden.
            <br />
            <br />
            Für 2022 sind noch 3-4 weitere Trails geplant, welche dann auf einer
            Tour verknüpft werden können.
          </p>
        </div>
      </main>
      <footer>
        <div className="impressum">
          <a
            href="https://www.naturfreunde-lichtenwald.de/impressum"
            alt="Impressum"
            target="_blank"
          >
            Impressum
          </a>
        </div>
      </footer>
    </div>
  );
}
