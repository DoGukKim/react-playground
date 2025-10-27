"use client";

import React from "react";

const GoPage = () => {
  const ref = React.useRef<HTMLDivElement>(null);

  return (
    <>
      <div ref={ref} style={{ height: "300px", border: "1px solid red" }}>
        <p>this is go page!!</p>
      </div>
      <p>this is go pageaaaaaa</p>
    </>
  );
};

export default GoPage;
