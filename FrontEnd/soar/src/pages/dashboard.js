import React from 'react';
import Sidebar from '../components/sidebar';

//css
import '../css/dashboard.css'
import '../css/variables.css'

//images
import dbbg from '../images/sky.png'
import circle from '../images/circle.png'
const Dashboard = () => {
    return (
        <div>
            <Sidebar />
            <div className="dashboard_container">
                <img id='dbbackground' src={dbbg} alt="bg" />
                <div className="soar">
                    <div class="circle-container">
                        <div class="rotating-border">
                            <div class="circling-circle"></div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Dashboard;
