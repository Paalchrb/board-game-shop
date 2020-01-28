import React from 'react';
import { getAllCategories } from '../../actions/categories'

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
import { connect } from 'react-redux'
import PropTypes from 'prop-types';

class Category extends React.Component {
  

  componentDidMount = async () => {
    const { getAllCategories } = this.props;
    await getAllCategories();
    
  }

    render() {
      const { categories } = this.props.categories;
      const allCategories = categories.map((category, index) => {
        return (
          <ListItem key={index}>
              
            <FormGroup column>
              <FormControlLabel
                control ={
                  <Checkbox color="primary" value={category.id} />
                }
                label={category.name}
                
                />
                
            </FormGroup>
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

Category.propTypes = {
  categories: PropTypes.object.isRequired,
  getAllCategories: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
      categories: state.categories,
  }
}

const mapDispatchToProps = {getAllCategories}

export default connect(mapStateToProps, mapDispatchToProps)(Category);
