import React from "react";

type CustomFormProps = {
    label: string;
    type: string;
    name: string;
};

function CustomForm({label, type, name} : CustomFormProps) {
    return (
        <div className="custom-form-group">
            {type === 'textarea' ? (
                <textarea name={name} className="custom-form-input custom-form-textarea dark:text-gray-50" required />
            ) : (
                <input name={name} type={type} className="custom-form-input dark:text-gray-50" required />
            )}
            <span className="custom-form-highlight"></span>
            <span className="custom-form-bar"></span>
            <label className="custom-form-label">{label}</label>
        </div>
    );
}

export default CustomForm;
