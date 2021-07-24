/* eslint-disable react/display-name */
import React from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import MaterialCheckbox from "@material-ui/core/Checkbox";
import PropTypes from "prop-types";

const Checkbox = React.forwardRef(
  ({ option, onChange, checked, name }, ref) => {
    return (
      <div ref={ref}>
        <FormControlLabel
          control={
            <MaterialCheckbox
              onChange={onChange}
              color="primary"
              name={name}
              checked={checked}
            />
          }
          label={option}
          value={option}
        />
      </div>
    );
  }
);

Checkbox.propTypes = {
  option: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  checked: PropTypes.bool
};
export default Checkbox;
