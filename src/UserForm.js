import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const App = () => {
    // State to store form data
    const [formData, setFormData] = useState({
        Name: "",
        Phone: "",
        Profession: "",
        Locality: "",
        Languages: "",
        Hobbies: "",
        Charges: "",
        Video: "",
        Specialization: ""
    });

    // Handle form change
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle form submit
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:4000/directory", formData);
            alert("Form submitted successfully!");
            console.log(response.data);
            setFormData({ Name: "", Phone: "", Profession: "", Locality: "", Languages: "", Hobbies: "", Charges: "", Video: "", Specialization: "" }); // Reset form
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("Error submitting form. Please try again.");
        }
    };

    return (
        <div className="container mt-2">
            <div className="d-flex gap-2 mb-2 mt-2 justify-content-center">
            <h2 className="text-center mb-4">Form for Add Directory data</h2>
            <Link to="/directory">
            <span className="closeIcon"><FontAwesomeIcon icon={faXmark} color="red" className="shadow cross"/></span>
            </Link>
            </div>
            <form onSubmit={handleSubmit} className="col-md-6 mx-auto shadow p-4 rounded">
                <div className="mb-3">
                    <input
                        type="text"
                        name="Name"
                        className="form-control"
                        value={formData.Name}
                        onChange={handleChange}
                        placeholder="Enter Name"
                        required
                    />
                </div>
                <div className="mb-3">
                    <input
                        type="tel"
                        name="Phone"
                        className="form-control"
                        value={formData.Phone}
                        onChange={handleChange}
                        placeholder="Enter phone number"
                        required
                    />
                </div>
                <div className="mb-3">
                    <input
                        type="text"
                        name="Profession"
                        className="form-control"
                        value={formData.Profession}
                        onChange={handleChange}
                        placeholder="Enter profession"
                        required
                    />
                </div>
                <div className="mb-3">
                    <input
                        type="text"
                        name="Locality"
                        className="form-control"
                        value={formData.Locality}
                        onChange={handleChange}
                        placeholder="Enter locality"
                    />
                </div>
                <div className="mb-3">
                    <input
                        type="text"
                        name="Languages"
                        className="form-control"
                        value={formData.Languages}
                        onChange={handleChange}
                        placeholder="Enter languages"
                    />
                </div>
                <div className="mb-3">
                    <input
                        type="text"
                        name="Hobbies"
                        className="form-control"
                        value={formData.Hobbies}
                        onChange={handleChange}
                        placeholder="Enter hobbies"
                    />
                </div>
                <div className="mb-3">
                    <input
                        type="text"
                        name="Charges"
                        className="form-control"
                        value={formData.Charges}
                        onChange={handleChange}
                        placeholder="Enter charges"
                    />
                </div>
                <div className="mb-3">
                    <input
                        type="text"
                        name="Video"
                        className="form-control"
                        value={formData.Video}
                        onChange={handleChange}
                        placeholder="Enter video link"
                    />
                </div>
                <div className="mb-3">
                    <input
                        type="text"
                        name="Specialization"
                        className="form-control"
                        value={formData.Specialization}
                        onChange={handleChange}
                        placeholder="Enter specialization"
                    />
                </div>
                <button type="submit" className="btn btn-primary w-100">
                    Add to Directory
                </button>
            </form>
        </div>
    );
};

export default App;
