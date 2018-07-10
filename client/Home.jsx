import React from 'react';
import axios from 'axios';

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
        <table>
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
                  <td>{query.title}</td>
                  <td>{query.description}</td>
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
