import React, { useEffect, useState } from "react";
import axios from "axios";

const Table = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [filteredData, setfilteredData] = useState([]);


    // Fetch Data Function
    const fetchData = async () => {
        try {
            const response = await axios.get("https://dummyjson.com/c/674a-4098-483e-80a1");
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
    if (error) return <p className="error">Error: {error}</p>;



    //search here
    const handleSearch = (e) => {
        const searchText = e.target.value.toLowerCase();
        const filteringData = data.filter((datas) => datas.first_name.toLowerCase().includes(searchText) || datas.last_name.toLowerCase().includes(searchText) ||
            datas.email.toLowerCase().includes(searchText) || datas.gender.toLowerCase().includes(searchText) || datas.city.toLowerCase().includes(searchText) ||
            datas.phone_number.includes(searchText));
        setfilteredData(filteringData);
        console.log(searchText, filteringData);
    }



    return (
        <div className="mt-5">
            <h2 className="p-3 filter">Fetched Data</h2>
            <input className="filter" type="text" name="column" id="search" placeholder="search here" onChange={handleSearch} />
            {filteredData.length > 0 ? (
                <table className="mt-5 ">
                    <thead>
                        <tr>
                            <th>s.no</th>
                            <th>first_name</th>
                            <th>last_name</th>
                            <th>email</th>
                            <th>gender</th>
                            <th>city</th>
                            <th>phone number</th>
                        </tr>
                    </thead>

                    <tbody>
                        {filteredData.map((item, i) => (
                            <tr key={i}>
                                <td>{item.s_no}</td>
                                <td>{item.City}</td>
                                <td>{item.locality}</td>
                                <td>{item.Profession}</td>
                                <td>{item.Name}</td>
                                <td>{item.phone}</td>
                                <td>{item.expirence}</td>
                                <td>{item.language}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p className="nodatafound">No data found</p>
            )}
        </div>
    );
};

export default Table;
