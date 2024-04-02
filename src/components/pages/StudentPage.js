import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './StudentPage.css';

export function StudentPage() {
    const [students, setStudents] = useState([]);

    const [formData, setFormData] = useState({
        name: '',
        activityId: 0,
        startingDate: '',
        endingDate: '',
        duration: '',
        status: '',
        comments: ''
    });

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get('students/getAll');
                setStudents(response.data);
            } catch (error) {
                console.error('Error:', error);
            }
        }
        fetchData();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('students/add', formData);
            console.log(response);
            alert('Activity submitted successfully!');
            setFormData({
                name: '',
                activityId: 0,
                startingDate: '',
                endingDate: '',
                duration: '',
                status: '',
                comments: ''
            });
            refreshData();
        } catch (error) {
            console.error('Error:', error);
            alert('Failed to submit activity');
        }
    };

    const refreshData = async () => {
        try {
            const response = await axios.get('students/getAll');
            setStudents(response.data);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`students/delete/${id}`);
            alert('Student deleted successfully!');
            refreshData();
        } catch (error) {
            console.error('Error:', error);
            alert('Failed to delete student');
        }
    };

    return (
        <div className="container">
            <h2 className='addStudent_h2'>Activity Form</h2>
            <form className='addStudent_form' id="activity-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className='addStudent_label' htmlFor="name">Name:</label>
                    <input className='addStudent_input'
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                </div>
                <div className="form-group">
                    <label className='addStudent_label' htmlFor="activity-id">Activity ID:</label>
                    <input className='addStudent_input'
                        type="number"
                        id="activity-id"
                        name="activityId"
                        value={formData.activityId}
                        onChange={(e) => setFormData({ ...formData, activityId: e.target.value })} />
                </div>
                <div className="form-group">
                    <label className='addStudent_label' htmlFor="starting-date">Starting Date:</label>
                    <input className='addStudent_input'
                        type="date"
                        id="starting-date"
                        name="startingDate"
                        value={formData.startingDate}
                        onChange={(e) => setFormData({ ...formData, startingDate: e.target.value })} />
                </div>
                <div className="form-group">
                    <label className='addStudent_label' htmlFor="ending-date">Ending Date:</label>
                    <input className='addStudent_input'
                        type="date"
                        id="ending-date"
                        name="endingDate"
                        value={formData.endingDate}
                        onChange={(e) => setFormData({ ...formData, endingDate: e.target.value })} />
                </div>
                <div className="form-group">
                    <label className='addStudent_label' htmlFor="duration">Duration (in Months):</label>
                    <input className='addStudent_input'
                        type="number"
                        id="duration"
                        name="duration"
                        value={formData.duration}
                        onChange={(e) => setFormData({ ...formData, duration: e.target.value })} />
                </div>
                <div className="form-group">
                    <label className='addStudent_label_status' htmlFor="status">Status:</label>
                    <input className='addStudent_input_status'
                        type="text"
                        id="status"
                        name="status"
                        value={formData.status}
                        onChange={(e) => setFormData({ ...formData, status: e.target.value })} />
                </div>
                <div className="form-group">
                    <label className='addStudent_label_comments' htmlFor="comments">Comments:</label>
                    <textarea className='addStudent_comments'
                        id="comments"
                        name="comments"
                        value={formData.comments}
                        onChange={(e) => setFormData({ ...formData, comments: e.target.value })}></textarea>
                </div>
                <button className='addStudent_button' type="submit">Submit</button>
            </form>

            <h2 className="student-table-header">Student Data</h2>
            <table className="student-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Activity ID</th>
                        <th>Starting Date</th>
                        <th>Ending Date</th>
                        <th>Duration</th>
                        <th>Status</th>
                        <th>Comments</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map(student => (
                        <tr key={student.id}>
                            <td>{student.name}</td>
                            <td>{student.activityId}</td>
                            <td>{student.startingDate}</td>
                            <td>{student.endingDate}</td>
                            <td>{student.duration}</td>
                            <td>{student.status}</td>
                            <td>{student.comments}</td>
                            <td>
                                <button onClick={() => handleDelete(student.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
