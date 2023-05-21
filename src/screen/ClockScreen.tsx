import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Alert, Animated, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Audio } from "expo-av";
import { Constant } from '../constant';
import { ClockScreenProps } from '../interface/navigation';

export default function ClockScreen({ navigation, route }: ClockScreenProps) {
    const time = route.params.time ? route.params.time : Constant.DEFAULT_TIME;
    const [playerBlackTime, setPlayerBlackTime] = useState(time);
    const [playerWhiteTime, setPlayerWhiteTime] = useState(time);
    const [playerBlackInterval, setPlayerBlackInterval] = useState<NodeJS.Timeout>();
    const [playerWhiteInterval, setPlayerWhiteInterval] = useState<NodeJS.Timeout>();
    const [sound, setSound] = React.useState<any>();

    useEffect(() => {
        return sound
            ? () => {
                sound.unloadAsync();
            }
            : undefined;
    }, [sound]);

    useEffect(() => {
        return () => {
            clearInterval(playerBlackInterval as any);
            clearInterval(playerWhiteInterval as any);
            if (sound) {
                sound.unloadAsync();
            }
        }
    }, [])

    function playerBlackHandler() {
        if (!playerBlackInterval) {
            if (playerWhiteInterval) {
                clearInterval(playerWhiteInterval as any);
                setPlayerWhiteInterval(undefined);
            }
            const intervalRef = setInterval(() => {
                setPlayerBlackTime(time => {
                    let [min, sec]: any = time.split(":");
                    min = parseInt(min);
                    sec = parseInt(sec);
                    // console.log("sec:- ", sec, playerBlackTime);
                    if (sec === 0) {
                        min -= 1;
                        sec = 59;
                    } else {
                        sec = sec - 1;
                        if (sec >= 0 && sec < 10) {
                            sec = "0" + sec;
                        }
                    }
                    if (min === 0 && +sec === 0) {
                        clearInterval(intervalRef);
                        Alert.alert(
                            "Alert",
                            "Black times up",
                            [{
                                text: "OK", onPress: () => navigation.navigate("Home")
                            }])
                    }
                    const newTime = `${min}:${sec}`;
                    // console.log("New Time:- ", newTime)
                    return newTime
                });
            }, 1000);
            setPlayerBlackInterval(intervalRef);
        }
        playSound();
    };

    function playerWhiteHandler() {
        if (!playerWhiteInterval) {
            // console.log("playerWhiteHandler:- ", playerBlackInterval)
            if (playerBlackInterval) {
                clearInterval(playerBlackInterval as any);
                setPlayerBlackInterval(undefined);
            }

            const intervalRef = setInterval(() => {
                setPlayerWhiteTime(time => {
                    let [min, sec]: any = time.split(":");
                    min = parseInt(min);
                    sec = parseInt(sec);
                    // console.log("sec:- ", sec, playerBlackTime);
                    if (sec === 0) {
                        min -= 1;
                        sec = 59;
                    } else {
                        sec = sec - 1;
                        if (sec >= 0 && sec < 10) {
                            sec = "0" + sec;
                        }
                    }
                    if (min === 0 && +sec === 0) {
                        clearInterval(intervalRef);
                        Alert.alert(
                            "Alert",
                            "White times up",
                            [{
                                text: "OK", onPress: () => navigation.navigate("Home")
                            }])
                    }
                    const newTime = `${min}:${sec}`;
                    // console.log("New Time:- ", newTime)
                    return newTime
                });
            }, 1000);
            setPlayerWhiteInterval(intervalRef);
        }
        playSound();
    }

    async function playSound() {
        const { sound } = await Audio.Sound.createAsync(
            require("../../assets/Toggle.mp3")
        )
        setSound(sound);
        await sound.playAsync();
    };

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <TouchableOpacity
                style={{
                    ...styles.clockContainer1,
                    ...(playerBlackInterval ? { backgroundColor: "#F5FCFF1A" } : {})
                }}
                onPress={playerWhiteHandler}
                touchSoundDisabled>
                {/* <Text style={{
                    ...styles.title,
                    ...styles.titleBlack,
                    ...styles.clockBlack
                }}>Black</Text> */}
                <Text
                    style={{
                        ...styles.clock,
                        ...styles.clockBlack
                    }}>{playerBlackTime}</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={{
                    ...styles.clockContainer2,
                    ...(playerWhiteInterval ? { backgroundColor: "#F5FCFF1A" } : {})
                }}
                onPress={playerBlackHandler}
                touchSoundDisabled>
                <Text
                    style={{
                        ...styles.clock,
                    }}>{playerWhiteTime}</Text>
                {/* <Text
                    style={{
                        ...styles.title,
                        ...styles.titleWhite
                    }}>White</Text> */}
            </TouchableOpacity>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    clockContainer1: {
        flex: 1,
        borderColor: "#000",
        borderBottomWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    clockContainer2: {
        borderColor: "#000",
        flex: 1,
        backgroundColor: "#F5FCFD",
        justifyContent: 'center',
        alignItems: 'center',
        position: "relative"
    },
    clock: {
        fontSize: 100,
        fontWeight: "bold"
    },
    title: {
        position: "absolute",
        fontSize: 30,
        margin: 10,
        fontWeight: "bold"
    },
    titleBlack: {
        top: 0
    },
    titleWhite: {
        bottom: 0
    },
    clockBlack: {
        transform: [{ rotate: "180deg" }]
    }
});
