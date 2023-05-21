import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

export type RootStackParamList = {
    Home: undefined;
    Clock: { time?: string }
};

type HomeScreenRouteProp = RouteProp<RootStackParamList, "Home">;
type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, "Home">;

export type HomeScreenProps = {
    route: HomeScreenRouteProp,
    navigation: HomeScreenNavigationProp
};

type ClockScreenRouteProp = RouteProp<RootStackParamList, "Clock">;
type ClockScreenNavigationProp = StackNavigationProp<RootStackParamList, "Clock">;

export type ClockScreenProps = {
    route: ClockScreenRouteProp,
    navigation: ClockScreenNavigationProp
}