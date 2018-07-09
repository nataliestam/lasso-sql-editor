import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  body: {
    width: '30%',
    flexDirection: 'column',
    display: 'flex',
  },
  inputContainers: {
    margin: '10px',
  },
  headers: {
    margin: '0px',
  },
  nameInput: {
    width: '100%',
    border: '1px solid #DBDBDB',
    boxShadow: 'none', // remove defaults
    fontSize: '16px',
  },
  descInput: {
    width: '100%',
    height: '150px',
    border: '1px solid #DBDBDB',
    resize: 'none', // remove defaults
    outline: 'none', // remove defaults
    fontSize: '16px',
  },
  saveButton: {
    background: '#5cb85c',
    border: 'none',
    borderRadius: '2px',
    height: '40px',
    width: '75px',
    marginLeft: 'auto',
    marginRight: '10px',
    fontSize: '18px',
    color: 'white',
  },
};

class QueryDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      description: this.props.description,
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleDescChange = this.handleDescChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.setState({
        title: this.props.title,
        description: this.props.description,
      });
    }
  }

  handleNameChange(e) {
    this.setState({
      title: e.target.value,
    });
  }

  handleDescChange(e) {
    this.setState({
      description: e.target.value,
    });
  }

  handleSave() {
    this.props.handleSubmit(this.state.title, this.state.description);
  }

  render() {
    return (
      <div style={styles.body}>
        <div style={styles.inputContainers}>
          <h3 style={styles.headers}>
            Name:
          </h3>
          <input
            style={styles.nameInput}
            type="text"
            value={this.state.title}
            onChange={this.handleNameChange}
          />
        </div>
        <div style={styles.inputContainers}>
          <h3 style={styles.headers}>
            Description:
          </h3>
          <textarea
            style={styles.descInput}
            type="text"
            value={this.state.description}
            onChange={this.handleDescChange}
          />
        </div>
        <button
          style={styles.saveButton}
          onClick={this.handleSave}
        >
          Save
        </button>
      </div>
    );
  }
}

QueryDetails.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default QueryDetails;
