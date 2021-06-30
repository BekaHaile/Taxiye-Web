import React, { useState } from "react";
import { Input, FormGroup, Icon, LabelText, InputWrapper } from "./inputs";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import styles from "../../theme/global/place-autocomplete";
import { Loader } from "../loading/loading";
import styled from "styled-components";
const searchOptions = { componentRestrictions: { country: ["et"] } };

const LoadingContainer = styled("div")`
  position: absolute;
  right: -20px;
  top:50%;
  width:50px;
  height:50px;
`;

const Container = styled("div")`
  position: relative;
`;

export default function LocationInput({
  address,
  label,
  placeholder,
  id,
  icon,
  action,
  value
}) {
  const [add, setAddress] = useState(address);
  const active = require("../../assets/icons/location-white.svg");
  const inactive = require("../../assets/icons/location.svg");
  const handleSelect = (address) => {
    setAddress(address);
    geocodeByAddress(address)
      .then((results) => getLatLng(results[0]))
      .then((latLng) => action(latLng, address))
      .catch((error) => console.error("Error", error));
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
            {({
              getInputProps,
              suggestions,
              getSuggestionItemProps,
              loading,
            }) => (
              <Container>
                <Input
                  {...getInputProps({
                    placeholder: placeholder,
                    className: "no-margin",
                  })}
                  type="search"
                />
                <LoadingContainer>
                  {loading && (
                      <Loader />
                  )}
                </LoadingContainer>
                <div
                  className={
                    suggestions.length > 0 ? "map-autocomplete-dropdown" : ""
                  }
                >
                  {suggestions.map((suggestion, index) => {
                    const className = suggestion.active
                      ? "suggestion-item active"
                      : "suggestion-item";
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
              </Container>
            )}
          </PlacesAutocomplete>
        </InputWrapper>
      </FormGroup>
    </>
  );
}
