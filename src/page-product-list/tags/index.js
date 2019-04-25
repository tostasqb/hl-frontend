import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import './main.scss';
import axios from 'axios';

import Loading from '../../common/loading';

class ProductTags extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      error: null,
      isLoaded: false,
      json: []
    };
  }

  handleChange(e) {
    this.props.onTagChange(e);
  }

  componentDidMount() {
    let endpoint = process.env.REACT_APP_API_URL + 'tags';

    axios.get(endpoint)
      .then(res => {
        this.setState({ 
          isLoaded: true, 
          json: res.data
        })
      }).catch(error => {
        this.setState({ 
          isLoaded: true, 
          error
        })
      });
  }

  renderTagGroup(group) {
    let tags = this.state.json.tags.filter(tag => tag.tag_group_id == group.id);
    
    return(
      <div key={`group-${group.id}`}>
        <div className="hl-title">{group.name}</div>

        <ul className="hl-tag-list">
          {tags.map(tag => (
            this.renderTag(tag)
          ))}
        </ul>
      </div>
    )
  }

  renderTag(tag) {
    return(
      <li className="hl-tag-item" key={`tag-${tag.id}`}>
        <label className="hl-label">
          <input type="checkbox" 
                 name={tag.name} 
                 className="hl-tag-checkbox"
                 checked={this.state[tag.name]}
                 onChange={this.handleChange} />
          <span className="checkmark"></span>
          {tag.name}
        </label>
      </li>
    )
  }

  render() {
    const { error, isLoaded, json } = this.state;

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <Loading />
    } else {
      return (
        <div className="hl-tags">
          {json.tag_groups.map(group => (
            this.renderTagGroup(group)
          ))}
        </div>
      );
    }
  }
}

export default ProductTags;
