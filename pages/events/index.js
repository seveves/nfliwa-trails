import Head from 'next/head';
import Navigation from '../../components/Navigation';

export default function Events() {
  return (
    <div className="container">
      <Head>
        <title>NaturFreunde Lichtenwald - MTB Saisonauftakt 2024</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="main">
        <Navigation />
        <div>
          <h1>MTB Saisonauftakt 2024</h1>
          <p>
            Unser Mountainbike Saisonauftakt geht 2024 nach dem letztjährigen erfolgreichen und erlebnisreichen Debüt in die zweite Runde!<br/>
            Direkt bei unserem wunderschön gelegenen NaturFreundehaus wollen wir mit euch den Start in die Saison feiern.<br/><br/>
            Auf dieser Seite erfahrt ihr alle notwendigen Infos und wir werden sie stes aktualisieren.<b/>
            Bei Fragen kontaktiert uns gerne über <a className="actionLink" href="mailto:trails@naturfreunde-lichtenwald.de">trails@naturfreunde-lichtenwald.de</a>.
          </p>
          <p>
            
          </p>
          <p>
            Unsere Trails bieten für jeden den perfekten Einstieg in den
            Mountainbike-Sport, aber auch versierte Fahrer können bei uns
            definitv Spaß haben.<br/>
            Unsere Trails sind auch super für Kinder und Jugendliche geeignet. Selbst die ganz kleinen wurden schon mit Laufrädern gesichtet!
          </p>

          <h2>Alle Infos in Kürze</h2>
          <ul>
            <li>
              <a className="actionLink" href="#kaffee">
                Getränke, Gegrilltes, Kaffee & Kuchen
              </a>
            </li>
            <li>
              <a className="actionLink" href="#tours">
                Guided Tours
              </a>
            </li>
            <li>
              <a className="actionLink" href="#testbikes">
                Testbikes von Bikes and Boards - Esslingen
              </a>
            </li>
            <li>
              <a className="actionLink" href="#anfahrt">
                Location und Anfahrt
              </a>
            </li>
          </ul>

          <div>
            <img className="flyer" src="/saisonauftakt.jpg" alt="MTB Saisonauftakt 2024 Flyer" />
          </div>
          <div>
            <h3>
              <a id="kaffee" href="#kaffee">
              Getränke, Gegrilltes, Kaffee & Kuchen
              </a>
            </h3>
            <p>
              Wir bieten gekühlte Getränke, Kaffee und Kuchen.<br/>
              Des Weiteren werden wir ab mittags, anders als im Vorjahr, auch Gegrilltes aus unserer Grillhütte anbieten.<br/>
              Neben Rote, Bratwurst und Steaks wird es auch vegane Angebote geben.<br/>
              Wer darüberhinaus großen Hunger verspürt, dem können wir nur wärmstens eine Einkehr bei unserem Pächter Haug's Schurwaldbesen empfehlen. 
            </p>

            <h3>
              <a id="tours" href="#tours">
                Guided Tours
              </a>
            </h3>
            <p>
              Jeweils um 10:30 Uhr und 13:30 Uhr laden wir euch zu unseren gemeinsamen Hausrunde ein.<br/>
              Wir passen diese Ausfahrt gerne auf die Anzahl oder Könnensstufe der Teilnehmer an.<br/>
              Ziel ist es einmal all unsere Trails zu fahren und dann noch den Ebertrail unserer Freunde des RVI Büchenbronn zu besuchen.<br/>
              Wir rechnen mit ca. 500hm und 30km.<br/>
              Falls wir auch genug Kinder zusammen bekommen, werden wir auch speziell für die Kleinen eine Runde anbieten. Liebe Eltern, denkt an die Abschleppseile.
            </p>

            <h3>
              <a id="testbikes" href="#testbikes">
                Testbikes
              </a>
            </h3>
            <p>
              Als Highlight stellt unser Partner <a href="https://www.bikesnboards.de/info/esslingen" className="actionLink">Bikes and Boards - Esslingen</a> Testbikes
              verschiedener Marken zur Verfügung! Falls ihr Interesse habt,
              vergesst euren Ausweis nicht und bringt einen Helm mit.
            </p>

            <h3>
              <a id="anfahrt" href="#anfahrt">
                Location & Anfahrt
              </a>
            </h3>
            <p>
              Es gibt Parkplätze rund um unser Haus, aber natürlich empfehlen
              wir die Anfahrt mit dem Bike.<br/>
              Der nächste Bahnhof ist in Reichenbach und von dort braucht man ca. 20 Minuten mit dem Rad zu uns.
            </p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1564.8880375864974!2d9.479428531227304!3d48.72807910553409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4799bc0148ffd093%3A0x1bfc609f5d4b0dd0!2sNaturFreunde%20Lichtenwald%20(Schurwaldhaus)!5e0!3m2!1sde!2sde!4v1678475724857!5m2!1sde!2sde"
              width="600"
              height="450"
              style={{ border: 0, width: '100%' }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
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
