import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from 'react-bootstrap/Table';
import './App.css';


const DisplayDirectory = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [filteredData, setfilteredData] = useState([]);
    const [searchTerm, setSearchTerm] = useState("")


    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:4000/directory/list');
            setData(response.data);
            setfilteredData(response.data)
            setLoading(false);
        } catch (err) {
            setError(err.message);
            setLoading(false);
        }
    };


    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div style={{ padding: '20px' }}>
            <div style={{ marginBottom: '20px' }}>
                <input
                    type="text"
                    placeholder="Search here..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={{
                        padding: '10px',
                        width: '300px',
                        borderRadius: '4px',
                        border: '1px solid #ddd'
                    }}
                />
            </div>

            {/* Table */}
            {filteredData.length > 0 ? (
                <Table bordered hover responsive="sm lg" className="tables">
                    <thead className="h6">
                        <tr>
                            <th>s.no</th>
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
                    <tbody>
                        {data.filter((item) => {
                            return searchTerm.toLowerCase() === "" ? item : item.Name.toLowerCase().includes(searchTerm) ||
                             item.Hobbies.toLowerCase().includes(searchTerm) || item.Location.toLowerCase().includes(searchTerm) || 
                             item.Profession.toLowerCase().includes(searchTerm) || item.Languages.toLowerCase().includes(searchTerm) || 
                             item.Charges.toLowerCase().includes(searchTerm)
                        }).map((item, i) => (
                            <tr key={i}>
                                <td>{i + 1}</td>
                                <td>{item.Name && item.name !== null ? item.Name : "---"}</td>
                                <td>{item.Phone && item.Phone !== null ? item.Phone : "---"}</td>
                                <td>{item.Profession && item.Profession !== null ? item.Profession : "---"}</td>
                                <td>{item.Location && item.Location !== null ? item.Location : "---"}</td>
                                <td className="langcell">{item.Languages && item.Languages !== null ? item.Languages : "---"}</td>
                                <td>{item.Hobbies && item.Hobbies !== null ? item.Hobbies : "---"}</td>
                                <td>{item.Charges && item.Charges !== null ? item.Charges : "---"}</td>
                                <td className="videocell">{item.Video && item.Video !== null ? item.Video : "---"}</td>
                                <td>{item.Specialization && item.Specialization !== null ? item.Specialization : "---"}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            ) : (
                <p className="nodatafound">No data found</p>
            )}
        </div>
    );
};

export default DisplayDirectory