import { useState, useEffect } from "react";

import { DataGrid } from "@material-ui/data-grid";

import axios from "axios";
import { getAllContactsURL } from "../Utils/constants";

const columns = [
  { field: "id", headerName: "Id", width: 80 },
  { field: "name", headerName: "Name", width: 130 },
  { field: "email", headerName: "Email", width: 300 },
  { field: "date", headerName: "Date", width: 130 },
  {
    field: "message",
    headerName: "Message",
    width: 600,
  },
];

export default function NewContacts() {
  const [rows, setRows] = useState([]);

  useEffect(async () => {
    try {
      const { data } = await axios(getAllContactsURL);

      const temp = data.contacts.map((item, id) => {
        const tempDate = new Date(item.createdAt);

        item["id"] = id + 1;

        item["date"] =
          tempDate.getDate() +
          "/" +
          tempDate.getMonth() +
          "/" +
          tempDate.getFullYear();
        return item;
      });

      setRows(temp);
    } catch (err) {}
  }, []);

  return (
    <>
      <h1 style={{ margin: "1rem 0 2rem" }}>New Contacts</h1>
      <div style={{ height: 600, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={10}
          checkboxSelection
        />
      </div>
    </>
  );
}
