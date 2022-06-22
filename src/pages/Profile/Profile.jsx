import "./Profile.scss";
import Navbar from "../../components/Navbar/Navbar";
import useFetch from "../../hooks/useFetch";

export default function Profile() {
  const { data, error } = useFetch("api/users/62b1823e874b0b546969a445");

  return (
    <>
      <Navbar error={error} />
      {error.code === "ERR_BAD_REQUEST" ? (
        <h1 className="errorDisplay">
          You are not Autherized!
          <br />
          Please Login or Sign Up
        </h1>
      ) : null}
      {data && (
        <div className="user">
          <div className="card flex">
            <div className="grid">
              <span className="title">Username:</span>
              <span className="value">{data.username}</span>
            </div>
            <div className="grid">
              <span className="title">Email:</span>
              <span className="value">{data.email}</span>
            </div>
            <div className="grid">
              <span className="title">Mobile Number:</span>
              <span className="value">{data.mobileNumber}</span>
            </div>
            <div className="grid">
              <span className="title">Address:</span>
              <span className="value">{data.address}</span>
            </div>
            <div className="grid">
              <span className="title">City:</span>
              <span className="value">{data.city}</span>
            </div>
            <div className="grid">
              <span className="title">State:</span>
              <span className="value">{data.state}</span>
            </div>
            <div className="grid">
              <span className="title">Country:</span>
              <span className="value">{data.country}</span>
            </div>
            {data.companyName === "" ? null : (
              <div className="grid">
                <span className="title">Company Name:</span>
                <span className="value">{data.companyName}</span>
              </div>
            )}
            {data.occupation === "" ? null : (
              <div className="grid">
                <span className="title">Occupation:</span>
                <span className="value">{data.occupation}</span>
              </div>
            )}
            {data.experience === null ? null : (
              <div className="grid">
                <span className="title">Years of Experience:</span>
                <span className="value">{data.experience}</span>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
