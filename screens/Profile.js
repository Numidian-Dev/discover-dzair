import React, { useContext, useState } from "react";
import { View, StyleSheet, useColorScheme, Pressable } from "react-native";
import { useRoute } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { useIsFocused } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";
import {
  Container,
  ContainerTitle,
  SubTitle,
  Text,
  Title,
  ContainerSettings,
  SubSetting,
  Setting,
  SettingsContents,
  Content,
} from "../components/Styled/Style";
import { colors } from "../components/Styled/MyColors";
import { context } from "../context/context";
import NavBar from "../components/NavBar/NavBar";

const Profile = () => {
  const { changeApparence, apparence } = useContext(context);
  const [index, setIndex] = useState(0);

  const toggle = (index) => {
    setIndex(index);
  };

  const route = useRoute();
  const nameScreen = route.name;

  const schemeColor = useColorScheme();

  const colorScheme =
    apparence === "Default"
      ? schemeColor
      : apparence === "Dark"
      ? "dark"
      : "light";
  return (
    <Container theme={colorScheme}>
      <Setting>
        <ContainerTitle>
          <Title color={colorScheme}>Profile</Title>
        </ContainerTitle>
        <ContainerSettings>
          <SubTitle theme={colorScheme}>
            <Text
              style={{ marginLeft: 20, fontWeight: "bold", fontSize: 17 }}
              theme={colorScheme}
            >
              Settings
            </Text>
          </SubTitle>
          <SubSetting
            style={{
              borderBottomColor:
                colorScheme === "dark"
                  ? colors.thidBlack
                  : colors.greySecondary,
              borderBottomWidth: 2,
            }}
            onPress={() => toggle(1)}
          >
            <Text
              style={{
                marginBottom: 10,
                marginLeft: 20,
                fontSize: 15,
                fontWeight: "bold",
              }}
              theme={colorScheme}
            >
              Profil
            </Text>
          </SubSetting>
          <SubSetting
            style={{
              borderBottomColor:
                colorScheme === "dark"
                  ? colors.thidBlack
                  : colors.greySecondary,
              borderBottomWidth: 2,
              justifyContent: "space-between",
              flexDirection: "row",
            }}
            onPress={() => toggle(2)}
          >
            <Text
              style={{
                marginBottom: 10,
                marginLeft: 20,
                fontSize: 15,
                fontWeight: "bold",
              }}
              theme={colorScheme}
            >
              Apparence
            </Text>
            <Text theme={colorScheme} style={{ marginRight: 20 }}>
              {apparence}
            </Text>
          </SubSetting>
          <SubSetting
            style={{
              borderBottomColor:
                colorScheme === "dark"
                  ? colors.thidBlack
                  : colors.greySecondary,
              borderBottomWidth: 2,
              justifyContent: "space-between",
              flexDirection: "row",
            }}
            onPress={() => toggle(3)}
          >
            <Text
              style={{
                marginBottom: 10,
                marginLeft: 20,
                fontSize: 15,
                fontWeight: "bold",
              }}
              theme={colorScheme}
            >
              Langages
            </Text>
            <Text theme={colorScheme} style={{ marginRight: 20 }}>
              English
            </Text>
          </SubSetting>
        </ContainerSettings>
        <ContainerSettings>
          <SubTitle theme={colorScheme}>
            <Text
              style={{ marginLeft: 20, fontWeight: "bold", fontSize: 17 }}
              theme={colorScheme}
            >
              Helps
            </Text>
          </SubTitle>
          <SubSetting
            style={{
              borderBottomColor:
                colorScheme === "dark"
                  ? colors.thidBlack
                  : colors.greySecondary,
              borderBottomWidth: 2,
            }}
          >
            <Text
              style={{
                marginBottom: 10,
                marginLeft: 20,
                fontSize: 15,
                fontWeight: "bold",
              }}
              theme={colorScheme}
            >
              About us
            </Text>
          </SubSetting>
          <SubSetting
            style={{
              borderBottomColor:
                colorScheme === "dark"
                  ? colors.thidBlack
                  : colors.greySecondary,
              borderBottomWidth: 2,
            }}
          >
            <Text
              style={{
                marginBottom: 10,
                marginLeft: 20,
                fontSize: 15,
                fontWeight: "bold",
              }}
              theme={colorScheme}
            >
              Contact
            </Text>
          </SubSetting>
        </ContainerSettings>
        <ContainerSettings>
          <SubTitle theme={colorScheme}>
            <Text
              style={{ marginLeft: 20, fontWeight: "bold", fontSize: 17 }}
              theme={colorScheme}
            >
              Helps
            </Text>
          </SubTitle>
          <SubSetting
            style={{
              borderBottomColor:
                colorScheme === "dark"
                  ? colors.thidBlack
                  : colors.greySecondary,
              borderBottomWidth: 2,
            }}
          >
            <Text
              style={{
                marginBottom: 10,
                marginLeft: 20,
                fontSize: 15,
                fontWeight: "bold",
              }}
              theme={colorScheme}
            >
              General Conditions Of Use
            </Text>
          </SubSetting>
          <SubSetting
            style={{
              borderBottomColor:
                colorScheme === "dark"
                  ? colors.thidBlack
                  : colors.greySecondary,
              borderBottomWidth: 2,
            }}
          >
            <Text
              style={{
                marginBottom: 10,
                marginLeft: 20,
                fontSize: 15,
                fontWeight: "bold",
              }}
              theme={colorScheme}
            >
              Legal Mention
            </Text>
          </SubSetting>
          <SubSetting
            style={{
              borderBottomColor:
                colorScheme === "dark"
                  ? colors.thidBlack
                  : colors.greySecondary,
              borderBottomWidth: 2,
            }}
          >
            <Text
              style={{
                marginBottom: 10,
                marginLeft: 20,
                fontSize: 15,
                fontWeight: "bold",
              }}
              theme={colorScheme}
            >
              Confidentiality
            </Text>
          </SubSetting>
        </ContainerSettings>

        <View
          style={{ marginBottom: 110, marginLeft: 20, flexDirection: "row" }}
        >
          <Entypo name="log-out" size={24} color={colors.red} />
          <Text
            style={{
              color: colors.red,
              fontSize: 15,
              fontWeight: "bold",
              marginLeft: 10,
            }}
          >
            Sign out
          </Text>
        </View>
      </Setting>
      <SettingsContents style={{ display: index != 0 ? "flex" : "none" }}>
        <Content
          theme={colorScheme}
          style={{ display: index === 2 ? "flex" : "none" }}
        >
          <Pressable
            style={{ position: "absolute", right: 20, top: 20 }}
            onPress={() => toggle(0)}
          >
            <FontAwesome6
              name="xmark"
              size={30}
              color={colorScheme === "dark" ? colors.black : colors.grey}
            />
          </Pressable>
          <ContainerTitle>
            <Title color={colorScheme}>Apparence</Title>
          </ContainerTitle>
          <View>
            <SubSetting
              style={{
                borderBottomColor:
                  colorScheme === "dark"
                    ? colors.fourthBlack
                    : colors.thirdGrey,
                borderBottomWidth: 2,

                flexDirection: "row",
              }}
              onPress={() => changeApparence("Default")}
            >
              <View
                style={{
                  backgroundColor: "transparent",
                  width: 20,
                  height: 20,
                  borderRadius: 50,
                  marginLeft: 20,
                  borderWidth: 3,
                  borderColor:
                    apparence === "Default" ? colors.green : colors.grey,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <View
                  style={{
                    backgroundColor:
                      apparence === "Default" ? colors.green : colors.grey,
                    width: 7,
                    height: 7,
                    borderRadius: 50,
                  }}
                />
              </View>
              <Text
                style={{
                  marginBottom: 10,
                  marginLeft: 20,
                  fontSize: 15,
                  fontWeight: "bold",
                }}
                theme={colorScheme}
              >
                Default
              </Text>
            </SubSetting>
            <SubSetting
              style={{
                borderBottomColor:
                  colorScheme === "dark"
                    ? colors.fourthBlack
                    : colors.thirdGrey,
                borderBottomWidth: 2,
                flexDirection: "row",
              }}
              onPress={() => changeApparence("Dark")}
            >
              <View
                style={{
                  backgroundColor: "transparent",
                  width: 20,
                  height: 20,
                  borderRadius: 50,
                  marginLeft: 20,
                  borderWidth: 3,
                  borderColor:
                    apparence === "Dark" ? colors.green : colors.grey,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <View
                  style={{
                    backgroundColor:
                      apparence === "Dark" ? colors.green : colors.grey,
                    width: 7,
                    height: 7,
                    borderRadius: 50,
                  }}
                />
              </View>
              <Text
                style={{
                  marginBottom: 10,
                  marginLeft: 20,
                  fontSize: 15,
                  fontWeight: "bold",
                }}
                theme={colorScheme}
              >
                Dark
              </Text>
            </SubSetting>
            <SubSetting
              style={{
                borderBottomColor:
                  colorScheme === "dark"
                    ? colors.fourthBlack
                    : colors.thirdGrey,
                borderBottomWidth: 2,
                flexDirection: "row",
              }}
              onPress={() => changeApparence("Light")}
            >
              <View
                style={{
                  backgroundColor: "transparent",
                  width: 20,
                  height: 20,
                  borderRadius: 50,
                  marginLeft: 20,
                  borderWidth: 3,
                  borderColor:
                    apparence === "Light" ? colors.green : colors.grey,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <View
                  style={{
                    backgroundColor:
                      apparence === "Light" ? colors.green : colors.grey,
                    width: 7,
                    height: 7,
                    borderRadius: 50,
                  }}
                />
              </View>

              <Text
                style={{
                  marginBottom: 10,
                  marginLeft: 20,
                  fontSize: 15,
                  fontWeight: "bold",
                }}
                theme={colorScheme}
              >
                Light
              </Text>
            </SubSetting>
          </View>
        </Content>
        <Content
          theme={colorScheme}
          style={{ display: index === 3 ? "flex" : "none" }}
        >
          <Pressable
            style={{ position: "absolute", right: 20, top: 20 }}
            onPress={() => toggle(0)}
          >
            <FontAwesome6
              name="xmark"
              size={30}
              color={colorScheme === "dark" ? colors.black : colors.grey}
            />
          </Pressable>
          <ContainerTitle>
            <Title color={colorScheme}>Langages</Title>
          </ContainerTitle>
          <View>
            <SubSetting
              style={{
                borderBottomColor:
                  colorScheme === "dark"
                    ? colors.fourthBlack
                    : colors.thirdGrey,
                borderBottomWidth: 2,

                flexDirection: "row",
              }}
            >
              <View
                style={{
                  backgroundColor: "transparent",
                  width: 20,
                  height: 20,
                  borderRadius: 50,
                  marginLeft: 20,
                  borderWidth: 3,
                  borderColor:
                    apparence === "Default" ? colors.green : colors.grey,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <View
                  style={{
                    backgroundColor:
                      apparence === "Default" ? colors.green : colors.grey,
                    width: 7,
                    height: 7,
                    borderRadius: 50,
                  }}
                />
              </View>
              <Text
                style={{
                  marginBottom: 10,
                  marginLeft: 20,
                  fontSize: 15,
                  fontWeight: "bold",
                }}
                theme={colorScheme}
              >
                Français
              </Text>
            </SubSetting>
            <SubSetting
              style={{
                borderBottomColor:
                  colorScheme === "dark"
                    ? colors.fourthBlack
                    : colors.thirdGrey,
                borderBottomWidth: 2,
                flexDirection: "row",
              }}
            >
              <View
                style={{
                  backgroundColor: "transparent",
                  width: 20,
                  height: 20,
                  borderRadius: 50,
                  marginLeft: 20,
                  borderWidth: 3,
                  borderColor:
                    apparence === "Dark" ? colors.green : colors.grey,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <View
                  style={{
                    backgroundColor:
                      apparence === "Dark" ? colors.green : colors.grey,
                    width: 7,
                    height: 7,
                    borderRadius: 50,
                  }}
                />
              </View>
              <Text
                style={{
                  marginBottom: 10,
                  marginLeft: 20,
                  fontSize: 15,
                  fontWeight: "bold",
                }}
                theme={colorScheme}
              >
                English
              </Text>
            </SubSetting>
          </View>
        </Content>
      </SettingsContents>
      <NavBar nameScreen={nameScreen} />
    </Container>
  );
};

const styles = StyleSheet.create({});

export default Profile;
