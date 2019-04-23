import React, { Component } from 'react';
import './main.scss';
import rasch from './rasch.png';
import destiny from './destiny.png';
import elbersdrucke from './elbersdrucke.png';
import bb from './bb-home-passion.jpg';

class HomePartners extends Component {
  render() {
    const rashImage = { backgroundImage: `url(${rasch})` }
    const destinyImage = { backgroundImage: `url(${destiny})` }
    const elbersdruckeImage = { backgroundImage: `url(${elbersdrucke})` }
    const bbImage = { backgroundImage: `url(${bb})` }

    return (
      <section className="hl-partnerships">
          <div className="container">
            <header className="hl-section-header">
              <h3 className="hl-title">Parceiros</h3>
              <h4 className="hl-subtitle">Estamos bem acompanhados</h4>
            </header>
            
            <div className="hl-partner-wrapper">
              <a className="hl-partner" target="_blank" style={rashImage} href="https://walldesigner.rasch.de/gallery.do"></a>
              <a className="hl-partner" target="_blank" style={destinyImage} href="http://www.destinyanddesign.com/productos.php"></a>
              <a className="hl-partner" target="_blank" style={bbImage} href="http://www.bbhomepassion.de/en/collections/"></a>
              <a className="hl-partner" target="_blank" style={elbersdruckeImage} href="http://www.elbersdrucke.de/homevision.php"></a>
              {/* <a className="hl-partner" target="_blank" style={rashImage} href="http://fotoservr.com/site-rasch/?lang=en">elbersdrucke</a>
              <a className="hl-partner" target="_blank" style={rashImage} href="http://www.deco3d.com/destinydesign/">Destiny & Design</a>
              <a className="hl-partner" target="_blank" style={rashImage} href="http://barbara-becker.com/rasch">elbersdrucke</a>
              <a className="hl-partner" target="_blank" style={rashImage} href="http://www.elbersdrucke.de/homevision.php">elbersdrucke</a> */}
            </div>
          </div>
      </section>
    );
  }
}

export default HomePartners;