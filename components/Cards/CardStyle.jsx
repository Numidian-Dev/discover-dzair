import styled from "styled-components/native";
import { colors } from "../Styled/MyColors";


export const ContainerCard = styled.View`
flex-direction: row;
margin-left: 15px;
margin-bottom: 20px;
`

export const Overlay = styled.View`
width: 100%; 
height: 100%; 
background: rgba(0, 0, 0, 0.189); 
border-radius: 10px; 
`

export const TextOverlay = styled.Text`
color: white; 
font-weight: bold; 
font-size: 25px;
position: absolute;
bottom: 20px; 
left: 20px;
`