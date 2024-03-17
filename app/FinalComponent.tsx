import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

const FinalComponent: React.FC = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>What Can You Do?</Text>

      <View style={styles.section}>
        <Text style={styles.title}>How to Reduce Emissions</Text>
        <Text style={styles.description}>
          1. Use energy-efficient appliances and lighting to reduce electricity consumption.
        </Text>
        <Text style={styles.description}>
          2. Opt for eco-friendly transportation options like cycling, walking, or using public transport.
        </Text>
        <Text style={styles.description}>
          3. Support renewable energy sources such as solar, wind, or hydroelectric power.
        </Text>
        <Text style={styles.description}>
          4. Plant trees and support reforestation efforts to absorb carbon dioxide.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>How to Reduce Water Waste</Text>
        <Text style={styles.description}>
          1. Fix leaks promptly and install water-saving fixtures like low-flow toilets and faucets.
        </Text>
        <Text style={styles.description}>
          2. Practice water conservation habits such as taking shorter showers and turning off taps when not in use.
        </Text>
        <Text style={styles.description}>
          3. Collect rainwater for outdoor use and landscaping.
        </Text>
        <Text style={styles.description}>
          4. Reuse greywater from activities like washing dishes or clothes for tasks like watering plants.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Populating the Community with More Vegetation</Text>
        <Text style={styles.description}>
          1. Plant trees, shrubs, and native plants to create green spaces and improve air quality.
        </Text>
        <Text style={styles.description}>
          2. Support community gardening initiatives and participate in tree planting events.
        </Text>
        <Text style={styles.description}>
          3. Advocate for urban forestry programs and green infrastructure projects in your area.
        </Text>
        <Text style={styles.description}>
          4. Educate others about the benefits of vegetation and encourage them to join greening efforts.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>How to Reduce Electricity Waste</Text>
        <Text style={styles.description}>
          1. Use energy-efficient appliances with high Energy Star ratings.
        </Text>
        <Text style={styles.description}>
          2. Turn off lights, electronics, and appliances when not in use.
        </Text>
        <Text style={styles.description}>
          3. Utilize power strips to easily switch off multiple devices at once.
        </Text>
        <Text style={styles.description}>
          4. Invest in smart energy management systems like programmable thermostats and smart power outlets.
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 40,
    backgroundColor: '#F6F6F6',
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333333',
    paddingTop: 30
  },
  section: {
    marginBottom: 20,
    padding: 16,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    elevation: 2,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#005580',
  },
  description: {
    fontSize: 16,
    marginBottom: 8,
    color: '#333333',
  },
});

export default FinalComponent;
