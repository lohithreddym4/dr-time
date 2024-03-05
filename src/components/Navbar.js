import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
    const [check, setCheck] = useState(false);

    function popUp() {
        setCheck(!check);
    }
    return (
        <nav className="navbar">
            <div className='pack-1'>
                <div className='loggo'>
                    <div className='logo'>
                        Doc Time!
                    </div>
                    <div className='caption'>
                        don't wait anymore...!
                    </div>
                </div>

                <div className='options'>
                    <Link to=''>Home</Link>
                    <Link to=''>Contact us</Link>
                    <Link to=''>About</Link>
                </div>
            </div>
            <div className="Profileout">
                <button className='profile' onClick={popUp}>
                    <i className="fa-regular fa-user"></i>
                </button>
                {
                    check && (
                    <div className="Popwindow">
                        <ul className="Nonelist">
                            <li><Link>Profile</Link></li>

                            <li><Link>My Appointments</Link></li>

                            <li><Link>Logout</Link></li>

                        </ul>
                    </div>
                    )
                }
            </div>
        </nav>
    )
}

export default Navbar