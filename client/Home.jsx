import React from 'react';
import axios from 'axios';

const styles = {
  table: {
    fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
    fontSize: '14px',
    margin: '25px',
  },
  row: {
    borderTop: '1px solid #ddd',
    textAlign: 'left',
    padding: '5px',
  },
};

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      queries: [],
    };
  }

  componentDidMount() {
    this.getQueries();
  }

  getQueries() {
    axios.get('/home/all')
      .then((response) => {
        this.setState({
          queries: response.data,
        });
      }).catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <table style={styles.table}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.queries.map(query => (
                <tr key={query._id}>
                  <td style={styles.row} >{query.title}</td>
                  <td style={styles.row} >{query.description}</td>
                </tr>
            ))
          }
          </tbody>
        </table>
      </div>
    );
  }
}

export default Home;
