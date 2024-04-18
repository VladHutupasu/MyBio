import profilePicture from "../../assets/images/me.jpg";

export default function FaceAvatar() {
  return (
    <img
      alt="Vlad Hutupasu"
      src={profilePicture}
      style={{
        width: 210,
        height: 210,
        marginTop: "20px",
        objectFit: "cover",
        objectPosition: "top",
        borderRadius: "50%",
      }}
      data-aos="zoom-y-out"
      data-aos-delay="150"
    ></img>
  );
}
