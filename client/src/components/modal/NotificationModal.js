import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import { AiFillCamera } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {AiFillNotification} from "react-icons/ai"
import img from "../../images/network.png"

import {
  getuserinfo,
} from "../../actions/userinfo";
import { useParams } from "react-router-dom";
import FileBase from "react-file-base64";
import { AiFillEdit } from "react-icons/ai";

function NotificationModal() {
  const { userinfo } = useSelector((state) => state.userinfo);
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  const handleShow = () => setShow(true);
  const userId = JSON.parse(localStorage.getItem("profile"));
    const id =  userId?.result?._id
  const handleClose = () => {
    setShow(false)
     dispatch(getuserinfo(id));
  };

  const style = {
    zIndex: 10000000,
  };

  return (
    <>
      { userId?.result?._id && (
        <Button variant="primary" onClick={handleShow} size="sm">
         < AiFillNotification />
         <span>view notifications</span>
        </Button>
      )}
      <Modal show={show} onHide={handleClose} style={style}>
        <Modal.Header closeButton>
          <Modal.Title>Your Notification</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {
            !userinfo?.data?.userInfor?.notification.length  && 
          <div>
          <h6>No Notifications</h6>
          <img src={img} style={{width: "200px"}} />
          </div>
          }
            {
                userinfo?.data?.userInfor?.notification.map((val) => (
                   <ul>
                     <li>{val}</li>
                   </ul>
                ))
            }
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default NotificationModal