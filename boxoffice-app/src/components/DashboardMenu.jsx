import React from 'react';
import { Link } from 'react-router-dom';

const DashboardMenu = () => {
    return (
        <div className='DBNav'>
            <div className='DBUser'>
                {/* <img className="userImage" src="../src/assets/img/contact1.png" alt="User's photo" /> */}
                <h3>John Smith</h3>
            </div>
            <div className='DBMenu'>
                <div className="DBNavElement">
                    {/* <img className='imgMenu' src="../src/assets/img/icons/Icon_dashboard.png" alt="Dashboard icon" /> */}
                    <Link to="/dashboard">
                        <button className='DBNavButton'>Dashboard</button>
                    </Link>
                </div>
                <div className="DBNavElement">
                    <img className='imgMenu' src="../src/assets/img/icons/Icon_Invoices.png" alt="Invoices icon" />
                    <Link to="/dashboard-invoices">
                        <button className='DBNavButton'>Invoices</button>
                    </Link>
                </div>
                <div className="DBNavElement">
                    <img className='imgMenu' src="../src/assets/img/icons/Icon_contact.png" alt="Contacts icon" />
                    <Link to="/dashboard-contacts">
                        <button className='DBNavButton'>Contacts</button>
                    </Link>
                </div>
                <div className="DBNavElement">
                    <img className='imgMenu' src="../src/assets/img/icons/Icon_Companies.png" alt="Companies icon" />
                    <Link to="/dashboard-companies">
                        <button className='DBNavButton'>Companies</button>
                    </Link>
                </div>
            </div>
            <div className='DBLogout'>
                <img className="userImageLogout" src="../src/assets/img/contact1.png" alt="User's photo" />
                <button className='DBNavButton'>Logout</button>
            </div>
        </div>
    );
};

export default DashboardMenu;