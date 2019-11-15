import React from 'react';

const DashModal = (props) => {
    return(
        <div className='dash-modal'>
            <div className='dash-modal-triangle'></div>
            <div className='dash-modal-elipse'>{props.test}</div>
        </div>
    )
}

export default DashModal;
