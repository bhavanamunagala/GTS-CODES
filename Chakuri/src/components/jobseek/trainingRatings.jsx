import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

export default function SimpleRating() {
  const [value, setValue] = React.useState(2);

  return (
    <div class="mt-xl-1 offset-1">
      <Box component="fieldset" mb={3} borderColor="transparent">
        <label component="legend">Please rate the trainer:</label>
        <Rating style={{paddingTop: "-3px"}}
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        /><br/>
         <label >Provide Feedback (optional):</label><br/>
                    <textarea rows="3" cols="120"  placeholder="Max 1500words."></textarea>
      </Box>
      
    </div>
  );
}
