import React, { Fragment, useEffect } from 'react';
import { getGamesByCategories } from '../../actions/games';
import { setPlayerRange } from '../../actions/categories';
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
  getGamesByCategories,
  history,
  categories: {
    players
  }
}) => {
  const classes = useStyles();
  const chosenCats = JSON.parse(localStorage.getItem('checked-cats')) || [];
  const [value, setValue] = React.useState([players[0], players[1]]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleSubmit = () => {
    setPlayerRange(value);
    getGamesByCategories(chosenCats.join(','), players[0], players[1]);
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
  loading: PropTypes.bool.isRequired,
  getGamesByCategories: PropTypes.func.isRequired,
  setPlayerRange: PropTypes.func.isRequired,
}

const mapStateToProps = state => {
  return {
    categories: state.categories,
  }
}

const mapDispatchToProps = {
  setPlayerRange,
  getGamesByCategories
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Players));
