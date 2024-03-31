import React, { useState } from 'react';
import axios from 'axios';
import '../CSSFolder/AddStudentPage.css';

function StudentPage() {
    const [formData, setFormData] = useState({
        name: '',
        activityId: 0,
        startingDate: '',
        endingDate: '',
        status: '',
        comments: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

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
                status: '',
                comments: ''
            });
        } catch (error) {
            console.error('Error:', error);
            alert('Failed to submit activity');
        }
    };


    return (
        <div className="container">
            <h2>Activity Form</h2>
            <form id="activity-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="activity-id">Activity ID:</label>
                    <input type="number" id="activity-id" name="activityId" value={formData.activityId} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="starting-date">Starting Date:</label>
                    <input type="date" id="starting-date" name="startingDate" value={formData.startingDate} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="ending-date">Ending Date:</label>
                    <input type="date" id="ending-date" name="endingDate" value={formData.endingDate} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="status">Status:</label>
                    <input type="text" id="status" name="status" value={formData.status} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="comments">Comments:</label>
                    <textarea id="comments" name="comments" value={formData.comments} onChange={handleChange}></textarea>
                </div>
                <button onClick={handleSubmit} type="submit">Submit</button>
                <button>New Page</button>
            </form>
        </div>
    );
}

export default StudentPage;
