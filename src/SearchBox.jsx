import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";
import { useState } from "react";

export default function SearchBox() {
  let [city, setCity] = useState("");

  let handleChange = (evt) => {
    setCity(evt.target.value);
  };

  return (
    <div className="SearchBox">
      <h3>Search for the Weather!</h3>
      <form>
        <TextField
          required
          id="city"
          label="City Name"
          variant="outlined"
          value={city}
          onChange={handleChange}
        />
        <br></br> <br></br>
        <Button variant="contained" type="submit">
          Search
        </Button>
      </form>
    </div>
  );
}
