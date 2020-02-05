import React from 'react';
import { getAllCategories, toggleCategoryCheck } from '../../actions/categories'
import { getGamesByCategories, getAllGames } from '../../actions/games';
import { setLoader, stopLoader } from '../../actions/loading';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { TableRow, TableCell, TableBody, TableContainer, TableFooter } from '@material-ui/core';
import { FormControl, InputLabel, MenuItem, Select} from '@material-ui/core'
import { ArrowBackIos, ArrowForwardIos  } from '@material-ui/icons';

class Category extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 0,
      rowsPerPage: 5,
      selected: [],
    }
  }

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

  handleClick = async id =>{
    const { toggleCategoryCheck, getGamesByCategories } = this.props;
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
    }
  
    render() {
      const { page, rowsPerPage } = this.state;
      const categories = this.props.categories.categories || JSON.parse(localStorage.getItem('categories')) || [];
      
      const rows = []
      const allCategories = categories.map(category => {
        rows.push(category)
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
        <TableCell className="table-arrows">
          <button onClick={this.handleChangePage.bind(this, -1)}><ArrowBackIos /></button>
          <button onClick={this.handleChangePage.bind(this, 1)}><ArrowForwardIos /></button>
        </TableCell>
      
      </TableFooter>
      </TableContainer>
        )}
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

export default connect(mapStateToProps, mapDispatchToProps)(Category);
