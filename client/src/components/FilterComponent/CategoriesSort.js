import React from 'react';
import { getCategories } from '../../services/sessions'

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

class Category extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: []
    }
  }

  componentDidMount = async () => {
    const categories = await getCategories();
    this.setState({categories: categories})
    
  }

    render() {
      const { categories } = this.state;
      console.log(categories)
      const allCategories = categories.map(category => {
        return (
          <ListItem>
              
            <FormGroup column>
              <FormControlLabel
                control ={
                  <Checkbox color="primary" value={category.id} />
                }
                label={category.name}
                
                />
                
            </FormGroup>
            <ListItemIcon >
                  <PeopleIcon />
              </ListItemIcon>
          </ListItem>
        )
      })
        return(
            <List
            aria-labelledby="kategori-subheader"
        >
            <ListSubheader component="div" id="kategori-subheader">
                Kategori:
            </ListSubheader>
          {allCategories}
        </List>
        )
    }
}

export default Category;
