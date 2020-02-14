import React, { Fragment } from 'react'
import Players from './FilterComponent/PlayersSort'
import Category from './FilterComponent/CategoriesSort'
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography'

class Sortlist extends React.Component {
    render() {
        return(
            <Fragment>
                    <Typography align="center" gutterBottom color="textPrimary" variant='overline' component="h3">Filter:</Typography>
                <Divider />
                    <Players />
                <Divider />
                    <Category />
        
        </Fragment>
        )
    }
}

export default Sortlist;