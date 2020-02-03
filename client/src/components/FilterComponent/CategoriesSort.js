import React from 'react';
import { getAllCategories } from '../../actions/categories'
import { getGamesByCategories } from '../../actions/games';
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
      selected: [],
      count: 0
    }
  }

  componentDidMount = async () => {
    if(!localStorage.getItem('categories')) {
      const { getAllCategories } = this.props;
      const Cats = await getAllCategories();
      localStorage.setItem('categories', JSON.stringify(Cats))
    } 

    
    
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

  handleClick = async (id) => {
      const { count } = this.state;
      const { getGamesByCategories } = this.props;
      const categories = JSON.parse(localStorage.getItem('categories'))
      console.log(id)
      const index = categories.findIndex(category => category.id === id )
      console.log(index)
      categories[index].checked = !categories[index].checked
      localStorage.setItem('categories', JSON.stringify(categories))
      this.setState({count: count+1})
      const checked = categories.filter(category => category.checked).map(category => category.id).join(',')
      localStorage.setItem('Cheked-categories', checked)
      await getGamesByCategories(checked);

  }

  isSeleceted = name => this.state.selected.indexOf(name) !== -1;
  

    render() {
      const categories = JSON.parse(localStorage.getItem('categories'));
      const { page, rowsPerPage } = this.state;

      
      
      const rows = []
      const allCategories = categories.map(category => {
        rows.push(category)
        const isItemSelected = this.isSeleceted(category)
        return (
          <TableRow>
              <TableCell >
            <FormGroup column>

              <FormControlLabel
                
                control ={
                  <Checkbox color="primary" checked={category.checked} value={category.id} onClick={this.handleClick.bind(this, category.id)} />
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
  getAllCategories: PropTypes.func.isRequired,
  getGamesByCategories: PropTypes.func.isRequired,
}

function mapStateToProps(state) {
  return {
      categories: state.categories,
      games: state.games
  }
}

const mapDispatchToProps = {getAllCategories, getGamesByCategories}

export default connect(mapStateToProps, mapDispatchToProps)(Category);
