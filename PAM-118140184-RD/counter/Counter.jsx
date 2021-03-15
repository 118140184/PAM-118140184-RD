import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { turnOn, turnOff } from "../redux/action";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((data) => data.counter);
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center", flexDirection: "row", backgroundColor: `${counter}` }}>
      <TouchableOpacity style={{ backgroundColor: "#DDDDDD", paddingBottom: 15, paddingTop: 15, paddingLeft: 20, paddingRight: 20 }} onPress={() => dispatch(turnOff(counter))}>
        <Text style={{ fontSize: 10 }}>OFF</Text>
      </TouchableOpacity>
      <Text style={{ fontSize: 30, marginLeft: 25, marginRight: 25 }}>{counter}</Text>
      <TouchableOpacity style={{ backgroundColor: "#DDDDDD", paddingBottom: 15, paddingTop: 15, paddingLeft: 20, paddingRight: 20 }} onPress={() => dispatch(turnOn(counter))}>
        <Text style={{ fontSize: 10 }}>ON</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Counter;
