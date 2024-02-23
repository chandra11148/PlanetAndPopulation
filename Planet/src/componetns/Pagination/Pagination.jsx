import React from "react";
import Button from "@mui/material/Button";

function Pagination({ handleNext, handlePrev, pageNumber, paginationUrl }) {
  return (
    <>
      <Button
        variant="contained"
        color="success"
        onClick={handlePrev}
        disabled={paginationUrl.prev ? false : true}
      >
        Prev
      </Button>
      <h3>{pageNumber}</h3>
        <Button
          variant="contained"
          color="success"
          onClick={handleNext}
          disabled={paginationUrl.next ? false : true}
        >
          Next
        </Button>
    </>
  );
}

export default Pagination;
