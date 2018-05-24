import React, { Component } from 'react';

// Importing React Table (datagrid for tables) and it's stylesheet
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import axios from 'axios';

// Importing css
import './AllRecipes.css';

class AllRecipes extends Component {

  constructor(props) {
    super(props)
    this.state = {
      drinks: []
    }
  }

  componentDidMount() {
    axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail')
    .then(result => {
      console.log(result);
      this.setState({
        drinks: result.data.drinks
      })
    })
    .catch(error => {
      console.log(error);
    })
  }
  render() {
    const columns = [{
      Header: 'Id',
      accessor: 'idDrink',
    }, {
      Header: 'Name',
      accessor: 'strDrink' // String-based value accessors!
    }];
    return (
      <ReactTable
        defaultPageSize={10}
        filterable
        data={this.state.drinks}
        columns={columns}
      />
    )
  }
}

export default AllRecipes;
