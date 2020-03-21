import React, { useState } from "react";

export default function SearchForm(props) {
 
  return (
    <section className="search-form">
      <form>
        <input
          placeholder="search by name"
          onChange={props.change}
          value={props.query}
        />
      </form>
    </section>
  );
}
