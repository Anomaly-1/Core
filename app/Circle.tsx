import React, { useRef, useState } from 'react';
import {
  StatusBar,
  Dimensions,
  TouchableOpacity,
  Animated,
  Text,
  View,
  StyleSheet,
} from 'react-native';
import Constants from 'expo-constants';
import { AntDesign } from '@expo/vector-icons';
const { width } = Dimensions.get('window');

const AnimatedAntDesign = Animated.createAnimatedComponent(AntDesign);

const DURATION = 1000;
const TEXT_DURATION = DURATION * 0.8;

interface CircleProps {
  onPress: (selectedOptions: number[]) => void;
}

const Circle: React.FC<CircleProps> = ({ onPress }) => {
  const colors = [
    {
      initialBgColor: '#a68519',
      bgColor: '#a68519',
      nextBgColor: '#f7d65c',
      themeIcon: '⚡',
      content: [
        {
          question: "Approximately how much power does your home use a day?",
          options: ["70 kWh", "60 kWh", "50 kWh", "40 kWh", "30 kWh"],
        }
      ],
    },
    {
      initialBgColor: '#a68519',
      bgColor: '#f7d65c',
      nextBgColor: '#ffe819',
      themeIcon: '⚡',
      content: [
        {
          question: "What applience do you think consumes the most electricity in your home?",
          options: ["Communication","Kitchenware", "Entertainment", "Lighting", "Temperature Control"],
        }
      ],
    },
    {
      initialBgColor: '#f7d65c',
      bgColor: '#ffe819',
      nextBgColor: '#87d6d1',
      themeIcon: '⚡',
      content: [
        {
          question: "Roughly how much of your household energy is generated locally or through renewable methods?",
          options: ["None", "2 kWh", "5 kWh or greater"],
        }
      ],
    },
    {
      initialBgColor: '#ffe819',
      bgColor: '#87d6d1',
      nextBgColor: '#42b3f5',
      themeIcon: '💧',
      content: [
        {
          question: "Roughly how many types of water-efficient appliances do you use?",
          options: ["None", "1", "2", "3"],
        }
      ],
    },
    {
      initialBgColor: '#87d6d1',
      bgColor: '#42b3f5',
      nextBgColor: '#1458cc',
      themeIcon: '💧',
      content: [
        {
          question: "How long do you typically take showers?",
          options: ["10 minutes", "30 minutes", "60 minutes", "Longer"],
        }
      ],
    },
    {
      initialBgColor: '#42b3f5',
      bgColor: '#1458cc',
      nextBgColor: '#ced5e0',
      themeIcon: '💧',
      content: [
        {
          question: "How often do you water your lawn or backyard?",
          options: ["Never", ">4 times a week", "Twice a week", "Three times a week"],
        }
      ],
    },
    {
      initialBgColor: '#1458cc',
      bgColor: '#ced5e0',
      nextBgColor: '#9da1a8',
      themeIcon: '☁',
      content: [
        {
          question: "Assuming you own a gas-based vehicle, do you commute individually often?",
          options: ["Not Applicable", "Rarely", "Sometimes", "Almost Always"],
        }
      ],
    },
    {
      initialBgColor: '#ced5e0',
      bgColor: '#9da1a8',
      nextBgColor: '#5e5e5e',
      themeIcon: '☁',
      content: [
        {
          question: "Do you make use of your thermostat often? (Changing temperature)",
          options: ["Barely", "Sometimes", "Most of the time"],
        }
      ],
    },
    {
      initialBgColor: '#9da1a8',
      bgColor: '#5e5e5e',
      nextBgColor: '#82bd85',
      themeIcon: '☁',
      content: [
        {
          question: "How much of your diet is homegrown?",
          options: ["Almost all", "Good Portion", "None", ],
        }
      ],
    },
    {
      initialBgColor: '#5e5e5e',
      bgColor: '#82bd85',
      nextBgColor: '#35a640',
      themeIcon: '🌳',
      content: [
        {
          question: "Have you participated in growing vegetation locally?",
          options: ["Never", "Tried it once", "Often"],
        }
      ],
    },
    {
      initialBgColor: '#82bd85',
      bgColor: '#35a640',
      nextBgColor: '#24632a',
      themeIcon: '🌳',
      content: [
        {
          question: "How much greenery would you say is in your area?",
          options: ["Not much", "Moderate amount", "Quite abundant"],
        }
      ],
    },
    {
      initialBgColor: '#35a640',
      bgColor: '#24632a',
      nextBgColor: '#f7d65c',
      themeIcon: '🌳',
      content: [
        {
          question: "Are you aware of what tree or plant species grows best in your area?",
          options: ["Nope", "Yes"],
        }
      ],
    },
    

    
  ];

  const [selectedOptions, setSelectedOptions] = useState<number[]>(Array(colors.length-1).fill(-1)); // Array to store selected options

  const animatedValue = useRef(new Animated.Value(0)).current;
  const animatedValue2 = useRef(new Animated.Value(0)).current;
  const inputRange = [...Array(colors.length).keys()];
  const [index, setIndex] = useState<number>(0);

  const animate = (i: number) =>
    Animated.parallel([
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: DURATION,
        useNativeDriver: true,
      }),
      Animated.timing(animatedValue2, {
        toValue: 1,
        duration: DURATION,
        useNativeDriver: false,
      }),
    ]);

  const handleOptionClick = (optionIndex: number) => {
    setSelectedOptions(prevOptions => {
      const updatedOptions = [...prevOptions];
      updatedOptions[index] = optionIndex;
      return updatedOptions;
    });
    onPress(selectedOptions); // Pass selectedOptions array to the parent component
    handlePress();
  };
  
  const handlePress = () => {
    const nextIndex = (index + 1) % colors.length;
    setIndex(nextIndex);
    animatedValue.setValue(0);
    animatedValue2.setValue(0);
    animate(nextIndex).start();
  };

  const inputRangeSlider = [...Array(colors.length * 2).keys()];

  return (
    <View style={{ flex: 1, justifyContent: 'flex-start', paddingTop: 100 }}>
      <StatusBar hidden />
      <Animated.View
        style={[
          StyleSheet.absoluteFillObject,
          styles.container,
          {
            backgroundColor: animatedValue2.interpolate({
              inputRange: [0, 0.001, 0.5, 0.501, 1],
              outputRange: [
                colors[index].initialBgColor,
                colors[index].initialBgColor,
                colors[index].initialBgColor,
                colors[index].bgColor,
                colors[index].bgColor,
              ],
            }),
          },
        ]}
      >
        <Animated.View
          style={[
            styles.circle,
            {
              backgroundColor: animatedValue2.interpolate({
                inputRange: [
                  0,
                  0.001,
                  0.5,
                  0.501,
                  0.9,
                  1,
                ],
                outputRange: [
                  colors[index].bgColor,
                  colors[index].bgColor,
                  colors[index].bgColor,
                  colors[index].initialBgColor,
                  colors[index].initialBgColor,
                  colors[index].nextBgColor,
                ],
              }),
              transform: [
                { perspective: 200 },
                {
                  rotateY: animatedValue2.interpolate({
                    inputRange: [0, 0.5, 1],
                    outputRange: ['0deg', '-90deg', '-180deg'],
                  }),
                },
                {
                  scale: animatedValue2.interpolate({
                    inputRange: [0, 0.5, 1],
                    outputRange: [1, 6, 1],
                  }),
                },
                {
                  translateX: animatedValue2.interpolate({
                    inputRange: [0, 0.5, 1],
                    outputRange: [0, 50, 0],
                  }),
                },
              ],
            },
          ]}
        >
          <TouchableOpacity>
            <Animated.View
              style={[
                styles.button,
                {
                  transform: [
                    {
                      scale: animatedValue.interpolate({
                        inputRange: [0, 0.05, 0.5, 1],
                        outputRange: [1, 0, 0, 1],
                      }),
                    },
                    {
                      rotateY: animatedValue.interpolate({
                        inputRange: [0, 0.5, 0.9, 1],
                        outputRange: ['0deg', '180deg', '180deg', '180deg'],
                      }),
                    },
                  ],
                  opacity: animatedValue.interpolate({
                    inputRange: [0, 0.05, 0.9, 1],
                    outputRange: [1, 0, 0, 1],
                  }),
                },
              ]}
            >
              <AnimatedAntDesign name='arrowright' size={28} color={'white'} />
            </Animated.View>
          </TouchableOpacity>
        </Animated.View>
      </Animated.View>
      <Animated.View
        style={{
          flexDirection: 'row',
          transform: [
            {
              translateX: animatedValue.interpolate({
                inputRange: inputRangeSlider,
                outputRange: inputRangeSlider.map((i) => -i * width * 2),
              }),
            },
          ],
          opacity: animatedValue.interpolate({
            inputRange: inputRangeSlider.map((i) => i / 2),
            outputRange: inputRangeSlider.map((i) => (i % 2 === 0 ? 1 : 0)),
          }),
        }}
      >
        {colors.map((color, i) => (
          <View style={{ paddingRight: width, width: width * 2 }} key={i}>
            {color.content && color.content.length > 0 && (
              <View>
                <Text style={[styles.paragraph, { color: colors[index].nextBgColor }]}>
                  {colors[index].content[0]?.question}
                </Text>
                <View style={styles.optionsContainer}>
                  {colors[index].content[0]?.options.map((option, optionIndex) => (
                    <TouchableOpacity key={optionIndex} onPress={() => handleOptionClick(optionIndex)}>
                      <View style={styles.optionContainer}>
                        <Text style={styles.optionText}>{option}</Text>
                      </View>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>
            )}
          </View>
        ))}
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
    padding: 8,
    paddingBottom: 50,
  },
  paragraph: {
    margin: 12,
    fontSize: 24,
    // fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Menlo',
    color: 'white',
  },
  button: {
    height: 100,
    width: 100,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    backgroundColor: 'turquoise',
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  optionsContainer: {
    justifyContent: 'center', // Center the content vertically
    alignItems: 'center', // Center the content horizontally
    marginTop: 20, // Add margin at the top to space out the options from the title
  },
  optionContainer: {
    backgroundColor: '#ffffff', // Background color of the option container
    borderRadius: 10, // Border radius to create rounded corners
    paddingVertical: 20, // Vertical padding for the option container
    paddingHorizontal: 40, // Horizontal padding for the option container
    marginVertical: 10, // Vertical margin to space the options
    alignItems: 'center', // Center the content horizontally
    width: 300, // Set a fixed width for the option container
    justifyContent: 'center',
  },
  optionText: {
    fontSize: 16, // Font size for the option text
    fontWeight: 'bold', // Font weight for the option text
    color: '#000000', // Text color of the option
    textAlign: 'center', // Center the text within the option container
  },
});

export default Circle;