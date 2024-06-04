import React, { useContext, useState, useEffect } from "react";
import * as Permissions from "expo-permissions";
import * as Location from "expo-location";
import {
  StyleSheet,
  View,
  Pressable,
  ImageBackground,
  useColorScheme,
  Text,
  ScrollView,
} from "react-native";
import Mapbox from "@rnmapbox/maps";
import MapLibreGL from "@rnmapbox/maps";
import { useRoute } from "@react-navigation/native";

import { FontAwesome6 } from "@expo/vector-icons";
import pin from "../assets/images/svg/pin.png";
import NavBar from "../components/NavBar/NavBar";
import { Searchbar } from "react-native-paper";
import { context } from "../context/context";
import { colors } from "../components/Styled/MyColors";
import axios from "axios";
import img from "../assets/images/09.jpg";

const token =
  "pk.eyJ1Ijoic3JlZXZlczIyMSIsImEiOiJjbDNkMHVqbGswMGN5M2NwMWh5eXVjMm8zIn0.0G7u8ywlARSL3u5xQmIoYw";

Mapbox.setAccessToken(token);

const location = [
  {
    id: 0,
    city: "Alger",
    category: "restaurant",
    icon: "utensils",
    location: [3.076791768946317, 36.74364064910245],
  },
  {
    id: 1,
    city: "Bejaia",
    category: "restaurant",
    icon: "utensils",
    location: [5.0855060927650415, 36.75436270157553],
  },
  {
    id: 2,
    city: "Canstantine",
    category: "restaurant",
    icon: "utensils",
    location: [6.6392889449996675, 36.36497118069412],
  },
  {
    id: 3,
    city: "Alger",
    category: "beach",
    icon: "umbrella-beach",
    location: [3.0764202740964386, 36.75850403336147],
  },
  {
    id: 4,
    city: "Tlemcen",
    category: "beach",
    icon: "umbrella-beach",
    location: [-2.2007498674567345, 35.10037894550595],
  },
];

const Map = () => {
  const route = useRoute();
  const nameScreen = route.name;
  const { apparence } = useContext(context);
  const [result, setResult] = useState();
  const [currentLocation, setCurrentLocation] = useState([0, 0]);

  const schemeColor = useColorScheme();

  const colorScheme =
    apparence === "Default"
      ? schemeColor
      : apparence === "Dark"
      ? "dark"
      : "light";
  useEffect(() => {
    const getDirection = async (start, end) => {
      const apiUrl = `https://api.mapbox.com/directions/v5/mapbox/driving/${start.longitude},${start.latitude};${end.longitude},${end.latitude}?geometries=geojson&access_token=${token} `;
      const data = await axios.get(apiUrl);
      setResult(data.data.routes[0].geometry.coordinates);
    };
    getDirection(start, end);
  }, [start, end]);

  const start = { longitude: 3.094341626221653, latitude: 36.73459983741402 };
  const end = { longitude: 3.2341316416770876, latitude: 36.72942691085152 };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((postion) => {
      const { longitude, latitude } = postion.coords;
      setCurrentLocation([longitude, latitude]);
    });
  });
  console.log(currentLocation);

  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <View
          style={{
            width: "100%",
            position: "absolute",
            top: 50,
            zIndex: 10,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Searchbar
            placeholder="Search"
            placeholderTextColor={colors.grey}
            style={{
              width: "90%",
              backgroundColor:
                colorScheme === "dark"
                  ? colors.blackSecondary
                  : colors.greySecondary,
              color: colorScheme === "dark" ? colors.white : colors.black,
            }}
          />
        </View>
        <MapLibreGL.MapView
          style={styles.map}
          logoEnabled={false}
          attributionEnabled={false}
          scaleBarEnabled={false}
        >
          <MapLibreGL.Camera
            defaultSettings={{
              centerCoordinate: [3.0857100883442485, 36.74558188674384],
              zoomLevel: 4,
            }}
          />
          {location.map((loc) => {
            return (
              <MapLibreGL.MarkerView
                style={{ backgroundColor: "red" }}
                key={loc.id}
                coordinate={loc.location}
                children={
                  <Pressable onPress={() => console.log(loc.city)}>
                    <ImageBackground
                      style={{
                        width: 30,
                        height: 30,
                        alignItems: "center",
                      }}
                      source={pin}
                      resizeMode="contain"
                    >
                      {
                        <FontAwesome6
                          style={{ marginTop: 5 }}
                          name={loc.icon}
                          size={12}
                          color="white"
                        />
                      }
                    </ImageBackground>
                  </Pressable>
                }
                anchor={{ x: 0, y: 0.5 }}
              />
            );
          })}
          <MapLibreGL.ShapeSource
            id="routeShapeSource"
            shape={{ type: "LineString", coordinates: result && result }}
          >
            <MapLibreGL.LineLayer
              id="routeLineLayer"
              style={{
                lineColor: colors.green,
                lineWidth: 8,
                lineCap: "round",
                lineJoin: "round",
              }}
            />
          </MapLibreGL.ShapeSource>
          <MapLibreGL.ShapeSource
            id="startPoint"
            shape={{
              type: "Point",
              coordinates: [start.longitude, start.latitude],
            }}
          >
            <MapLibreGL.CircleLayer
              id="startPointCircle"
              style={{ circleRadius: 10, circleColor: colors.red }}
            />
          </MapLibreGL.ShapeSource>
          <MapLibreGL.ShapeSource
            id="endPoint"
            shape={{
              type: "Point",
              coordinates: [end.longitude, end.latitude],
            }}
          >
            <MapLibreGL.CircleLayer
              id="endPointCircle"
              style={{ circleRadius: 10, circleColor: colors.red }}
            />
          </MapLibreGL.ShapeSource>
        </MapLibreGL.MapView>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{
          width: "100%",

          zIndex: 10,
          position: "absolute",
          bottom: 120,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            width: "90%",
          }}
        >
          <ImageBackground
            source={img}
            imageStyle={{ borderRadius: 10 }}
            style={{
              width: 200,
              height: 150,
              backgroundColor: "blue",
              marginLeft: 30,
              borderRadius: 10,
            }}
          ></ImageBackground>
          <ImageBackground
            source={img}
            imageStyle={{ borderRadius: 10 }}
            style={{
              width: 200,
              height: 150,
              backgroundColor: "blue",
              marginLeft: 10,
              marginRight: 10,
              borderRadius: 10,
            }}
          ></ImageBackground>
        </View>
      </ScrollView>
      <NavBar nameScreen={nameScreen} />
    </View>
  );
};
const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  container: {
    width: "99.8%",
    height: "100%",
    backgroundColor: "white",
  },
  map: {
    flex: 1,
    width: "99.99%",
  },
});
export default Map;

//<FontAwesome6 name="utensils" size={12} color="white" />
