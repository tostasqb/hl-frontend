import React, { Component } from 'react';
import './main.scss';
import rasch from './rasch.png';
import destiny from './destiny.png';
import elbersdrucke from './elbersdrucke.png';
import bb from './bb-home-passion.jpg';
import komar from './komar.png';
import youngArtists from './young-artists.jpg';

class HomePartners extends Component {
  render() {
    return (
      <section className="hl-partnerships">
          <div className="container">
            <header className="hl-section-header">
              <h3 className="hl-title">Parceiros</h3>
              <h4 className="hl-subtitle">Estamos bem acompanhados</h4>
            </header>

            <div className="hl-partner-wrapper">
              <a className="hl-partner-link" target="_blank" rel="noopener noreferrer" href="https://walldesigner.rasch.de/gallery.do"><img src={rasch} alt={rasch} /></a>
              <a className="hl-partner-link" target="_blank" rel="noopener noreferrer" href="https://www.destinydecor.es"><img src={destiny} alt={destiny} /></a>
              <a className="hl-partner-link" target="_blank" rel="noopener noreferrer" href="http://www.bbhomepassion.de/en/collections/"><img src={bb} alt={bb} /></a>
              <a className="hl-partner-link" target="_blank" rel="noopener noreferrer" href="http://www.elbersdrucke.de/homevision.php"><img src={elbersdrucke} alt={elbersdrucke} /></a>
              <a className="hl-partner-link" target="_blank" rel="noopener noreferrer" href="https://www.komar.de/"><img src={komar} alt={komar} /></a>
              <a className="hl-partner-link" target="_blank" rel="noopener noreferrer" href="https://youngartists.rasch.de/ "><img src={youngArtists} alt={youngArtists} /></a>
            </div>
          </div>
      </section>
    );
  }
}

export default HomePartners;
