import React, { Component } from 'react';
import { Grid, Button, TextField, FormControl, InputLabel, Select, MenuItem, Paper, Typography } from 'material-ui';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
  formControl: {
    width: '100%'
  },
  resultBox: {
    paddingTop: 20,
    paddingBottom: 20
  }
});

export class Converter extends Component {
  constructor (props) {
    super(props);
    
    this.state = {
      result: null,
      amount: '',
      from: '',
      to: '',
    };
  }
  

  componentWillMount() {
    this.props.getRates();
  }

  handleChange = name => event => this.setState({
    [name]: event.target.value
  });

  handleBlur = event => {
    if (this.state.amount !== '') {
      let amount = parseFloat(this.state.amount);
      amount = isNaN(amount) ? 0 : amount;
      this.setState({ amount: amount.toFixed(2) });
    }
  }

  handleConvert = () => {
    if (this.state.amount && this.state.from && this.state.to) {
      const result = (this.props.rates[this.state.from][this.state.to] * this.state.amount).toFixed(2);
      this.setState({ result: result + ' ' + this.state.to });
      this.props.setResult({ from: this.state.amount + ' ' + this.state.from, to: result + ' ' + this.state.to });
    }
  };

  render() {
    const { classes, rates } = this.props;

    const MenuItems = rates ? Object.keys(rates).map((item) => <MenuItem key={item} value={item}>{item}</MenuItem>) : null;

    return (
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <Paper className={classes.resultBox}>
            <Typography type="display1" component="p" align="center">
              {this.state.result ? this.state.result : '0.00'}
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <FormControl className={classes.formControl}>
            <TextField
              id="amount"
              label="Amount"
              margin="normal"
              value={this.state.amount}
              onChange={this.handleChange('amount')}
              onBlur={this.handleBlur} />
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="from-simple">From</InputLabel>
              <Select
                id="from-select"
                value={this.state.from}
                onChange={this.handleChange('from')}>
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {MenuItems}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="to-simple">To</InputLabel>
            <Select
              id="to-select"
              value={this.state.to}
              onChange={this.handleChange('to')}>
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {MenuItems}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Button raised color="primary" onClick={this.handleConvert}>Convert</Button>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Converter);
