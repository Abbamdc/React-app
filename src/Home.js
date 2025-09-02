import { useEffect, useState } from 'react';
import './App.css';
import studentList from './studentList';

function Home() {
  const [studentList, setStudentsList]  = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/students')
      .then(res => {
        if (!res.ok){
          throw Error('could not fetch the data for that resource');
        }
      return  res.json();
      })
      .then(data => {
        setStudentsList(data);
        setIsPending(faise);
        setError(null);
      })
      .catch(err => {
        setIsPending(false);
        setError(err.message);
      })
  }, []);
  return (
    <div className="Home">
      { error && <div>{error}</div>}
      {isPending && <div>loading...</div>}
      {studentList && <studentList studentList={studentList} title="All Students!" />}
    </div>
  );
}

export default Home;
