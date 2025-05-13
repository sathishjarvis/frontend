import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbars from "./Navbars";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import Table from 'react-bootstrap/Table';
// import { useNavigate } from "react-router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import Footer from "./Footer";

const Directory = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [filteredData, setfilteredData] = useState([]);
    const [searchTerm, setSearchTerm] = useState("")

    // const navigate = useNavigate();

    //for edit the data directory
    const [editId, setEditId] = useState(null);
    const [editData, setEditData] = useState({});


    // Fetch Data Function
    const fetchData = async () => {
        try {
            const response = await axios.get("http://localhost:4000/directory/list");
            setData(response.data);
            setLoading(false);
            setfilteredData(response.data);
        } catch (err) {
            setError(err.message);
            setLoading(false);
        }
    };

    // Fetch data when component mounts
    useEffect(() => {
        fetchData();
    }, []);

    // Handle Loading & Error States 
    if (loading) return <p className="loading">Loading...</p>;
    if (error) return <p className="error">Error: {error.message}</p>;


    const handleRowClick = (item) => {
        setEditId(item._id);
        setEditData(item);
    };

    const handleChange = (e) => {
        setEditData({ ...editData, [e.target.name]: e.target.value });
    };


    const handleUpdate = async () => {
        await axios.put(`http://localhost:4000/directory/list/${editId}`, editData);
        setData(data.map((user) => (user._id === editId ? editData : user)));
        setEditId(null);
    }

    const handleDelete = async (id) => {

        const confirmDelete = window.confirm("Are you sure you want to delete?");
        if (confirmDelete) {
            try {
                await axios.delete(`http://localhost:4000/directory/list/${id}`);
                // Update the state
                setData(data.filter((user) => user._id !== id));
            } catch (error) {
                console.error("Delete failed:", error);
            }
        }

    }


    return (
        <div className="mt-2">
            <Navbars />
            <h2 className="p-3 filter">Directory List</h2>
            <input type="text" name="column" id="search" placeholder="search here" onChange={(e) => setSearchTerm(e.target.value)} className="rounded" />
            <div className="d-flex gap-2 mb-2 mt-2 justify-content-center">
                <Link to="/directory/add">
                    <Button variant="primary" size="lg">
                        <FontAwesomeIcon icon={faUserPlus} className="me-2" />
                        Add data
                    </Button>
                </Link>
            </div>
            {filteredData.length > 0 ? (
                <Table bordered hover responsive="sm lg" style={{ "width": "100%" }}>
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
                            <tr key={i} onDoubleClick={() => handleRowClick(item)}>
                                <td>{editId === item._id ? (<div className="d-flex"><button className="edited" onClick={handleUpdate}>save</button><button className="edited ms-1" onClick={() => handleDelete(item._id)}>delete</button></div>) : (i + 1)}</td>
                                <td>{editId === item._id ? (
                                    <input type="text" name="Name" placeholder="enter name" value={editData.Name} onChange={handleChange} className="form-control transparent" />
                                ) : (item.Name && item.name !== null ? item.Name : "-")}</td>
                                <td>{editId === item._id ? (
                                    <input type="text" name="Phone" placeholder="enter phone" value={editData.Phone} onChange={handleChange} className="form-control transparent" />
                                ) : (item.Phone && item.Phone !== null ? item.Phone : "--")}</td>
                                <td>{editId === item._id ? (
                                    <input type="text" name="Profession" placeholder="enter Profession" value={editData.Profession} onChange={handleChange} className="form-control transparent" />
                                ) : (item.Profession && item.Profession !== null ? item.Profession : "--")}</td>
                                <td>{editId === item._id ? (
                                    <input type="text" name="Location" placeholder="enter Location" value={editData.Location} onChange={handleChange} className="form-control transparent" />
                                ) : (item.Location && item.Location !== null ? item.Location : "--")}</td>
                                <td className="langcell">{editId === item._id ? (
                                    <input type="text" name="Languages" placeholder="enter Languages" value={editData.Languages} onChange={handleChange} className="form-control transparent" />
                                ) : (item.Languages && item.Languages !== null ? item.Languages : "--")}</td>
                                <td>{editId === item._id ? (
                                    <input type="text" name="Hobbies" placeholder="enter Hobbies" value={editData.Hobbies} onChange={handleChange} className="form-control transparent" />
                                ) : (item.Hobbies && item.Hobbies !== null ? item.Hobbies : "--")}</td>
                                <td>{editId === item._id ? (
                                    <input type="text" name="Charges" placeholder="enter Charges" value={editData.Charges} onChange={handleChange} className="form-control transparent" />
                                ) : (item.Charges && item.Charges !== null ? item.Charges : "--")}</td>
                                <td className="videocell">{editId === item._id ? (
                                    <input type="text" name="Video" placeholder="enter Video" value={editData.Video} onChange={handleChange} className="form-control transparent" />
                                ) : (item.Video && item.Video !== null ? item.Video : "--")}</td>
                                <td>{editId === item._id ? (
                                    <input type="text" name="Specialization" placeholder="enter Specialization" value={editData.Specialization} onChange={handleChange} className="form-control transparent" />
                                ) : (item.Specialization && item.Specialization !== null ? item.Specialization : "--")}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            ) : (
                <p className="nodatafound">No data found</p>
            )}
            {/* {
                editId(user.id)
            } */}
            <section>
                <Footer />
            </section>
        </div>
    )
}

export default Directory