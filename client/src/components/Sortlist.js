import React, { Fragment } from 'react'
import Players from './FilterComponent/PlayersSort'
import Category from './FilterComponent/CategoriesSort'
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography'

class Sortlist extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <Fragment>
                    <Typography align="center" gutterBottom color="textPrimary" variant='overline' component="h3">Sorter:</Typography>
                <Divider />
                    <Players />
                <Divider />
                    <Category />
        
        </Fragment>
        )
    }
}

export default Sortlist;