import React from "react";
import { AppProvider } from "@hansgx/cubes";
import { navigationSchema } from "./src/navigation/navigation-schema";

export default function App() {
  return <AppProvider navigationSchema={navigationSchema} />;
}
