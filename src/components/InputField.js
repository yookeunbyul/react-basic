import React from 'react';

const InputField = ({
    type,
    placeholder,
    value,
    onChange,
    errorMessage
}) => {
    return (
        <React.Fragment>
            <input
                style={{borderColor: 'red'}}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            /><br />
            <div style={{color : 'red'}}>{errorMessage}</div>
        </React.Fragment>
    );
}

export default InputField;