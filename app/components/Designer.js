"use client";
import { Box, Grid, Typography } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import { TableData } from "../pages/Tabels";
import IconButton from "@mui/material/IconButton";
import styles from "@/styles/tables.module.css";
import { useContext } from "react";
import JSONPretty from "react-json-pretty";
import JSONPrettyMon from "react-json-pretty/dist/monikai";
import "react-json-pretty/themes/monikai.css";
const Designer = () => {
  const {
    handleDelete,
    handleEdit,
    filedsValue: fileds,
  } = useContext(TableData);
  const consoleSide = { ...fileds };
  return (
    <>
      <Box>
        <Typography
          className={styles.title_table}
          style={{
            borderLeft: "1px solid white",
            borderRight: "1px solid white",
          }}
        >
          Designer
        </Typography>
        <Grid
          container
          style={{
            alignItems: "flex-start",
            direction: "rtl",
            height: "400px",
            border: "1px solid #717171",
            overflowY: "scroll",
          }}
        >
          {fileds.length <= 0 && (
            <span style={{ margin: "2rem" }}>no filed Exist</span>
          )}
          {fileds.length >= 1 &&
            fileds.map((item) => {
              return (
                <Grid
                  key={item.id}
                  container
                  item
                  xs={6}
                  sx={{
                    alignItems: "center",
                    padding: "0.7rem",
                  }}
                >
                  <Grid
                    item
                    xs={8}
                    onClick={() => handleEdit(item.id)}
                    sx={{ display: "flex" }}
                  >
                    <label style={{ margin: "0 0.5rem" }}>{item.label}</label>
                    <input
                      name={"table" + item.id}
                      value={"" || item.value}
                      disabled
                      style={{ width: "100%", height: "25px" }}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <IconButton
                      sx={{ color: "red" }}
                      onClick={() => handleDelete(item.id)}
                    >
                      <ClearIcon />
                    </IconButton>
                  </Grid>
                </Grid>
              );
            })}
        </Grid>
        <Grid
          container
          style={{
            height: "50vmin",
            border: "1px solid #717171",
            overflowX: "scroll",
          }}
        >
          <JSONPretty
            style={{ width: "100%" }}
            id="json-pretty"
            data={consoleSide}
            theme={JSONPrettyMon}
          ></JSONPretty>
        </Grid>
      </Box>
    </>
  );
};

export default Designer;
