import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import '../styles/search.scss';

const useStyles = makeStyles(theme => ({
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 800,
  },
}));

const SearchBar = props => (
  <div className="searchBar">
    <TextField
      id="standard-search"
      label="Search"
      type="search"
      className={useStyles.textField}
      margin="normal"
      fullWidth
      onChange={e => props.searchText(e.target.value)}
    />
  </div>
)

export default SearchBar;
