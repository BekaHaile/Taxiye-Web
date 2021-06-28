import React, { useRef, useState } from "react";
import styled from "styled-components";
import {
  SecondarySection,
  SectionTitle,
  CenteredText,
  SectionHeaderContainer,
} from "../../section";
import { Button } from "../../form/buttons/primary-button";
import MapViewer from "./map";
import Infos from "./info";

const MapInfoContainer = styled("div")`
  text-align: center;
  justify-content: center;
  position: absolute;
  right: 0px;
  top: 0px;
  margin: auto;
  background-color: #fff;
  width: 400px;
  height: -webkit-fill-available;
`;

const SectionTitleOnStart = styled(SectionTitle)`
  text-align: start;
  width: 100%;
`;

const CenteredTextOnStart = styled(CenteredText)`
  text-align: start;
  width: 100%;
  max-width: inherit;
`;

const FullSectionHeaderContainer = styled(SectionHeaderContainer)`
  width: 100%;
`;
const MapContainer = styled("div")`
  position: relative;
  overflow: hidden;
`;

const CustomButton = styled(Button)`
  margin-top: 20px;
`;

const MapView = ({ offices, title, subTitle, socialMedias }) => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [directionAction, setDirection] = useState(null);
  const myref = useRef();
  return (
    <>
      <SecondarySection>
        <FullSectionHeaderContainer>
          <SectionTitleOnStart> {title} </SectionTitleOnStart>
          <CenteredTextOnStart> {subTitle} </CenteredTextOnStart>
        </FullSectionHeaderContainer>
      </SecondarySection>
      <MapContainer>
        <MapViewer
          directionAction={directionAction}
          setSelectedLocation={setSelectedLocation}
          offices={offices}
        />

        <MapInfoContainer
          id="map_info_container"
          className={selectedLocation != null ? "active" : "hidden"}
        >
          <Infos
            selectedLocation={selectedLocation}
            socialMedias={socialMedias}
          />

          {selectedLocation && (
            <CustomButton
              onClick={() => {
               
                  setDirection({
                    lat: selectedLocation.lat,
                    lng: selectedLocation.lng,
                  });
              }}
            >
              Get directions
            </CustomButton>
          )}
        </MapInfoContainer>
      </MapContainer>
    </>
  );
};

export default MapView;
