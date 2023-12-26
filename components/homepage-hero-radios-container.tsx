"use client";

import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Button } from "@mui/material";

export default function HomepageHeroRadiosContainer() {
  const [value, setValue] = React.useState("location1");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  return (
    <form>
      <FormControl>
        <FormLabel id="location-radio-buttons-group">Location</FormLabel>
        <RadioGroup
          aria-labelledby="location-radio-buttons-group"
          name="location-radio-buttons-group"
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel
            value="location1"
            control={<Radio />}
            label="Location1"
          />
          <FormControlLabel
            value="location2"
            control={<Radio />}
            label="Location2"
          />
          <FormControlLabel
            value="location3"
            control={<Radio />}
            label="Location3"
          />
          <FormControlLabel
            value="location4"
            control={<Radio />}
            label="Location4"
          />
        </RadioGroup>
        <Button sx={{ mt: 1, mr: 1 }} type="submit" variant="outlined">
          Submit
        </Button>
      </FormControl>
    </form>
  );
}
