import React from 'react';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Chip from '@material-ui/core/Chip';
import '../styles/search.scss';

export default function MultipleSelect(props) {
  const [typeName, setTypeName] = React.useState([]);

  function handleChange(event) {
    setTypeName(event.target.value);
    props.selectFilter(event.target.value);
  }

  return (
    <div className="selectFilter">
      <FormControl className="selectFilter__formControl">
        <InputLabel htmlFor="select-multiple-chip">Type</InputLabel>
        <Select
          multiple
          value={typeName}
          onChange={handleChange}
          input={<Input id="select-multiple-chip" />}
          renderValue={selected => (
            <div className="selectFilter__chips">
              {selected.map(value => (
                <Chip key={value} label={value} className="selectFilter__chip" />
              ))}
            </div>
          )}
        >
          {props.productsTypes.map(name => (
            <MenuItem key={name} value={name} >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
