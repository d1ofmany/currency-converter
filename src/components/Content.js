import React, { Component } from 'react';
import { Grid, withStyles } from 'material-ui';

import Converter from './Converter';
import Results from './Results';

const styles = theme => ({
    mainContent: {
        paddingTop: '100px'
    }
});

class Content extends Component {

    render() {
        const { classes } = this.props;

        return (
            <Grid container spacing={40} justify="center" className={classes.mainContent}>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Converter />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Results />
                </Grid>
            </Grid>
        );
    }

}
export default withStyles(styles)(Content);
