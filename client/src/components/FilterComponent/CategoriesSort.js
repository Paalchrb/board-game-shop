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
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { Typography, TableRow, TableCell, Table, TableBody, TablePagination, TableContainer, TableFooter } from '@material-ui/core';
import { FormControl, InputLabel, MenuItem, FormHelperText, Select} from '@material-ui/core'
import { ArrowBackIos, ArrowForwardIos  } from '@material-ui/icons';

class Category extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 0,
      rowsPerPage: 5,
    }
  }

  componentDidMount = async () => {
    const { getAllCategories } = this.props;
    await getAllCategories();
    
  }
  handleScrollTopClick () {
    return window.scrollTo({
        top: 0,
        behavior: 'smooth',
        block: 'center'
    })
}

handleChangePage = (value, event) => {
  event.preventDefault()
  const { page } = this.state;
  const newState = page+value;
  if(newState < 0) {
    this.setState({page: 0})
  } else {
    this.setState({page: page+value})
  }
  
}
  
  handleChangeRowsPerPage = event => {
    this.setState({rowsPerPage: event.target.value, page: 0})
    this.handleScrollTopClick();
  }


  

    render() {
      const { categories } = this.props.categories;
      const { page, rowsPerPage } = this.state;

      
      
      const rows = []
      const allCategories = categories.map(category => {
        rows.push(category)
        return (
          <TableRow>
              <TableCell>
            <FormGroup column>

              <FormControlLabel
                control ={
                  <Checkbox color="primary" value={category.id} />
                }
                label={category.name}
                
                />
                
            </FormGroup>
            </TableCell>
          </TableRow>
        )
      })
      .slice(page*rowsPerPage, page*rowsPerPage+rowsPerPage)
        return(
          <TableContainer className="table-container">
            <TableBody
            aria-labelledby="kategori-subheader"
        >
            <div component="div" id="kategori-subheader">
                <TextField id="outlined-basic" margin='dense' label="Kategori:" variant="outlined" />
            </div>
            
          {allCategories}
        </TableBody>

      <TableFooter id="table-footer">
      <InputLabel shrink id="demo-simple-select-placeholder-label-label label">
          Rows pr. Page:
        </InputLabel>
        <FormControl id="table-select">
        
        <Select
          labelId="demo-simple-select-placeholder-label-label"
          id="demo-simple-select-placeholder-label table-select"
          value={rowsPerPage}
          onChange={this.handleChangeRowsPerPage.bind(this)}
          displayEmpty
        >
          
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={15}>15</MenuItem>
          <MenuItem value={-1}>
            <em>All</em>
          </MenuItem>
        </Select>
        </FormControl>
        <div className="table-arrows">
          <button onClick={this.handleChangePage.bind(this, -1)}><ArrowBackIos /></button>
          <button onClick={this.handleChangePage.bind(this, 1)}><ArrowForwardIos /></button>
        </div>
      
      </TableFooter>
      </TableContainer>
        )}
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
