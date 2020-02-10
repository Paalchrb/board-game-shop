import React, { Fragment } from 'react';
import { getGamesByFilter } from '../../actions/games';
import { setPlayerRange, setPage } from '../../actions/categories';
import Slider from '@material-ui/core/Slider';
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import PeopleIcon from '@material-ui/icons/People';
import { Typography } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { withRouter } from 'react-router-dom';

const muiTheme = createMuiTheme({
  overrides:{
    MuiSlider: {
      thumb:{
      color: "rgb(142, 61, 81)",
      },
      track: {
        color: 'rgb(80, 19, 0)'
      },
    }
  }
});

const useStyles = makeStyles({
  root: {
    width: 250,
    padding: '1rem',
    marginTop: '2rem',
    marginLeft: '1.4rem',
    color: 'red'
  },
});

const Players = ({
  setPlayerRange,
  getGamesByFilter,
  history,
  searchText,
  categories: {
    players
  },
  setPage
}) => {
  const classes = useStyles();
  const chosenCats = JSON.parse(localStorage.getItem('checked-cats')) || [];
  const [value, setValue] = React.useState([players[0], players[1]]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleSubmit = () => {
    setPlayerRange(value);
    setPage(0);
    getGamesByFilter(chosenCats.join(','), searchText, value[0], value[1], 0);
    if(history.location.pathname !== '/overview') {
      history.push('/overview');
    }
  }
  
  return(
    <Fragment> 
      <Typography className='players-heading' variant='body1'>
        <PeopleIcon />   Choose player range:
      </Typography>
      <div className={classes.root}>
        <ThemeProvider theme={muiTheme}>
          <Slider
            min={1}
            max={20}
            step={1}
            value={value}
            onChange={handleChange}
            onMouseUp={handleSubmit}
            valueLabelDisplay="on"
            aria-labelledby="discrete-slider-always"
          />
        </ThemeProvider>
      </div>
    </Fragment>
  );
}

Players.propTypes = {
  categories: PropTypes.object.isRequired,
  searchText: PropTypes.string.isRequired,
  getGamesByFilter: PropTypes.func.isRequired,
  setPlayerRange: PropTypes.func.isRequired,
  setPage: PropTypes.func.isRequired,
}

const mapStateToProps = state => {
  return {
    categories: state.categories,
    searchText: state.search.searchText,
  }
}

const mapDispatchToProps = {
  setPlayerRange,
  getGamesByFilter,
  setPage
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Players));
