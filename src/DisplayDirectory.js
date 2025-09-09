import React, { useState } from 'react';
import './directory.css';
import directoryData from './data/directory.json';
import { motion } from 'framer-motion';
import { FaSquarePhone, FaPersonRays, FaMapLocationDot } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { IoLanguage } from "react-icons/io5";
import Navbars from './Navbars';


const Directory = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [professionFilter, setProfessionFilter] = useState('');
    const [selected, setSelected] = useState(null);

    const professions = [...new Set(directoryData.data.map(item => item.Profession))].filter(Boolean);

    const filteredData = directoryData.data.filter(item => {
        const matchesSearch =
            item.Name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.Location?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.Languages?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.Profession?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.Specialization?.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesProfession = !professionFilter || item.Profession?.toLowerCase().includes(professionFilter.toLowerCase()) ||
            item.Name?.toLowerCase().includes(professionFilter.toLowerCase()) ||
            item.Location?.toLowerCase().includes(professionFilter.toLowerCase()) ||
            item.Languages?.toLowerCase().includes(professionFilter.toLowerCase()) ||
            item.Specialization?.toLowerCase().includes(professionFilter.toLowerCase());

        return matchesSearch && matchesProfession;
    });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.2
            }
        }
    };

    const handleCardClick = (person) => {
        setSelected(person);
        console.log(person)
    };

    return (

<div>
    <div className="container">
  <Navbars/>
    </div>
        <div className="directory-container">
            <h1>Professional's Directory</h1>

            {/* Search and Filter Controls */}
            <div className="controls">
                <input
                    type="text"
                    placeholder="Search by name, location, or specialization..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="search-input"
                />

                <select
                    value={professionFilter}
                    onChange={(e) => setProfessionFilter(e.target.value)}
                    className="profession-select"
                >
                    <option value="">All Professions</option>
                    {professions.map(profession => (
                        <option className='optionmobile' key={profession} value={profession}>
                            {profession}
                        </option>
                    ))}
                </select>
            </div>

            {/* Display Results */}
            <div className="results-count">
                Showing {filteredData.length} of {directoryData.data.length} professionals
            </div>

            <div className="service-page">
                <motion.div
                    className="services-grid"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {filteredData.map(person => (
                        <div key={person.id}>
                            <motion.div
                                key={person.id}
                                className="service-card pointer"
                                variants={itemVariants}
                                onClick={() => handleCardClick(person)}
                                whileHover={{
                                    y: -10,
                                    boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)",

                                }}
                                style={{ '--card-color': '#858796' }}
                            >
                                <div className="card-icon" style={{ backgroundColor: `${"#4e73df"}20` }}>
                                    <span style={{ color: "#4e73df" }}><h5>{person.Name?.trim()}</h5></span>
                                </div>
                                <div className='lineheight'>
                                    <p className='persondetails'><FaSquarePhone /> {person.Phone}</p>
                                    <p className='persondetails'><FaPersonRays /> {person.Profession}</p>
                                    <p className='persondetails'><FaMapLocationDot /> {person.Location}</p>
                                    <p className='persondetails'><IoLanguage />  {person.Languages}</p>
                                </div>
                                <div className="card-underline" style={{ backgroundColor: "#858796" }}></div>
                            </motion.div>
                        </div>
                    ))}
                </motion.div>

                {/* Modal Popup */}
                {selected && (
                    <div className="modal-overlay" onClick={e => {
                        if (e.target.classList.contains('modal-overlay')) setSelected(null);
                    }}>
                        <div className="modal-table">
                            <button className="close-button hover" onClick={() => setSelected(null)}><IoClose /></button>
                            <h3>Profession Details</h3>
                            <div className="table-wrapper">
                                <table className="custom-table">
                                    <thead className="thead">
                                        <tr>
                                            <th>E.no</th>
                                            <th>Name</th>
                                            <th>phone number</th>
                                            <th>Profession</th>
                                            <th>locality</th>
                                            <th>language</th>
                                            <th>Hobbies</th>
                                            <th>Charges</th>
                                            <th>Video</th>
                                            <th>Specialization</th>
                                        </tr>
                                    </thead>
                                    <tbody className='modal-tbody'>
                                        <tr>
                                            <td>{selected.id}</td>
                                            <td>{(selected.Name && selected.name !== null ? selected.Name : "-")}</td>
                                            <td>{(selected.Phone && selected.Phone !== null ? selected.Phone : "-")}</td>
                                            <td>{(selected.Profession && selected.Profession !== null ? selected.Profession : "-")}</td>
                                            <td>{(selected.Location && selected.Location !== null ? selected.Location : "-")}</td>
                                            <td>{(selected.Languages && selected.Languages !== null ? selected.Languages : "-")}</td>
                                            <td>{(selected.charges && selected.name !== null ? selected.Name : "-")}</td>
                                            <td>{(selected.Specialization && selected.Specialization !== null ? selected.Specialization : "-")}</td>
                                            <td>{(selected.Hobbies && selected.Hobbies !== null ? selected.Hobbies : "-")}</td>
                                            <td>{(selected.Video && selected.Video !== null ? selected.Video : "-")}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                )}
                <motion.div
                    className="cta-section"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                >
                    <h2>Ready to Transform Your Business?</h2>
                    <p>Get in touch with our experts to discuss how we can help</p>
                    <button className="cta-button">Contact Us</button>
                </motion.div>

            </div>
        </div>
</div>

    );
};

export default Directory;