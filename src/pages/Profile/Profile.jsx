import "./Profile.scss";
import Navbar from "../../components/Navbar/Navbar";
import useFetch from "../../hooks/useFetch";

export default function Profile() {
  const { data } = useFetch("api/users/62adb4afa1b3b65defe5b9a5");
  console.log(data);
  return (
    <>
      <Navbar />
      <div className="user">
        <div className="card flex">
          {[
            { title: "Username", value: "Naman" },
            { title: "Email", value: "sandwi@midwoan.com" },
            { title: "Mobile Number", value: "92039039023" },
            { title: "Address", value: "iwdanods" },
            { title: "City", value: "Udaipur" },
            { title: "State", value: "Rajasthan" },
            { title: "Country", value: "India" },
            { title: "Occupation", value: "CTO" },
            { title: "Company Name", value: "Google" },
            { title: "Years of Experience", value: 3 },
          ].map((item, index) => {
            return (
              <div key={index} className="grid">
                <span className="title">{item.title}:</span>
                <span className="value">{item.value}</span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
