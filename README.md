# React Native Chess Clock

This is a React Native application that implements a chess clock. It provides a simple and intuitive interface for tracking time during chess games. The application is built using React Native, making it compatible with both iOS and Android devices.

<img src="/assets/Screenshot_2023-05-22-00-59-12-276_com.dtsuper3.chessclock.jpg" width="200" height="auto" alt="Chess Clock Screenshot">

## Features

- Two separate timers for each player (one for white and one for black)
- Adjustable initial time and time increment settings
- Simple and clean user interface
- Sound notifications for time events (optional)
- Pause and reset functionality
- Support for both portrait and landscape orientations

## Requirements

- Node.js
- React Native CLI
- iOS/Android emulator or a physical device for testing

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/dtsuper3/rn-chess-clock.git
   ```

2. Navigate to the project directory:

   ```bash
   cd rn-chess-clock
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Run the application on your preferred platform (iOS/Android):

   - For iOS:

     ```bash
     npx react-native run-ios
     ```

   - For Android:

     ```bash
     npx react-native run-android
     ```

## Usage

- Upon launching the application, you will see the chess clock interface.
- Tap on the respective timers to start the clock for each player.
- Use the settings icon to configure the time settings.
- To pause a timer, tap on the active timer. Tap again to resume.
- To reset a timer, long press on the respective timer.
- Time events such as time running out will trigger sound notifications if enabled in the settings.

## Download
[Click here](https://play.google.com/store/apps/details?id=com.dtsuper3.chessclock)


## Configuration

You can adjust the initial time and time increment settings for the chess clock. These settings can be modified in the following file:

- `src/config.js`

```javascript
export default {
  initialTime: 300, // Initial time in seconds
  timeIncrement: 5, // Time increment in seconds
};
```

## Contributions

Contributions to this project are welcome. If you find any bugs or have suggestions for improvements, please open an issue on the [GitHub repository](https://github.com/dtsuper3/rn-chess-clock).

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.
