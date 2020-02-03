import React, { useEffect } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getGamesByCategories} from '../actions/games';
import { getAllCategories } from '../actions/categories';



const test = ({
  categories: { 
    categories 
  },
  games: { 
    games 
  },
  getGamesByCategories,
  getAllCategories
}) => {
  useEffect(() => {
    (async function() {
      await getGamesByCategories();
      await getAllCategories();
    })();
  });

  if(categories.length && games.length) {

  }


  return (
    <div>
      <p>hello</p>
    </div>
  )
}

test.propTypes = {
  games: PropTypes.object.isRequired,
  categories: PropTypes.object.isRequired,
  getAllCategories: PropTypes.func.isRequired,
  getGamesByCategories: PropTypes.func.isRequired,
}

const mapDispatchToProps = {
  getAllCategories,
  getGamesByCategories
}

const mapStateToProps = state => ({
  games: state.games,
  categories: state.categories
});

export default connect(mapStateToProps, mapDispatchToProps)(test);
