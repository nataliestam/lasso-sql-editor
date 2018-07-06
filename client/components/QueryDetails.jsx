import React from 'react';
import PropTypes from 'prop-types';

class QueryDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleDescChange = this.handleDescChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  handleNameChange(e) {
    this.setState({
      name: e.target.value,
    });
  }

  handleDescChange(e) {
    this.setState({
      description: e.target.value,
    });
  }

  handleSave() {
    this.props.handleSubmit(this.state.name, this.state.description);
  }

  render() {
    return (
      <div id="query-details">
        Name: <input
          type="text"
          value={this.state.name}
          onChange={this.handleNameChange}
        />
        Description: <input
          type="text"
          value={this.state.description}
          onChange={this.handleDescChange}
        />
        <button onClick={this.handleSave}>Save</button>
      </div>
    );
  }
}

QueryDetails.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default QueryDetails;
