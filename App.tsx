import React, { useState } from "react";
import MainNavigation from "./src/navigation";
import { Asset } from 'expo-asset';
import AppLoading from 'expo-app-loading';

export default function App() {
  const [isReady, setIsReady] = useState(false);

  async function cacheResourcesAsync() {
    const images = [require("./assets/splash.png")];

    const cacheImages = images.map(image => {
      return Asset.fromModule(image).downloadAsync();
    });

    Promise.all(cacheImages);
  }

  if (!isReady) {
    return (
      <AppLoading
        startAsync={cacheResourcesAsync}
        onFinish={() => setIsReady(true)}
        onError={console.warn}
      />
    );
  }

  return (
    <MainNavigation />
  )


}