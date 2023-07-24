"use client";
import Designer from "@/components/Designer";
import Properties from "@/components/Properties";
import Toolbar from "@/components/Toolbar";
import { Grid } from "@mui/material";
import { v4 as uuidv4 } from "uuid";

import { createContext, useState } from "react";
export const TableData = createContext();
const Tabels = () => {
  const [fileds, setFileds] = useState([]);
  const [propertiesValue, setPropertiesValue] = useState({});
  const data = {
    filedsValue: fileds,
    properties: propertiesValue,
    handleEdit: (id, edit = false, newObj = {}) => {
      if (edit) {
        let findIndex = fileds.findIndex((item) => item.id === id);
        let newFileds = (fileds[findIndex] = newObj);
        setPropertiesValue(newFileds);
        return;
      }
      let item = fileds.find((item) => item.id === id);
      setPropertiesValue(item);
    },

    handleDelete: (id) => {
      const filtered = fileds.filter((item) => item.id != id);
      setFileds(filtered);
      if (id === propertiesValue.id) setPropertiesValue({});
      if (fileds.length <= 1) setPropertiesValue({});
    },

    addFileds: (txt) => {
      let newFileds = {
        id: uuidv4(),
        value: txt,
        name: "initialName",
        label: "label" + txt,
        class: "initialClass",
        required: false,
      };
      setFileds([...fileds, newFileds]);
    },
  };
  return (
    <TableData.Provider value={data}>
      <Grid container sx={{ height: "100vh" }}>
        <Grid item lg={1.5}>
          <Toolbar />
        </Grid>
        <Grid item lg={8}>
          <Designer />
        </Grid>
        <Grid item lg={2.5}>
          <Properties />
        </Grid>
      </Grid>
    </TableData.Provider>
  );
};

export default Tabels;
