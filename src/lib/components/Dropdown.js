import React, { useState } from "react";
import "../style.css";

function Dropdown({ options, defaultOption, onChange }) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

    const toggling = () => setIsOpen(!isOpen);

    const onOptionClicked = (value) => () => {
        setSelectedOption(value);
        onChange(value);
        setIsOpen(false);
    };

    return (
        <div className="dropdown">
        <div className="dropdown-header" onClick={toggling}>
            {selectedOption || defaultOption}
        </div>
        {isOpen && (
            <div className="dropdown-select">
            <ul>
                {options.map((option) => (
                <li onClick={onOptionClicked(option.name)} key={option.key}>
                    {option.name}
                </li>
                ))}
            </ul>
            </div>
        )}
        </div>
    );
}


export default Dropdown;