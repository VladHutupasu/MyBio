import FaceAvatar from "../FaceAvatar/FaceAvatar";
import "./Sidenav.scss";

export default function Sidenav(props) {
  const drawerWidth = props.drawerWidth;
  console.log("[dev] Got width - ", props.drawerWidth);

  return (
    <div className="sidenav" style={{ width: drawerWidth }}>
      <FaceAvatar />
    </div>
  );
}
