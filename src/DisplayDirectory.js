// src/Directory.js
import React, { useState } from 'react';
import './index.css';
import directoryData from './data/directory.json';
import { motion } from 'framer-motion';
import { FaSquarePhone, FaPersonRays, FaMapLocationDot } from "react-icons/fa6";
import { IoLanguage } from "react-icons/io5";


const Directory = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [professionFilter, setProfessionFilter] = useState('');

    const professions = [...new Set(directoryData.data.map(item => item.Profession))].filter(Boolean);

    const filteredData = directoryData.data.filter(item => {
        const matchesSearch =
            item.Name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.Location?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.Specialization?.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesProfession = !professionFilter ||  item.Profession?.toLowerCase().includes(professionFilter.toLowerCase());

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
                duration: 0.5
            }
        }
    };

    return (
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
                        <option key={profession} value={profession}>
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
                                whileHover={{
                                    y: -10,
                                    boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)",

                                }}
                                style={{ '--card-color': '#858796', marginBottom: "0.2px" }}
                            >
                                <div className="card-icon" style={{ backgroundColor: `${"#4e73df"}20` }}>
                                    <span style={{ color: "#4e73df" }}><h5>{person.Name?.trim()}</h5></span>
                                </div>
                                <div className='lineheight'>
                                    <p className='text-left'><FaSquarePhone /> {person.Phone} <br /><FaPersonRays /> {person.Profession} <br /> <FaMapLocationDot />  {person.Location} <br /> <IoLanguage />  {person.Languages}</p>
                                </div>
                                <div className="card-underline" style={{ backgroundColor: "#858796" }}></div>
                            </motion.div>
                        </div>
                    ))}
                </motion.div>
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
    );
};

export default Directory;