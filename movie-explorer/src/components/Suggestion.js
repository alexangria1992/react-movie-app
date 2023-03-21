import React from "react";
import { TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { searchMovies } from "../redux/search";

const Suggestion = () => {
  const dispatch = useDispatch();

  const inputOnChange = (event) => {
    if (!event.target.value) {
      return;
    }

    dispatch(searchMovies(event.target.value));
  };
  return (
    <>
      <TextField
        id="search"
        placeholder="Search"
        fullWidth={true}
        sx={{ mb: 5 }}
        variant="standard"
        InputProps={{
          onChange: inputOnChange,
        }}
      />
    </>
  );
};

export default Suggestion;
