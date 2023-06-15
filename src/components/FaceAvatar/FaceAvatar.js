import Avatar from "@mui/material/Avatar";
import profilePicture from "../../assets/images/me.jpeg";

export default function FaceAvatar() {
  return (
    <Avatar
      alt="Vlad Hutupasu"
      src={profilePicture}
      sx={{ width: 140, height: 140 }}
      style={{ margin: "20px 0 0 20px"}}
    />
  );
}
