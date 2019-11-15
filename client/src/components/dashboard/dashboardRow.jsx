import React from 'react';
import DashColorTile from './dashcolortile.jsx';

const DashboardRow = (props) => {
    return (
        <div>
            <div className='dash_companytile'>
                IBM
            </div>
                <DashColorTile/>
        </div>
    );
};

export default DashboardRow;