import React from 'react';
import { getAllCategories, toggleCategoryCheck } from '../../actions/categories'
import { getGamesByCategories, getAllGames } from '../../actions/games';
import { setLoader, stopLoader } from '../../actions/loading';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Typography } from '@material-ui/core';

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
    const { toggleCategoryCheck, getGamesByCategories, history } = this.props;
    const checkedId = await toggleCategoryCheck(id);

    const chosenCats = JSON.parse(localStorage.getItem('checked-cats')) || [];
    const index = chosenCats.indexOf(id);
    if(index !== -1) {
      chosenCats.splice(index, 1);
    } else {
      chosenCats.push(checkedId);
    }

    await getGamesByCategories(chosenCats.join(','));
    localStorage.setItem('checked-cats', JSON.stringify(chosenCats))
    history.push('/overview')
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
      <List className="table-container">
        <Typography id="kategori-subheader">Sort by category:</Typography>
        {allCategories}
      </List>
    )
  }
}

Category.propTypes = {
  categories: PropTypes.object.isRequired,
  getAllCategories: PropTypes.func.isRequired,
  getGamesByCategories: PropTypes.func.isRequired,
  getAllGames: PropTypes.func.isRequired,
  setLoader: PropTypes.func.isRequired,
  stopLoader: PropTypes.func.isRequired,
  toggleCategoryCheck: PropTypes.func.isRequired,
}

function mapStateToProps(state) {
  return {
      categories: state.categories,
      games: state.games,
      loading: state.loading.isLoading
  }
}

const mapDispatchToProps = {getAllCategories, toggleCategoryCheck, getGamesByCategories, getAllGames, setLoader, stopLoader}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Category));
