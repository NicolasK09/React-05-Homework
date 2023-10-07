
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UserList() {
  const [users, setUsers] = useState([]); 
  const [loading, setLoading] = useState(false); 

  useEffect(() => {
 
    setLoading(true);


    axios
      .get('https://techcrunch.com/wp-json/wp/v2/posts?per_page=100&context=embed')
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
      })
      .finally(() => {

        setLoading(false);
      });
  }, []);

  const fetchUsers = () => {

    setLoading(true);


    axios
      .get('https://techcrunch.com/wp-json/wp/v2/posts?per_page=100&context=embed')
      .then((response) => {
        setUsers(response.data); 
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
      })
      .finally(() => {

        setLoading(false);
      });
  };

  return (
    <div>
      <h2>User List</h2>
      {}
      {loading ? <div>Loading...</div> : null}
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
      <button onClick={fetchUsers}>Fetch Users</button>
    </div>
  );
}

export default UserList;
