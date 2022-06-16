import { Typography } from '@material-ui/core';
import { Component } from 'react';

class Notes extends Component {
  render() {
    return (
      <div className=''>
        {/* <Typography variant="h3" className="Title">
          Testergebnis
        </Typography> */}

        <div className='Fullwidth'>
          <Typography variant='h5' className='Subtitle'>
            Anmerkung
          </Typography>

          <Typography variant='body1' gutterBottom component='div'>
            Dieser Notenrechner ist ein unverbindliches Werkzeug. Tatsächliche
            Benotungen können abweichen. Alle Angaben sind ohne Gewähr. Noten
            für Tests und Klassenarbeiten werden nach den Schlüsseln festgelegt,
            die in den entsprechenden Fachkonferenzen beschlossen wurden. Der
            Schlüssel für die Sekundarstufe II beruht auf den
            Bewertungskriterien für Klausuren im Zentralabitur NRW.
          </Typography>
        </div>
      </div>
    );
  }
}

export default Notes;
