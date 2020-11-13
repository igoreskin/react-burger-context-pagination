import React from 'react';

const BurgerPaginator = ({ page, nextPage, prevPage, toBeginning, toEnd }) => {

  const nextRight = () => {
    (page.firstRow + page.rowsPerPage < page.totalRows) && nextPage();
  }

  const nextLeft = () => {
    page.firstRow > 0 && prevPage();
  }

  const farLeft = () => {
    toBeginning();
  }

  const farRight = () => {
    toEnd();
  }

  let lastDisplayedRow;
  if (parseInt(page.firstRow) + parseInt(page.rowsPerPage) < page.totalRows) {
    lastDisplayedRow = `- ${parseInt(page.firstRow) + parseInt(page.rowsPerPage)}`
  } else if (parseInt(page.firstRow) + 1 === (parseInt(page.totalRows))) {
    lastDisplayedRow = ''
  } else if (parseInt(page.firstRow) + parseInt(page.rowsPerPage) >= page.totalRows) {
    lastDisplayedRow = `- ${parseInt(page.totalRows)}`
  }

  return (
    <div className="paginator">
      <div style={{ marginRight: "10px" }}>Showing burgers</div>
      <div style={{ marginRight: "5px" }}><i className="fas fa-angle-double-left" onClick={farLeft} /></div>
      <div style={{ marginRight: "5px" }}><i className="fas fa-angle-left" onClick={nextLeft} /></div>
      <div>{page.firstRow + 1} {lastDisplayedRow}</div>
      <div style={{ marginLeft: "5px" }}><i className="fas fa-angle-right" onClick={nextRight} /></div>
      <div style={{ marginLeft: "5px" }}><i className="fas fa-angle-double-right" onClick={farRight} /></div>
      <div style={{ marginLeft: "8px" }}>out of &nbsp;{page.totalRows}</div>
    </div>
  )
}

export default BurgerPaginator;
