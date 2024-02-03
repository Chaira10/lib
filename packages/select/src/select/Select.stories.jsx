import React, { useState } from "react";
import { action } from "@storybook/addon-actions";
import { Select } from "./Select";
import "./Select.css";
import PropTypes from "prop-types";

export default {
    title: "Select",
    component: Select,
    parameters: {
    layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
    id: { control: "text" }, // Contrôle de type texte pour la prop id
    name: { control: "text" }, // Contrôle de type texte pour la prop name
    onChange: { control: null }, // Désactive le contrôle pour la prop onChange car elle est gérée par l'événement
    },
};

const options = ["Option 1", "Option 2", "Option 3"];

export const SelectWithState = () => {
    const [selectedValue, setSelectedValue] = useState("");

    const handleChange = (event) => {
    const { value } = event.target;
    setSelectedValue(value);
    action("selected")(event); // Enregistre l'événement onChange
    };

    return (
    <Select
        id="select"
        name="select"
        value={selectedValue}
        onChange={handleChange}
        placeholder="Choose an option"
        options={options}
    />
    );
};
