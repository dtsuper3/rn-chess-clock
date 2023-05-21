import React, { useState } from 'react'
import { Button, View, StyleSheet, Text } from 'react-native';
import { HomeScreenProps } from '../interface/navigation';
import { Picker } from "@react-native-picker/picker";
import { StatusBar } from 'expo-status-bar';

interface IPickerTimeList {
    label: string;
    value: string | number;
}
function HomeScreen({ navigation }: HomeScreenProps) {
    const [selectedValue, setSelectedValue] = useState("1:00");
    const picketTimeList: IPickerTimeList[] = [
        { label: "1 min", value: "1:00" },
        { label: "5 min", value: "5:00" },
        { label: "10 min", value: "10:00" },
        { label: "15 min", value: "15:00" },
        { label: "20 min", value: "20:00" },
        { label: "30 min", value: "30:00" },
        { label: "45 min", value: "45:00" },
        { label: "1 hrs", value: "60:00" },

    ]
    function handlePress() {
        navigation.navigate("Clock", { time: selectedValue.length > 0 ? selectedValue : undefined })
    }
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#fff' />
            <Text style={styles.heading}>Select Time</Text>
            <Picker
                selectedValue={selectedValue}
                style={styles.picker}
                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue.toString())}>
                {
                    picketTimeList.map((item, index) =>
                        <Picker.Item
                            label={item.label}
                            value={item.value}
                            key={index} />)
                }

            </Picker>
            <View style={styles.btnCont}>
                <Button
                    title="Submit"
                    onPress={handlePress}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        paddingTop: 30,
        paddingHorizontal: 20,
        backgroundColor: "#fff"
    },
    btnCont: {
        flex: 1,
        width: "100%",
        marginTop: 20,
    },
    picker: {
        height: 50,
        width: "100%"
    },
    heading: {
        fontSize: 22,
        fontWeight: "bold",
        marginTop: 20
    }
});
export default HomeScreen
