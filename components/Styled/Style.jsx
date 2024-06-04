
import { useColorScheme, SafeAreaView, } from "react-native";
import styled from "styled-components/native";
import { colors } from "./MyColors";


export const Container = styled.SafeAreaView`
flex: 1;
width: 100%;
height: 100%;
background-color: ${({ theme }) => theme === "dark" ? colors.black : colors.white};;
position: relative;
`

export const Text = styled.Text`
color: ${({ theme }) => theme === "dark" ? colors.grey : colors.dark};
`

export const ContainerTitle = styled.View`
width: 100%;
height: 80px;

align-items: center;
justify-content: center;
margin: 20px 0px 20px ;
`
export const Title = styled.Text`
color: ${({ color }) => color === "dark" ? colors.grey : colors.dark};
font-size: 30px;
font-weight:bold;

`
export const ContainerSettings = styled.View`
margin-bottom: 30px;
`

export const Setting = styled.ScrollView`
`
export const SettingsContents = styled.View`
background: #00000078;
position: absolute;
top: 0;
width: 100%;
height: 100%;
align-items: center;
justify-content: center;
`
export const Content = styled.View`

width: 80%;
height: 50%;
background-color: ${({ theme }) => theme === "dark" ? colors.blackSecondary : colors.greySecondary};
border-radius: 10px;

`

export const SubSetting = styled.Pressable`
margin-top: 25px;
`
export const SubTitle = styled.View`
width: 100%;
height: 50px;
justify-content: center;
background-color: ${({ theme }) => theme === "dark" ? colors.thidBlack : colors.greySecondary};
`


