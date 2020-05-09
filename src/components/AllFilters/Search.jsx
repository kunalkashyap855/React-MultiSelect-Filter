import React from "react";
import { TextField } from "@material-ui/core";

const Search = ({ search, handleSearch }) => {
  return (
    <TextField
      id="standard-required"
      label="Search by name"
      onChange={handleSearch}
      defaultValue={search}
    />
  );
};

export default Search;
