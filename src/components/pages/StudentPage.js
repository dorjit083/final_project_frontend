import React, { useState } from 'react';
import axios from 'axios';
import './StudentPage.css';

export function StudentPage() {
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
            <h2 className='addStudent_h2' >Activity Form</h2>
            <form className='addStudent_form' id="activity-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className='addStudent_label' htmlFor="name">Name:</label>
                    <input className='addStudent_input' type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label className='addStudent_label' htmlFor="activity-id">Activity ID:</label>
                    <input className='addStudent_input' type="number" id="activity-id" name="activityId" value={formData.activityId} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label className='addStudent_label' htmlFor="starting-date">Starting Date:</label>
                    <input className='addStudent_input' type="date" id="starting-date" name="startingDate" value={formData.startingDate} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label className='addStudent_label' htmlFor="ending-date">Ending Date:</label>
                    <input className='addStudent_input' type="date" id="ending-date" name="endingDate" value={formData.endingDate} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label className='addStudent_label_status' htmlFor="status">Status:</label>
                    <input className='addStudent_input_status' type="text" id="status" name="status" value={formData.status} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label className='addStudent_label_comments' htmlFor="comments">Comments:</label>
                    <textarea className='addStudent_comments' id="comments" name="comments" value={formData.comments} onChange={handleChange}></textarea>
                </div>
                <button className='addStudent_button' onClick={handleSubmit} type="submit">Submit</button>
            </form>
        </div>
    );
}

