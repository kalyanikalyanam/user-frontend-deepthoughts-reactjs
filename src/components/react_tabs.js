import React, { Component } from "react";
import Tabs from "react-responsive-tabs";

// IMPORTANT you need to include the default styles
import "react-responsive-tabs/styles.css";

function getTabs() {
  const presidents = [
    { name: "George Washington", biography: ".fhdfhdhdfhfhfhdfhdh.." },
    { name: "Theodore Roosevelt", biography: ".dfhdfhdfhdhdhfhdf.." },
  ];

  return presidents.map((president, index) => ({
    title: president.name,
    getContent: () => president.biography,
    /* Optional parameters */
    key: index,
    tabClassName: "tab",
    panelClassName: "panel",
  }));
}

const Reacttabs = () => <Tabs items={getTabs()} />;

export default Reacttabs;
