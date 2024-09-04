import React from "react";

type CustomFormProps = {
    label: string;
    type: string;
};

function CustomForm({label, type} : CustomFormProps) {
    return (
        <div className="custom-form-group">
            {type === 'textarea' ? (
                <textarea className="custom-form-input custom-form-textarea dark:text-gray-50" required />
            ) : (
                <input type={type} className="custom-form-input dark:text-gray-50" required />
            )}
            <span className="custom-form-highlight"></span>
            <span className="custom-form-bar"></span>
            <label className="custom-form-label">{label}</label>
        </div>
    );
}

export default CustomForm;
