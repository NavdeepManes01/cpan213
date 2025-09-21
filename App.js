import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#2c3e50" />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <Text style={styles.title}>Welcome to CPAN 213</Text>
          <Text style={styles.subtitle}>Cross-Platform Mobile Development</Text>
        </View>

        <View style={styles.content}>
          <View style={styles.profileCard}>
            <Text style={styles.greeting}>Hello, I'm Navdeep Singh!</Text>
            <View style={styles.divider} />
            <Text style={styles.info}>Student ID: N01730248</Text>
            <Text style={styles.info}>Program: Computer Programming</Text>
          </View>
        </View>

        <View style={styles.goals}>
          <Text style={styles.sectionTitle}>My Course Goals:</Text>
          <View style={styles.divider} />
          <View style={styles.goalItem}>
            <Text style={styles.goalBullet}>•</Text>
            <Text style={styles.goal}>Learn React Native fundamentals</Text>
          </View>
          <View style={styles.goalItem}>
            <Text style={styles.goalBullet}>•</Text>
            <Text style={styles.goal}>Build cross-platform mobile apps</Text>
          </View>
          <View style={styles.goalItem}>
            <Text style={styles.goalBullet}>•</Text>
            <Text style={styles.goal}>Master state management with Redux</Text>
          </View>
          <View style={styles.goalItem}>
            <Text style={styles.goalBullet}>•</Text>
            <Text style={styles.goal}>Deploy apps to app stores</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 30,
  },
  header: {
    backgroundColor: '#3498db',
    paddingVertical: 30,
    paddingHorizontal: 20,
    alignItems: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: 'white',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: 'rgba(255, 255, 255, 0.9)',
    fontStyle: 'italic',
    textAlign: 'center',
  },
  content: {
    padding: 20,
  },
  profileCard: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  greeting: {
    fontSize: 24,
    fontWeight: '700',
    color: '#2c3e50',
    textAlign: 'center',
    marginBottom: 16,
  },
  info: {
    fontSize: 17,
    color: '#34495e',
    textAlign: 'center',
    marginBottom: 10,
    lineHeight: 24,
  },
  goals: {
    marginHorizontal: 20,
    marginBottom: 30,
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#2c3e50',
    marginBottom: 16,
  },
  goalItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  goalBullet: {
    fontSize: 20,
    color: '#3498db',
    marginRight: 12,
    lineHeight: 24,
  },
  goal: {
    fontSize: 17,
    color: '#34495e',
    flex: 1,
    lineHeight: 24,
  },
  divider: {
    height: 1,
    backgroundColor: '#ecf0f1',
    marginVertical: 16,
  },
});

export default App;