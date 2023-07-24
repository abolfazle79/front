"use client";
import { Box, Button, Typography } from "@mui/material";
import styles from "@/styles/tables.module.css";
import { v4 as uuidv4 } from "uuid";
import { TableData } from "../pages/Tabels";
import { useContext } from "react";

const btnToolbar = ["textBox", "ComboBox", "FileUpload", "RadioButton"];

const Toolbar = () => {
  const data = useContext(TableData);
  return (
    <>
      <Box sx={{ height: "100%", border: "1px solid #717171" }}>
        <Typography className={styles.title_table}>Toolbar</Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
          className={styles.toolbar_btn}
        >
          {btnToolbar.map((text, index) => {
            return (
              <Button
                key={uuidv4()}
                onClick={(text) => data.addFileds(text.target.innerText)}
              >
                {text}
              </Button>
            );
          })}
        </Box>
      </Box>
    </>
  );
};

export default Toolbar;
