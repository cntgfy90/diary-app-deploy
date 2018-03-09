import React from 'react';

const AlertMessage = ({ error }) => (
    <div className="Items__alert">
        {
            error &&
            <div className="alert alert-warning" role="alert">
                Please, provide some information!
            </div>
        }
    </div>
);

export default AlertMessage;