import "./AddProject.scss";

export default function AddProject() {
  return (
    <div className="addModal">
      <h1>Project Details</h1>
      <form>
        <input type="text" name="projectName" placeholder="Project Name*" />
        <input type="text" name="decs" placeholder="Description*" />
        <input type="text" name="category" placeholder="Category*" />
        <lable>
          Start Date*:
          <input type="date" name="startDate"  />
        </lable>
        <lable>
          End Date:
          <input type="date" name="endDate" />
        </lable>
        <input type="text" name="notes" placeholder="Notes" />
      </form>
    </div>
  );
}
