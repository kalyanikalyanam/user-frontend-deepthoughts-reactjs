import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import axios from "axios";
import React, { useState, useEffect } from "react";
import "react-tabs/style/react-tabs.css";

import CustomComponent from "./custom-component";

// const dataSource = [
//   { label: "Map Title 1", content: "Map content 1" },
//   { label: "Map Title 2", content: "Map content 2" },
//   { label: "Map Title 2", content: "Map content 3" },
// ];

const CreateTabPanels = (props) => {
  const [categorydata, setCategoryData] = useState([]);
  useEffect(() => {
    axios

      .get(
        `https://deepthoughts-nodejs.herokuapp.com/blog/blogwithcategory/${props.category}`
      )

      .then(function (response) {
        console.log(response.data);

        setCategoryData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return [
    ...categorydata.map((d, index) => {
      return (
        <TabPanel key={index}>
          <CustomComponent content={d.category} />
        </TabPanel>
      );
    }),
  ];
};

const TabsRender = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`https://deepthoughts-nodejs.herokuapp.com/blog/blogcategorys`)
      .then(function (response) {
        console.log(response.data);

        setData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  return (
    <Tabs>
      <TabList>
        {[
          ...data.map((d) => (
            <Tab>
              {d.category}
              <CreateTabPanels content={d.category} />
            </Tab>
          )),
        ]}
      </TabList>
    </Tabs>
  );
};

export default TabsRender;
