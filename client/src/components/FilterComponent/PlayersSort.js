import React from 'react';
import List from '@material-ui/core/List';
import { getGamesByCategories} from '../../actions/games';
import { setLoader, stopLoader} from '../../actions/loading';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import PeopleIcon from '@material-ui/icons/People';

class Players extends React.Component {

  async handlePlayerFilter (event) {
    const { getGamesByCategories } = this.props;
    if(event.target.checked) {
      await getGamesByCategories('', event.target.value, event.target.value+1)
    } else {
      await getGamesByCategories('', 0)
    } 
    
  }
  
    render() {
        return(
            <List
            aria-labelledby="players-subheader"
        >
            <ListSubheader component="div" id="players-subheader">
                Number Of Players
            </ListSubheader>
          <ListItem>
              
            <FormGroup>
              <FormControlLabel
                control ={
                  <Checkbox color="primary" value={2} onClick={this.handlePlayerFilter.bind(this)} />
                }
                label="2"
                
                />
                
            </FormGroup>
            <ListItemIcon >
                  <PeopleIcon />
              </ListItemIcon>
          </ListItem>
          <ListItem>
              
            <FormGroup>
              <FormControlLabel
                control ={
                  <Checkbox color="primary" value={4}  onClick={this.handlePlayerFilter.bind(this)}/>
                }
                label="4 - 6"
                
                />
                
            </FormGroup>
            <ListItemIcon >
                  <PeopleIcon />
              </ListItemIcon>
          </ListItem>
          <ListItem>
              
            <FormGroup>
              <FormControlLabel
                control ={
                  <Checkbox color="primary" value="6" />
                }
                label="6+"
                
                />
                
            </FormGroup>
            <ListItemIcon >
                  <PeopleIcon />
              </ListItemIcon>
          </ListItem>
        </List>
        )
    }
}

Players.propTypes = {
  categories: PropTypes.object.isRequired,
  getGamesByCategories: PropTypes.func.isRequired,
  setLoader: PropTypes.func.isRequired,
  stopLoader: PropTypes.func.isRequired,
}

function mapStateToProps(state) {
  return {
      categories: state.categories,
      games: state.games,
      loading: state.loading.isLoading
  }
}

const mapDispatchToProps = {getGamesByCategories, setLoader, stopLoader}

export default connect(mapStateToProps, mapDispatchToProps)(Players);
