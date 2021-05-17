import { useState, useEffect } from "react";

import { DataGrid } from "@material-ui/data-grid";

import axios from "axios";
import {
  getAllContactsURL,
  viewContactURL,
  viewLandingPageURL,
} from "../Utils/constants";

const columns = [
  { field: "id", headerName: "Id", width: 65 },
  { field: "name", headerName: "Name", width: 160 },
  { field: "email", headerName: "Email", width: 300 },
  { field: "mobile", headerName: "Mobile", width: 150 },
  { field: "date", headerName: "Date", width: 130 },
  {
    field: "message",
    headerName: "Message",
    width: 600,
  },
];

export default function NewContacts() {
  const [rows, setRows] = useState([]);
  const [home, setHome] = useState(0);
  const [contact, setContact] = useState(0);

  useEffect(() => {
    getContactList();
    getHomeView();
    getContactView();
  }, []);

  const getContactList = async () => {
    try {
      const { data } = await axios(getAllContactsURL);

      const temp = data.contacts.map((item, id) => {
        const tempDate = new Date(item.createdAt);

        item["id"] = id + 1;

        item["date"] = tempDate.toLocaleDateString();
        return item;
      });

      setRows(temp);
    } catch (err) {}
  };

  const getHomeView = async () => {
    try {
      const { data } = await axios(viewLandingPageURL);
      setHome(data.count);
    } catch (err) {}
  };

  const getContactView = async () => {
    try {
      const { data } = await axios(viewContactURL);
      setContact(data.count);
      setRows(temp);
    } catch (err) {}
  };

  return (
    <>
      <h1 style={{ margin: "1rem 0 2rem" }}>New Contacts</h1>
      <p style={{ margin: "1rem 0 2rem" }}>
        HomePage View : {home}, Contact Page View : {contact}
      </p>
      <div style={{ height: 600, width: "100%" }}>
        <DataGrid rows={rows} columns={columns} pageSize={10} />
      </div>
    </>
  );
}
