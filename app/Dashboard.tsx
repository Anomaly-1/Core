import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

interface DashboardProps {
  totalScore: number;
}

const Dashboard: React.FC<DashboardProps> = ({ totalScore }) => {
  // Determine circle color based on totalScore
  let circleColor = '#705e24'; // Default color
  if (totalScore < 130) {
    circleColor = '#702424';
  } else if (totalScore > 280) {
    circleColor = '#24702c';
  }

  // Icon names for each section
  const icons = ['tint', 'bolt', 'tree', 'cloud'];

  // Generate random colors for background sections
  const backgroundColors = ['#ff6363', '#63a1ff', '#ffd663', '#63ffd6'];

  // Handle section press
  const handleSectionPress = (iconName: string) => {
    // Log the icon name when a section is pressed
    console.log(`Pressed on section with icon: ${iconName}`);
  };

  return (
    <View style={styles.container}>
      {/* Top Left Section */}
      <View style={styles.topLeft}>
        <TouchableOpacity
          style={[styles.background, { backgroundColor: backgroundColors[0] }]}
          onPress={() => handleSectionPress(icons[0])}
        >
          <FontAwesome5 name={icons[0]} size={40} color="white" />
        </TouchableOpacity>
      </View>

      {/* Top Right Section */}
      <View style={styles.topRight}>
        <TouchableOpacity
          style={[styles.background, { backgroundColor: backgroundColors[1] }]}
          onPress={() => handleSectionPress(icons[1])}
        >
          <FontAwesome5 name={icons[1]} size={40} color="white" />
        </TouchableOpacity>
      </View>

      {/* Bottom Left Section */}
      <View style={styles.bottomLeft}>
        <TouchableOpacity
          style={[styles.background, { backgroundColor: backgroundColors[2] }]}
          onPress={() => handleSectionPress(icons[2])}
        >
          <FontAwesome5 name={icons[2]} size={40} color="white" />
        </TouchableOpacity>
      </View>

      {/* Bottom Right Section */}
      <View style={styles.bottomRight}>
        <TouchableOpacity
          style={[styles.background, { backgroundColor: backgroundColors[3] }]}
          onPress={() => handleSectionPress(icons[3])}
        >
          <FontAwesome5 name={icons[3]} size={40} color="white" />
        </TouchableOpacity>
      </View>

      {/* Circle Section */}
      <View style={styles.circleContainer}>
        <View style={[styles.circle, { backgroundColor: circleColor }]}>
          <Text style={styles.score}>{totalScore}</Text>
          <Text style={styles.label}>SCORE</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  background: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  topLeft: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '50%',
    height: '50%',
  },
  topRight: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: '50%',
    height: '50%',
  },
  bottomLeft: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '50%',
    height: '50%',
  },
  bottomRight: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: '50%',
    height: '50%',
  },
  circleContainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  circle: {
    width: 150,
    height: 150,
    borderRadius: 75,
    justifyContent: 'center',
    alignItems: 'center',
  },
  score: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
  },
  label: {
    fontSize: 16,
    color: 'white',
  },
});

export default Dashboard;
