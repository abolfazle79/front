import { Box, Typography } from "@mui/material";
import styles from "@/styles/tables.module.css";
import { useContext, useState, useRef } from "react";
import { TableData } from "../pages/Tabels";
import isEmpty from "./useful/isEmpty";
import { v4 as uuidv4 } from "uuid";

// const properties = [{ name: "ID", V }];

const Properties = () => {
  const [disabled, setDisabled] = useState(false);
  const { properties: data, handleEdit } = useContext(TableData);
  const form = useRef();
  let emptyObj = isEmpty(data);
  let output = false;

  const handleInput = (event) => {
    if (event.key === "Enter") {
      let arr = [];
      const keys = Object.entries(data).map(([key]) => key);
      arr = Array.from(form.current).map((item, i) => {
        return (arr[i] = item.value);
      });
      const result = {};
      keys.forEach((key, i) => (result[key] = arr[i]));
      handleEdit(result.id, true, result);
    }
  };

  if (!emptyObj) {
    output = Object.entries(data).map(([key, value]) => ({ key, value }));
  }
  return (
    <>
      <Box>
        <Typography className={styles.title_table}>Properties</Typography>
        <Box>
          {emptyObj && <div style={{ padding: "1rem" }}>No Input Selected</div>}
          {!emptyObj && output && (
            <form ref={form}>
              <table style={{ borderSpacing: 0, width: "100%" }}>
                <tbody>
                  {output.map((item, key) => {
                    return (
                      <tr className={styles.tr} key={uuidv4()}>
                        <td className={styles.td_title}>{item.key}</td>
                        <td
                          className={styles.td_value}
                          onDoubleClick={() => setDisabled(!disabled)}
                        >
                          <input
                            defaultValue={item.value}
                            style={{
                              width: "100%",
                              border: "none",
                            }}
                            name={item.name}
                            onKeyDown={(event) => handleInput(event)}
                            disabled={disabled}
                          />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </form>
          )}
        </Box>
      </Box>
    </>
  );
};

export default Properties;
