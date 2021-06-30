import css from 'styled-jsx/css'
import theme from '../main';

export default css.global`
.map-autocomplete-dropdown{
    border-radius: 5px;
    background-color:#fff;
    filter: drop-shadow(0px 2px 5px rgba(0, 0, 0, 0.25));
    position:absolute;
    z-index:100;
    width: 400px;
    max-height:200px;
    overflow-x: hidden;

}
.suggestion-item{
    padding:5px 20px;
    cursor:pointer;
}
.suggestion-item.active{
    border-radius: 5px;
    background-color:${theme.colors.primary};
    color:white !important;
}
.suggestion-item:hover{
    border-radius: 5px;
    background-color:${theme.colors.primary};
    color:white !important;
}
`