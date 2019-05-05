import React, { Component } from 'react';
import MetaTags from 'react-meta-tags';
import img_main from '../../page-home/hero/homepage.jpg';

export default class DefaultMetatags extends Component {
  render() {
    let title = 'High Line | Home Decoration';

    return (
      <MetaTags>
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta property="og:image" content={img_main} />
      </MetaTags>
    )
  }
}
