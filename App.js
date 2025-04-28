import React, { useState } from 'react';
import Users from './Users';
import AddUsersForm from './AddUsersForm';
import EditUsersForm from './EditUsersForm';

function App() {
  const [users, setUsers] = useState([]);

  const handleDeleteUser = (userId) => {
    setUsers(users.filter(user => user.id !== userId));
  };

  const handleEditUser = (updatedUser) => {
    setUsers(users.map(user => user.id === updatedUser.id ? updatedUser : user));
  };

  return (
    <div>
      <h1>User Management</h1>
      <AddUsersForm />
      <Users users={users} onDeleteUser={handleDeleteUser} />
    </div>
  );
}

export default App; 
