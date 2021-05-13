import React from 'react';
import '../../css/Home.css';
import Header from '../Partials/Header';
import Home_Banner from '../Partials/Home_Banner';
import Home_Item from '../Partials/Home_Item';
import { useEffect, useState } from 'react';
import axios from 'axios';
import LoadingHome from '../../components/Effects/LoadingHome';



function Home() {
    const [studentList, setStudentList] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        axios.get(`https://5f7146ed64a3720016e603e1.mockapi.io/api/student`)
            .then(res => {
                setStudentList(res.data);
                setLoading(true);
            })
    }, []);
    return (
        <div>
            {loading ? (<div className="container-fluid pl-1 pr-1" style={{ overflowX: 'hidden' }}>
                <Header />
                <div style={{ width: '100%', paddingTop: '80px', paddingBottom: '70px' }}>
                    <Home_Banner />
                    <p className="ml-2 font-weight-bold mb-0 mt-2" style={{ fontSize: '120%', color: 'black' }}>Recent</p>
                    <Home_Item />
                </div>
                <div style={{ width: '100%', height: '50px', background: 'white', position: 'fixed', top: 'calc(100vh - 50px)' }}>
                </div>
            </div>
            ) : <LoadingHome />}
        </div>
    );
}

export default Home;