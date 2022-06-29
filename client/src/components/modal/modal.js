import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import { AiFillCamera } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {
  createuserinfo,
  getuserinfo,
  updateuserinfo,
} from "../../actions/userinfo";
import { useParams } from "react-router-dom";
import FileBase from "react-file-base64";
import { AiFillEdit } from "react-icons/ai";

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
    coverImg: "",
    name: userId?.result?.name,
  });
  const handleClose = () => {
    setShow(false);
    setPostinfo({ ...postInfo, creator: id });
    if (userinfo?.data?.userInfor) {
    }
    console.log("updating");

 dispatch(updateuserinfo(postInfo));
 dispatch(getuserinfo(id));
    // dispatch(createuserinfo(postInfo));
  };

  const style = {
    zIndex: 10000000,
  };
  return (
    <>
      {id === userId.result?._id && (
        <Button variant="primary" onClick={handleShow}>
          <AiFillEdit />
          Edit your Profile
        </Button>
      )}
      <Modal show={show} onHide={handleClose} style={style}>
        <Modal.Header closeButton>
          <Modal.Title>Make Your Changes</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <h4>Chose Your Profile Picture</h4>
            <label
              className="inputLabel"
              style={{
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
              }}
            >
              <AiFillCamera style={{ width: "30px" }} />
              <span>Select Photo</span>
              <div style={{ display: "none" }}>
                <FileBase
                  type="file"
                  multiple={false}
                  onDone={({ base64 }) =>
                  setPostinfo({ ...postInfo, profileImg: base64 })
                  }
                />
                {<p>{postInfo?.profileImg}</p>}
              </div>
            </label>
          </div>
          <div>
            <h4>Chose Your Cover Picture</h4>
            <label
              className="inputLabel"
              style={{
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
              }}
            >
              <AiFillCamera style={{ width: "30px" }} />
              <span>Select Photo</span>
              <div style={{ display: "none" }}>
                <FileBase
                  type="file"
                  multiple={false}
                  onDone={({ base64 }) =>
                  setPostinfo({ ...postInfo, coverImg: base64 })
                  }
                />
                {<p>{postInfo?.profileImg}</p>}
              </div>
            </label>
          </div>
          <div>
            <h4 style={{marginBottom: "5px"}}>Enter Your Bio</h4>
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
