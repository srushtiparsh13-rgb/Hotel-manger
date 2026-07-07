import React, { useState, useEffect } from 'react';
import './App.css';

const API_URL = 'http://localhost:5000/api/rooms';

function App() {
  const [rooms, setRooms] = useState([]);
  const [formData, setFormData] = useState({ roomNumber: '', type: 'Single', price: '', status: 'Available' });
  const [editingId, setEditingId] = useState(null);
  const [error, setError] = useState('');

  // Fetch all rooms
  const fetchRooms = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      if (response.ok) setRooms(data);
    } catch (err) {
      console.error('Error fetching rooms:', err);
    }
  };

  useEffect(() => {
    fetchRooms();
  }, []);

  // Handle input changes
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Submit create or update
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    const method = editingId ? 'PUT' : 'POST';
    const url = editingId ? `${API_URL}/${editingId}` : API_URL;

    try {
      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || 'Something went wrong');
        return;
      }

      setFormData({ roomNumber: '', type: 'Single', price: '', status: 'Available' });
      setEditingId(null);
      fetchRooms();
    } catch (err) {
      setError('Failed to connect to the backend server.');
    }
  };

  // Set form values for editing
  const handleEdit = (room) => {
    setEditingId(room.id);
    setFormData({
      roomNumber: room.roomNumber,
      type: room.type,
      price: room.price,
      status: room.status,
    });
  };

  // Delete a room
  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this room?')) return;
    try {
      const response = await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
      if (response.ok) fetchRooms();
    } catch (err) {
      console.error('Error deleting room:', err);
    }
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Grand Horizon Hotel Manager</h1>
      </header>

      <main className="app-main">
        {/* Management Form */}
        <section className="form-section">
          <h2>{editingId ? '✏️ Edit Room Details' : '➕ Add New Room'}</h2>
          <form onSubmit={handleSubmit} className="room-form">
            <div className="form-group">
              <label>Room Number</label>
              <input
                type="text"
                name="roomNumber"
                value={formData.roomNumber}
                onChange={handleInputChange}
                placeholder="e.g., 305"
                required
              />
            </div>

            <div className="form-group">
              <label>Room Type</label>
              <select name="type" value={formData.type} onChange={handleInputChange}>
                <option value="Single">Single</option>
                <option value="Double">Double</option>
                <option value="Suite">Suite</option>
                <option value="Penthouse">Penthouse</option>
              </select>
            </div>

            <div className="form-group">
              <label>Price per Night ($)</label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleInputChange}
                placeholder="e.g., 150"
                required
              />
            </div>

            <div className="form-group">
              <label>Status</label>
              <select name="status" value={formData.status} onChange={handleInputChange}>
                <option value="Available">Available</option>
                <option value="Occupied">Occupied</option>
                <option value="Maintenance">Maintenance</option>
              </select>
            </div>

            {error && <p className="error-msg">{error}</p>}

            <div className="form-actions">
              <button type="submit" className="btn btn-submit">
                {editingId ? 'Update Room' : 'Add Room'}
              </button>
              {editingId && (
                <button
                  type="button"
                  className="btn btn-cancel"
                  onClick={() => {
                    setEditingId(null);
                    setFormData({ roomNumber: '', type: 'Single', price: '', status: 'Available' });
                  }}
                >
                  Cancel
                </button>
              )}
            </div>
          </form>
        </section>

        {/* Dashboard/Grid */}
        <section className="list-section">
          <h2>🏨 Current Room Inventory</h2>
          <div className="room-grid">
            {rooms.length === 0 ? (
              <p className="no-rooms">No rooms listed yet. Use the form to add one!</p>
            ) : (
              rooms.map((room) => (
                <div key={room.id} className={`room-card status-${room.status.toLowerCase()}`}>
                  <div className="room-card-header">
                    <h3>Room {room.roomNumber}</h3>
                    <span className="room-type">{room.type}</span>
                  </div>
                  <div className="room-card-body">
                    <p className="room-price">${room.price} / night</p>
                    <span className={`status-badge badge-${room.status.toLowerCase()}`}>
                      {room.status}
                    </span>
                  </div>
                  <div className="room-card-footer">
                    <button onClick={() => handleEdit(room)} className="btn-icon btn-edit" title="Edit">✏️</button>
                    <button onClick={() => handleDelete(room.id)} className="btn-icon btn-delete" title="Delete">🗑️</button>
                  </div>
                </div>
              ))
            )}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;