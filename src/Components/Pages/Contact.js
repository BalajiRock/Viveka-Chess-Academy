import React, { useState } from 'react';
import './Contact.css';  // We'll create this CSS file for styling
import emailjs from '@emailjs/browser';


const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs
        .send('service_70s455y', 'template_hvxz3vi', formData, {
          publicKey: 'cmhubp7G-mmUboubU',
        })
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error);
          },
        );
        console.log(formData);
    };

    return (
        <div className="contact-container">
            <div className="form-section">
                <h2>Contact Us</h2>
                <p>Thank you for your interest in Viveka Chess Academy! We're excited to answer any questions you may have. Please leave us a brief message, and we’ll get back to you as soon as possible.</p>
                <p>Aspiring students can contact us here with your full details.</p>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Name *</label>
                        <input
                            type="text"
                            id="user_name"
                            name="user_name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Email *</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Phone no *</label>
                        <input
                            type="tel"
                            id='Phone_no'
                            name="Phone_no"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Message</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                        ></textarea>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
            <div className="contact-info">
                <h3>Contact Info</h3>
                <p># 30/64, 3rd cross, Gangappa Layout, Shakthinagar, near Pai Layout, Bangalore 560 016</p>
                <p>Phone: <a href="tel:+91 96866 54537">+91 96866 54537</a> / <a href="tel:+91 95380 60442">+91 95380 60442</a></p>
                <p>Email: vivekachessacademy@gmail.com</p>
            </div>
        </div>
    );
};

export default Contact;