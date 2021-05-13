import Fade from "@material-ui/core/Fade";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

import axios from "axios";
import { addNewContactURL } from "../../../Utils/constants";

import styles from "./styles.module.scss";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  field: {
    width: "100%",
    zIndex: "2",
    background: "white",
    borderRadius: "6px",
  },
}));

export default function ContactUs({ open, handleClose }) {
  const classes = useStyles();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    if (!name || !email || !message) {
      setError("All fields are required !");
      return false;
    }

    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!re.test(String(email).toLowerCase())) {
      setError("Email is invalid !");
      return false;
    }
    return true;
  };

  const handleSubmit = () => {
    if (!validate()) return;

    setLoading(true);

    const data = {
      name,
      message,
      email,
    };
    axios
      .post(addNewContactURL, data)
      .then((res) => {
        setSuccess(true);
        setLoading(false);
      })
      .catch((err) => {
        alert("Something went wrong. Please try after sometime");
        setLoading(false);
      });

    setError("");
  };

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <div className={styles.container}>
          <p className={styles.close} onClick={handleClose}>
            x
          </p>

          <h2 className={styles.title}>Contact Us</h2>

          <p className={styles.desc}>
            Feel like contacting us ? Write your message below and we will get
            back to you as soon as possible.
          </p>

          {success ? (
            <div style={{ height: "15rem" }}>
              <h1>We recieved your message</h1>
              <p>Thank you for contacting us.</p>
            </div>
          ) : (
            <>
              <TextField
                required
                type="email"
                value={email}
                id="outlined-required"
                placeholder="Your email here"
                variant="outlined"
                onChange={({ target }) => setEmail(target.value)}
                className={classes.field}
              />

              <TextField
                required
                value={name}
                id="outlined-required"
                placeholder="Your full name here"
                variant="outlined"
                onChange={({ target }) => setName(target.value)}
                className={classes.field}
              />

              <TextField
                required
                multiline
                rows={4}
                value={message}
                id="outlined-required"
                placeholder="Your message here"
                variant="outlined"
                onChange={({ target }) => setMessage(target.value)}
                className={classes.field}
              />

              <p className={styles.error}>{error}</p>

              <button
                className={styles.contactButton}
                onClick={handleSubmit}
                disabled={loading}
              >
                {loading ? <>Sending...</> : <>Connect</>}
              </button>
            </>
          )}

          <div className={styles.circle1} />
          <div className={styles.circle2} />
        </div>
      </Fade>
    </Modal>
  );
}
