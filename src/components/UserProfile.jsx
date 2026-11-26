import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateName } from "../Redux/userSlice";

const UserProfile = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const count = useSelector((state) => state.counter.count);
  const username = useSelector((state) => state.user.name);
  const useremail = useSelector((state) => state.user.email);

  const sendName = () => {
    dispatch(updateName(name));
  };

  return (
    <div className="input-box">
      count :{count}
      <br />
      email id :{useremail}
      <br />
      name : {username}
      <br />
      <br />
      <input
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <button onClick={sendName}>Send Name</button>
    </div>
  );
};

export default UserProfile;
