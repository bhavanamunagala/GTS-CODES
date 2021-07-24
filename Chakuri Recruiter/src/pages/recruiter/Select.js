import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import MaterialSelect from "@material-ui/core/Select";
import Checkbox from "./Checkbox";


const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 140
  },
  label: {
    fontSize: 13
  }
}));

const Select = ({ type, name, options, handleSelect, reset }) => {
  const [types, setTypes] = useState({ [type]: [] });
  const [check, setCheck] = useState({});
  const classes = useStyles();

  useEffect(() => {
    setDefaultSelect(options, setCheck);
  }, []);

  // get array of checked filters in Select
  useEffect(() => {
    handleSelect(types);
  }, [types]);

  // set checked to false by clicking Reset button
  useEffect(() => {
    setDefaultSelect(options, setCheck);
  }, [reset]);

  const handleChange = (e) => {
    const { name: checkName, value, checked } = e.target;

    // checked
    setCheck({ ...check, [checkName]: checked });

    // manage types status for filter
    if (checked) {
      setTypes({ [type]: [...types[type], value] });
    } else {
      setTypes({ [type]: types[type].filter((id) => id !== value) });
    }
  };

  function setDefaultSelect(arr, callback) {
    const obj = {};
    arr.forEach((item) => {
      obj[item] = false;
    });
    callback(obj);
  }

  return (
    <>
      <FormControl className={classes.formControl}>
        <InputLabel id="select-label" className={classes.label}>
          {name}
        </InputLabel>
        <MaterialSelect labelId="select-label" id="input-select">
          {options.map((option) => {
            return (
              <Checkbox
                option={option}
                key={option}
                onChange={handleChange}
                checked={check[option]}
                name={option}
              />
            );
          })}
        </MaterialSelect>
      </FormControl>
    </>
  );
};

Select.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleSelect: PropTypes.func.isRequired,
  reset: PropTypes.bool.isRequired
};

export default Select;
