import { Redirect } from "expo-router";
import React from "react";
import "./global.css";

export default function Index() {
  return <Redirect href={"/(tabs)"} />;
}
