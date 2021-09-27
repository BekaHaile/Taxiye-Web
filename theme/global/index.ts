import { createGlobalStyle } from "styled-components";
import theme from "../main";
import "antd/dist/antd.css";

import colors from "../main/colors";

const GlobalStyle = createGlobalStyle`
::selection {
  color: ${theme.colors.primaryTextColor} !important;
  background: ${theme.colors.primaryTextColor} !important;
}

body, html {
  height: 100%;
  margin: 0 !important;
  color:${theme.colors.primaryTextColor}; 
}
h1, h2, h3, h4, h5, h6 {
  color:${theme.colors.primaryTextColor}; 
}
a{
  &:hover {
    color: ${theme.colors.primary};
  }
}
.pickers{
  width: -webkit-fill-available !important;
}
.MuiInput-underline {
  border-bottom: 1px solid #666 !important;
}
.MuiInput-underline:before {
  border-bottom: 1px solid #666 !important;
}
.MuiInput-underline:after {
  border-bottom: 1px solid ${theme.colors.primary} !important;
}
.MuiInput-underline:hover {
  border-bottom: 1px solid ${theme.colors.primary} !important;
}
.MuiPickersCalendarHeader-transitionContainer {
  order:-1;
  text-align:left !important;
}
/*
.MuiTypography-root {
  text-align:left !important;
}*/
.MuiPickersCalendar-week {
  justify-content: space-between;
}
.MuiSvgIcon-root {
  /*fill: ${theme.colors.primary} !important;*/
}
.MuiIconButton-root {
padding:12px 0px !important;
}
.MuiPickersCalendarHeader-dayLabel {
color:${theme.colors.primaryTextColor} !important;
}
.MuiPickersCalendar-transitionContainer {
  padding: 0px 20px;
}



.MuiPickersCalendarHeader-daysHeader {
  padding:0px 20px;
  justify-content: space-between;
}

.MuiPickersDay-daySelected {
  color: ${theme.colors.white};;
  font-weight: 500;
  background-color: ${theme.colors.primary} !important;
}

.MuiPickersCalendarHeader-switchHeader{
  padding:5px 20px;
}




.MuiStepIcon-root.MuiStepIcon-completed {
  color: #20AA46 !important;
}

.MuiStepIcon-root.MuiStepIcon-active {
  color: ${theme.colors.primary} !important;
}
.MuiStepLabel-root {
  margin-left: -70px !important;
}
.MuiStepConnector-alternativeLabel {
  left: calc(-50% + -10px) !important;
  right: calc(50% + 60px) !important;
 
}

.MuiStepLabel-label {
  color: rgba(44, 44, 44, 0.54) !important;
}
.MuiStepLabel-label.MuiStepLabel-active {
  color: rgba(44, 44, 44, 0.87) !important;
  
}

.MuiStep-horizontal {
  padding-left: 0px !important;
  padding-right: 0px !important;
}

.MuiStepper-root {
  padding: 40px 0px 30px 0px !important;
}

.intl-tel-input.allow-dropdown input[type=tel] {
  padding-left:95px;
  height:43px;
  width:350px;
  border: 2px solid #ccc;
  border-radius:4px;
  margin-top:10px;
}
.intl-tel-input .flag-container .arrow.down:after {
  content: url(${require("../../assets/icons/phone-dropdown.svg")});
}
.intl-tel-input.allow-dropdown .selected-flag {
  width: 60px;
}
.intl-tel-input .flag-container .arrow.up:after {
  content: url(${require("../../assets/icons/phone-dropdown.svg")});
  display: inline-block;
  transform: rotate(180deg);
}

.intl-tel-input {
  margin-top: 10px; 
}
.intl.intl-tel-input {
  margin-top: 10px; 
}
.intl-tel-input.allow-dropdown input[type=tel]:focus {
  
  border: 2px solid ${colors.primary};
  border-radius:4px;
  
  outline:none;
}

.rec-item-wrapper{
  padding:0px !important;
}
.rec-pagination{
  padding-top:15px;
  margin:0px;
}

.kGrYtS {
 
  margin-top: 0px !important;
}
.rec-arrow:disabled {
  cursor: not-allowed;
}

.rec-arrow{
    box-sizing: border-box;
    -webkit-transition: all 0.3s ease;
    transition: all 0.3s ease;
    font-size: 1.6em;
    background-color: rgba(103,58,183,0.1);
    color: #999;
    box-shadow: 0 0 2px 0px #333;
    border-radius: 50%;
    border: none;
    padding: 0;
    width: 50px;
    height: 50px;
    min-width: 50px;
    line-height: 50px;
    -webkit-align-self: center;
    -ms-flex-item-align: center;
    /* align-self: center; */
    cursor: pointer;
    outline: none;

}
/*
.rec-carousel-item{
  padding-top:60px;
  z-index:10px;

}

div:nth-of-type(even).rec-carousel-item-visible {
  background: blue;
}
*/

.rec-carousel-wrapper {
  padding-top:60px;

}

.react-tel-input .flag-dropdown {
 border-right:none;
 background-color:${theme.colors.white};;
 -webkit-border-radius: 3px 0 0 3px;
border-radius: 5px 0 0 5px;
}
p,h1,h2,h3,h4,h5,h6{
  margin:0px;
  padding:0px;
}

.react-tel-input .form-control {
  width:100px;
  height: 45px;
  border-right:none;
  border-radius: 5px 0px 0px 5px;
  pointer-events: none;
}
.react-tel-input .selected-flag .arrow {
  width: 8px;
  margin-left: 4px;
}
.react-tel-input {
  font-family: 'Open',sans-serif;
  
  width: 100px;
}

.slick-slide.slick-active.slick-center.slick-current  {
  transform:scale(1);
  margin-top:-20px;
  margin-left: -110px;
}
.slick-slide.slick-active.slick-center.slick-current p  {
  width:500px;
}
.slick-slide.slick-active.slick-center.slick-current .testimony-header  {
  padding-bottom:20px;
}
.slick-slide.slick-active.slick-center.slick-current .testimony-image  {
  padding-bottom:15px;
}
.slick-slide.slick-active.slick-center.slick-current .testimony-name  {
  padding-bottom:5px;
}
.slick-slide.slick-active.slick-center.slick-current .testimony-text  {
  padding-bottom:20px;
}
.slick-slide.slick-active.slick-center.slick-current .testimony-container  {
  padding:30px 40px;
}
.slick-prev:before {
  content: url(${require("../../assets/icons/prev.svg")});
}

.slick-next:before {
  content: url(${require("../../assets/icons/next.svg")});
}
.rec-arrow-right{
  content: none;
}
.rec-arrow-left{
  content: none;
}
.rec-arrow-right:before{
  content: url(${require("../../assets/icons/next.svg")});
}
.rec-arrow-left:before{
  content: url(${require("../../assets/icons/prev.svg")});
}


.slick-slide {
  visibility: hidden !important;
}
.slick-active {
  visibility: visible !important;
  
}
.slick-next {
  right: 0px;
}
.slick-prev {
  left: 0px;
}

.slick-list {
  margin:auto;
  width: 1060px !important;
  padding: 25px 30px !important;
}

.slick-prev:before,
.slick-next:before {
  color: ${theme.colors.primary}
}

.slick-dots li.slick-active button:before {
  opacity: .75;
  color: ${theme.colors.primary}
}
.slick-dots li button:before {

  opacity: .25;
  color: ${theme.colors.primary}

  font-size: x-small;

}

  html,body {
    height: 100%;
    width: 100%;
    margin:0px;
    padding:0px;
    background: ${theme.colors.white};;
    font-family: 'Open Sans', sans-serif;
  }
  a, button, img {
    cursor: pointer;
  }
  .rec.rec-arrow, .rec-arrow-right:hover:enabled, .rec-arrow-right:focus:enabled,  rec-arrow-left:hover:enabled, .rec-arrow-leftfocus:enabled {
    border: none;
    width: 0;
    height: 0;
    color: ${theme.colors.primary} !important;
    background: transparent;
  }

  /* disable default outline on focused items */
  /* add custom outline on focused items */
  .rec-carousel-item:focus {
    outline: none;
  }

  .rec-dot.rec-dot_active {
    background-color: ${theme.colors.primary} !important;
    width: 7px;
    height: 7px;
    box-shadow: none;
  }

  .rec-dot {
    width: 7px !important;
    height: 7px !important;
    box-shadow: none !important;
    background-color: ${theme.colors.secondaryTextColor} !important;
  }

  #floating-button{	
  position:fixed;
	width:50px;
	height:50px;
	bottom:30px;
	right:30px;
	background-color:${theme.colors.primary};
	border-radius:50px;
	text-align:center;
  z-index:100;
  opacity: 1;
  transition: opacity 0.5s ease-in;
  cursor:pointer;
}

  #floating-button.hidden {
    opacity: 0;
    transition: opacity 0.5s ease-out;
  }

  #text-on-floating-button{	
    cursor:pointer;
    position:fixed;
    padding: 5px 20px;
    bottom:100px;
    right:30px;
    background-color:${theme.colors.primary};
    font-family: Open Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 19px;
    text-align: center;
    color: ${theme.colors.white};;
    border-radius:20px;
    text-align:center;
    z-index:100;
    opacity: 1;
    transition: opacity 0.5s ease-in;
  }
    #text-on-floating-button.hidden {
      opacity: 0;
      transition: opacity 0.5s ease-out;
    }


    .lds-hourglass {
      display: inline-block;
      position: relative;
      width: 80px;
      height: 80px;
    }
    .lds-hourglass:after {
      content: " ";
      display: block;
      border-radius: 50%;
      width: 0;
      height: 0;
      margin: 8px;
      box-sizing: border-box;
      border: 32px solid ${theme.colors.primary};
      border-color: ${theme.colors.primary} transparent ${
  theme.colors.primary
} transparent;
      animation: lds-hourglass 1.2s infinite;
    }
    @keyframes lds-hourglass {
      0% {
        transform: rotate(0);
        animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
      }
      50% {
        transform: rotate(900deg);
        animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
      }
      100% {
        transform: rotate(1800deg);
      }
    }
    #hidden-tab{
      max-height: 60px;
      transition: max-height 0.5s ease-out;
      overflow: hidden;
    }
    #shown-tab{
      max-height: auto;
      transition: max-height 0.5s ease-in;
     
    }
    .MuiListItem-root.Mui-selected {
      background-color: ${theme.colors.primary} !important;
      border-radius:5px;
      color:white;
  }
  .activeCard{
    border: 2px solid ${theme.colors.primary} !important;

  }

  @-webkit-keyframes spin {
    0% { -webkit-transform: rotate(0deg); }
    100% { -webkit-transform: rotate(360deg); }
  }
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  button:disabled, div.disabled{
    opacity:0.5;
    cursor:not-allowed;
  }

  .MuiRating-root {
    color: ${theme.colors.primary} !important;
  }

.MuiRating-iconEmpty {
  color: rgba(0, 0, 0, 0.26) !important;
}




/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 4px grey; 
  border-radius: 10px;
  
  
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: ${theme.colors.primary}; 
  border-radius: 5px;
}
::-webkit-scrollbar {
  width: 3px;
  height:3px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: ${theme.colors.primary};
  opacity:0.2; 
}

select{
  outline-color: ${theme.colors.primary}
  
}
.defaultDropDown {
  position: relative;
  
}
.defaultDropDown:after {
  content: url(${require("../../assets/icons/drop-down-icon.svg")});
  
  color:${theme.colors.primaryTextColor};;

  right: 20px;
  top: 22px;
  padding: 0 0 2px;  
  position: absolute;
  pointer-events: none;
}
.defaultDropDown select{
    -webkit-appearance: none !important;
    -moz-appearance: none !important;
    appearance: none !important;
  }

  .ant-tabs-top > .ant-tabs-nav {
    margin: 0px 0 40px 0 !important;
}

#map_info_container{
  position: absolute;
  right: -500px;
  opacity: 0;
overflow:hidden;
  -webkit-transition: all 0.5s ease;
  -moz-transition: all 0.5s ease;
  -ms-transition: all 0.5s ease;
  -o-transition: all 0.5s ease;
  transition: all 0.5s ease;
}
#map_info_container.active{
  opacity: 1;
  right: 0;
}

.group_radio .ant-radio{
  margin:auto !important;
}

.bottom_menu_items{
  bottom: 20px;
  position: absolute;
  width: 100%;
}

#nprogress .bar{
  background-color:${theme.colors.primary};
}


.antd-country-phone-input .ant-select-selector {
  border:none !important;
}


.desktop-article-view{
  display:block;
  @media (max-width: 768px) {
    display:none;
  }
}
.mobile-article-view{
  display:none;
  @media (max-width: 768px) {
    display:block;
  }
}


.desktop-view{
  display:block;
  @media (max-width: 768px) {
    display:none;
  }
}
.mobile-view{
  display:none;
  @media (max-width: 768px) {
    display:block;
  }
}


.first-bar.active{
  -webkit-transform: rotate(-45deg) translate(-9px, 6px);
  transform: rotate(-45deg) translate(-9px, 6px);
}
.second-bar.active{
  opacity: 0;
}
.third-bar.active{
  -webkit-transform: rotate(45deg) translate(-8px, -8px);
  transform: rotate(45deg) translate(-8px, -8px);
}

`;

export default GlobalStyle;
