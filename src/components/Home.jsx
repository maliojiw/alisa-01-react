import React, { useState, useEffect } from 'react';
import Nav from './Nav';
import AdminTable from './AdminTable';
import UserTable from './UserTable';

function Home() {
  const [showUserTable, setShowUserTable] = useState(false);
  const [showAdminTable, setShowAdminTable] = useState(false);
  const [usersData, setUsersData] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    position: ''
  });
  const [error, setError] = useState('');

  const resetState = () => {
    setShowUserTable(false);
    setShowAdminTable(false);
    setUsersData([]);
    setFormData({ name: '', lastName: '', position: '' });
    setError('');
  };

  useEffect(() => {
    resetState();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError('');
  };

  const handleAddUser = () => {
    if (!formData.name || !formData.lastName || !formData.position) {
      setError('All fields are required.');
      return;
    }

    const newUser = {
      id: usersData.length + 1,
      ...formData
    };
    setUsersData([...usersData, newUser]);
    setFormData({ name: '', lastName: '', position: '' });
    setError('');
  };

  const handleDeleteUser = (id) => {
    setUsersData(usersData.filter(user => user.id !== id));
  };

  return (
    <div className="min-h-screen bg-cyan-100">
      <Nav onReset={resetState} />
      <main className="flex flex-col items-center justify-center mt-16">
        <h2 className="text-3xl font-bold mb-8">Generation Thailand Home - {showUserTable ? "User Sector" : "Admin Sector"}</h2>
        <div className="flex space-x-8 mb-8">
          <button 
            className="bg-white shadow-md rounded py-2 px-4"
            onClick={() => { setShowUserTable(true); setShowAdminTable(false); }}
          >
            User Home Sector
          </button>
          <button 
            className="bg-white shadow-md rounded py-2 px-4"
            onClick={() => { setShowUserTable(false); setShowAdminTable(true); }}
          >
            Admin Home Sector
          </button>
        </div>

        {showAdminTable && (
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4">Create User Here</h3>
            <div className="flex space-x-4 mb-4">
              <input 
                type="text" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                placeholder="Name" 
                className="p-2 border border-gray-300 rounded" 
              />
              <input 
                type="text" 
                name="lastName" 
                value={formData.lastName} 
                onChange={handleChange} 
                placeholder="Last Name" 
                className="p-2 border border-gray-300 rounded" 
              />
              <input 
                type="text" 
                name="position" 
                value={formData.position} 
                onChange={handleChange} 
                placeholder="Position" 
                className="p-2 border border-gray-300 rounded" 
              />
              <button 
                onClick={handleAddUser} 
                className="bg-blue-500 text-white rounded py-2 px-4"
              >
                Save
              </button>
            </div>
            {error && <p className="text-red-500">{error}</p>}
          </div>
        )}

        {showUserTable && <UserTable users={usersData} />}
        {showAdminTable && <AdminTable users={usersData} onDelete={handleDeleteUser} />}
      </main>
    </div>
  );
}

export default Home;
