import React, { useState } from "react";
import { Input, FormGroup, Icon, LabelText, InputWrapper } from "./inputs";
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng,
} from 'react-places-autocomplete';
import styles from "../../theme/global/place-autocomplete";
const searchOptions = { componentRestrictions: { country: ['et'] } }

export default function LocationInput({ address, label, placeholder, id, icon, action }) {
    const [add, setAddress] = useState(address);
    const active = require("../../assets/icons/location-white.svg");
    const inactive = require("../../assets/icons/location.svg");
    const handleSelect = address => {
        setAddress(address);
        geocodeByAddress(address)
            .then(results => getLatLng(results[0]))
            .then(latLng => action(latLng, address))
            .catch(error => console.error('Error', error));
    };
    return (
        <>
            <FormGroup>
                <style jsx global>
                    {styles}
                </style>
                {icon && <Icon src={icon} />}
                <InputWrapper>
                    <LabelText htmlFor={id}> {label} </LabelText>
                    <PlacesAutocomplete
                        value={add}
                        onChange={(value) => setAddress(value)}
                        onSelect={(value) => handleSelect(value)}
                        searchOptions={searchOptions}
                    >
                        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                            <div>
                                <Input
                                    {...getInputProps({
                                        placeholder: placeholder,
                                        className: 'no-margin',

                                    })}
                                    type="search"
                                />
                                <div className={suggestions.length > 0 ? "map-autocomplete-dropdown" : ""}>

                                    {suggestions.map((suggestion, index) => {
                                        const className = suggestion.active
                                            ? 'suggestion-item active'
                                            : 'suggestion-item';
                                        return (
                                            <div
                                                key={index}
                                                {...getSuggestionItemProps(suggestion, {
                                                    className,
                                                })}
                                            >
                                                <FormGroup>
                                                    <Icon src={suggestion.active ? active : inactive} />
                                                    <InputWrapper>
                                                        <div>{suggestion.formattedSuggestion.mainText}</div>
                                                        <div>{suggestion.description}</div>
                                                    </InputWrapper>
                                                </FormGroup>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        )}
                    </PlacesAutocomplete>
                </InputWrapper>
            </FormGroup>


        </>

    )

}