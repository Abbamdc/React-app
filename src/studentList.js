const studentList = ({students, title}) => {
  
  return (
    <div className="studentList">
      <ul>
        {students.map((student) => {
          <li className="student-preview" key={students.id}>
            <h2>{student.title}</h2>
            <p>{student.department}</p>
          </li>
        })}
      </ul>
    </div>
  );
}

export default studentList;