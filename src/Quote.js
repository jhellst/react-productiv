import React, { useState } from "react";


function Quote({ quote, getNewQuote }) {
  const curQuote = `${quote?.quote?.text} - ${quote?.quote?.author}`;

  return (
    <div>
      <div>{(quote!=="") && curQuote }</div>
      <button onClick={getNewQuote}>{(quote!=="") ? "Get new quote!" : "Get an inspirational quote!"}</button>
    </div>
  );
}

export default Quote;