import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import {
  createuserinfo,
  getuserinfo,
  updateuserinfo,
} from "../../actions/userinfo";
import { useParams } from "react-router-dom";
import FileBase from "react-file-base64";

function Modall() {
  const { userinfo } = useSelector((state) => state.userinfo);
  const [show, setShow] = useState(false);
  const { id } = useParams();
  const dispatch = useDispatch();

  const handleShow = () => setShow(true);
  const userId = JSON.parse(localStorage.getItem("profile"));

  const [postInfo, setPostinfo] = useState({
    profileImg: "",
    bio: "",
    creator: "",
    name: userId?.result?.name
  });
  console.log(postInfo.name);

  const handleClose = () => {
    setShow(false);
    setPostinfo({ ...postInfo, creator: id });
    dispatch(getuserinfo(id));
    if ( userinfo?.data?.userInfor) {
      console.log("updating")
      return dispatch(updateuserinfo(postInfo));
    }
    dispatch(createuserinfo(postInfo));
  };

  const style = {
    zIndex: 10000000,
  };
  return (
    <>
      {id === userId.result?._id && (
        <Button variant="primary" onClick={handleShow}>
          Launch demo modal
        </Button>
      )}
      <Modal show={show} onHide={handleClose} style={style}>
        <Modal.Header closeButton>
          <Modal.Title>Make Your Changes</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <h4>Chose Your Profile Picture</h4>
            <FileBase
              type="file"
              multiple={false}
              onDone={({ base64 }) =>
                setPostinfo({ ...postInfo, profileImg: base64 })
              }
            />
          </div>
          <div>
            <h4>Enter Your Bio</h4>
            <input
              placeholder="Please Enter Bio"
              value={postInfo.bio}
              onChange={(e) =>
                setPostinfo({ ...postInfo, bio: e.target.value })
              }
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Modall;
