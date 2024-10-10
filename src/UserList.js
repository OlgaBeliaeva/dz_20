import React from 'react';
import { useSelector } from 'react-redux';
import { selectUsers } from './userSlice';
import './UserList.css';

const UserList = () => {
  const users = useSelector(selectUsers);

  return (
    <div className="user-list-container">
      <h2 className="user-list-title">User List</h2>
          <ul>
        {users.map((user, index) => (
          <li key={index}>
            {user.name} ({user.email})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;