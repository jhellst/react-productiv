import React, { useState } from "react";
import Quote from "./Quote";

const QUOTE_API = "https://inspo-quotes-api.herokuapp.com/quotes/random";


function InspirationalQuote() {
  const [quote, setQuote] = useState("");

  async function getNewQuote() {
    const response = await fetch(QUOTE_API);
    const curQuote = await response.json();
    setQuote(q => curQuote);
  }

  return (
    <div>
      <Quote quote={quote} getNewQuote={getNewQuote}/>
    </div>
  )

}

export default InspirationalQuote;
