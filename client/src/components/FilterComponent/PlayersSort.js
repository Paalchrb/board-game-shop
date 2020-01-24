import React from 'react';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import PeopleIcon from '@material-ui/icons/People';

class Players extends React.Component {
    render() {
        return(
            <List
            aria-labelledby="players-subheader"
        >
            <ListSubheader component="div" id="players-subheader">
                Number Of Players
            </ListSubheader>
          <ListItem>
              
            <FormGroup column>
              <FormControlLabel
                control ={
                  <Checkbox color="primary" value="2" />
                }
                label="2"
                
                />
                
            </FormGroup>
            <ListItemIcon >
                  <PeopleIcon />
              </ListItemIcon>
          </ListItem>
          <ListItem>
              
            <FormGroup column>
              <FormControlLabel
                control ={
                  <Checkbox color="primary" value="2" />
                }
                label="4 - 6"
                
                />
                
            </FormGroup>
            <ListItemIcon >
                  <PeopleIcon />
              </ListItemIcon>
          </ListItem>
          <ListItem>
              
            <FormGroup column>
              <FormControlLabel
                control ={
                  <Checkbox color="primary" value="2" />
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

export default Players;
