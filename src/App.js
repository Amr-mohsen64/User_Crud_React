import React, { useState } from 'react';
import { AddUser } from './components/Users/AddUser/AddUser';
import UsersList from './components/Users/UsersList/UsersList';



function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (data) => {
    console.log(data);
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        data
      ]
    })
  }

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
