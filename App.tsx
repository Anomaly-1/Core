import React, { useRef, useState, useEffect } from 'react';
import { StatusBar, Dimensions, Animated, View, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import Circle from './app/Circle';
import Dashboard from './app/Dashboard';
import FinalComponent from './app/FinalComponent';

const { width } = Dimensions.get('window');

const DURATION = 1000;
const TEXT_DURATION = DURATION * 0.8;

const App: React.FC = () => {
  const sliderAnimatedValue = useRef(new Animated.Value(0)).current;
  const inputRange = [...Array(6).keys()]; // Assuming there are 6 colors in the Circle component
  const [circleData, setCircleData] = useState<number[] | null>(null);
  const [hideCircle, setHideCircle] = useState<boolean>(false);
  const [totalScore, setTotalScore] = useState<number>(0);
  const [showFinalComponent, setShowFinalComponent] = useState<boolean>(false);
  const [disableClick, setDisableClick] = useState<boolean>(false);

  useEffect(() => {
    if (circleData !== null) {
      const isFilled = circleData.every((num: number) => num !== -1);
      if (isFilled) {
        setHideCircle(true);
        const sum = circleData.reduce((acc: number, curr: number) => acc + curr, 0);
        setTotalScore(sum * 10);
      }
    }
  }, [circleData]);

  const handlePress = (data: number[]) => {
    setCircleData(data);
  };

  const handleDashboardClick = () => {
    setDisableClick(true); // Disable clicking after moving to the final component
    setShowFinalComponent(true);
  };

  const handleScreenClick = () => {
    if (!showFinalComponent && hideCircle) {
      setShowFinalComponent(true);
      setDisableClick(true);
    }
  };

  return (
    <>
      {!showFinalComponent && (
        <TouchableOpacity style={{ flex: 1 }} onPress={handleScreenClick} disabled={disableClick}>
          <StatusBar hidden />
          {(circleData === null || !hideCircle) && (
            <Circle onPress={handlePress} />
          )}
          {hideCircle && (
            <Dashboard totalScore={totalScore}/>
          )}
          <Animated.View
            style={{
              flexDirection: 'row',
              transform: [
                {
                  translateX: sliderAnimatedValue.interpolate({
                    inputRange: inputRange.map((i) => i * 2),
                    outputRange: inputRange.map((i) => -i * width * 2),
                  }),
                },
              ],
            }}
          >
            {/* Content for the Animated.View */}
          </Animated.View>
        </TouchableOpacity>
      )}
      {showFinalComponent && <FinalComponent />}
    </>
  );
};

export default App;
