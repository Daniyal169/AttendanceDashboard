import { useState } from 'react';
import './App.css'
import Main from './components/Main/Main';
import RightSide from './components/RightSide/RightSide';
import Sidebar from './components/Sidebar/Sidebar';
import { UpdateProvider } from './context/UpdateContext';

function App() {

  const [totalStudent, setTotalStudent] = useState(10);
  const [presentStudent, setPresentStudent] = useState(10);
  const [absentStudent, setAbsentStudent] = useState(0);
  const [leaveStudent, setLeaveStudent] = useState(0);

  const presentPercent = () => {
    return (presentStudent / totalStudent) * 100;
  }
  const absentPercent = () => {
    return (absentStudent / totalStudent) * 100;
  }
  const leavePercent = () => {
    return (leaveStudent / totalStudent) * 100;
  }


  const [date, setDate] = useState(new Date());


  return (

    <div className="App">
      <div className="appGlass">
        <UpdateProvider value={{ totalStudent, presentStudent, absentStudent, leaveStudent, setPresentStudent, setAbsentStudent, setLeaveStudent, presentPercent, absentPercent, leavePercent, date, setDate }}>
          <Sidebar />
          <Main />
          <RightSide />
        </UpdateProvider>
      </div>
    </div>
  );
}

export default App;
