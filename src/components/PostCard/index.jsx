import React from "react";

import ReactHtmlParser from "react-html-parser";

import styles from "./style.module.css";

export default function PostCard({ item }) {
  const time = new Date(item.created_at);
  let month;

  switch (time.getMonth()) {
    case 0:
      month = "January";
      break;
    case 1:
      month = "Feburary";
      break;
    case 2:
      month = "March";
      break;
    case 3:
      month = "April";
      break;
    case 4:
      month = "May";
      break;
    case 5:
      month = "June";
      break;
    case 6:
      month = "July";
      break;
    case 7:
      month = "August";
      break;
    case 8:
      month = "September";
      break;
    case 9:
      month = "October";
      break;
    case 10:
      month = "November";
      break;
    default:
      month = "December";
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{item.title}</h1>
      <p className={styles.author}>
        Written By : {item.author} , {time.getDate()} {month},
        {time.getFullYear()}
      </p>

      <p className={styles.content}>{ReactHtmlParser(item.content)}</p>
    </div>
  );
}
