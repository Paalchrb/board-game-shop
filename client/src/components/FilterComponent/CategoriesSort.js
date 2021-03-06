import React, { Fragment } from 'react';
import { getAllCategories, toggleCategoryCheck, setPage } from '../../actions/categories'
import { getGamesByFilter } from '../../actions/games';
import { setLoader, stopLoader } from '../../actions/loading';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import { Typography}  from '@material-ui/core';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

class Category extends React.Component {
  componentDidMount = async () => {
    const { 
      getAllCategories, 
      setLoader, 
      stopLoader, 
      toggleCategoryCheck 
    } = this.props;

    setLoader();
    const Cats = await getAllCategories();
    const checkedCats = JSON.parse(localStorage.getItem('checked-cats')) || [];
    if (checkedCats.length) {
      checkedCats.forEach(catId => toggleCategoryCheck(catId));
    }
    stopLoader();
    localStorage.setItem('categories', JSON.stringify(Cats))
  }

  handleScrollTopClick () {
    return window.scrollTo({
        top: 0,
        behavior: 'smooth',
        block: 'center'
    });
  }


  handleClick = async id =>{
    const { toggleCategoryCheck, getGamesByFilter, setPage, history, categories: { players }, searchText } = this.props;
    const checkedId = await toggleCategoryCheck(id);

    const chosenCats = JSON.parse(localStorage.getItem('checked-cats')) || [];
    const index = chosenCats.indexOf(id);
    if(index !== -1) {
      chosenCats.splice(index, 1);
    } else {
      chosenCats.push(checkedId);
    }
    await setPage(0);
    await getGamesByFilter(chosenCats.join(','), searchText, players[0], players[1], 0);
    localStorage.setItem('checked-cats', JSON.stringify(chosenCats))
    if(history.location.pathname !== '/overview') {
      history.push('/overview');
    }
  }
  
  render() {
    const categories = this.props.categories.categories || JSON.parse(localStorage.getItem('categories')) || [];
    
  
    const allCategories = categories.map((category, index) => (
      <ListItem 
        key={index} 
        role={undefined} 
        dense 
        button 
        onClick={this.handleClick.bind(this, category.id)}
      >
        <ListItemIcon>
          <Checkbox 
            className="checkbox"
            checked={category.checked} 
            value={category.id} 
          />
        </ListItemIcon>
        <ListItemText primary={category.name} />
      </ListItem>
    ));

    return (
      <Fragment>
        <Typography className='players-heading' variant='body1'>
          Choose categories:
        </Typography>
        <List className="table-container">
          {allCategories}
        </List>
      </Fragment>
    )
  }
}

Category.propTypes = {
  categories: PropTypes.object.isRequired,
  searchText: PropTypes.string.isRequired,
  getAllCategories: PropTypes.func.isRequired,
  getGamesByFilter: PropTypes.func.isRequired,
  setLoader: PropTypes.func.isRequired,
  stopLoader: PropTypes.func.isRequired,
  toggleCategoryCheck: PropTypes.func.isRequired,
  setPage: PropTypes.func.isRequired,
}

function mapStateToProps(state) {
  return {
      categories: state.categories,
      games: state.games,
      loading: state.loading.isLoading,
      searchText: state.search.searchText
  }
}

const mapDispatchToProps = {getAllCategories, toggleCategoryCheck, getGamesByFilter, setPage, setLoader, stopLoader}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Category));
