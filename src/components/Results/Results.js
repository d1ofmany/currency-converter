import React, { Component } from 'react';
import { Grid, Paper, Table, TableHead, TableBody, TableRow, TableCell } from 'material-ui';

class Results extends Component {
  render() {
    const { results } = this.props;
    const resultsItems = results.data.map((result, i) => <TableRow key={i}><TableCell>{result.from}</TableCell><TableCell>{result.to}</TableCell></TableRow>);

    return (
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <Paper>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>From</TableCell>
                  <TableCell>To</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {resultsItems}
              </TableBody>
            </Table>
          </Paper>    
        </Grid>
      </Grid>
    );
  }
}

export default Results;
