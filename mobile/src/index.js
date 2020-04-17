import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, ScrollView, 
  FlatList, Text, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';
import api from './services/api';

export default function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get('projects').then(response => {
      console.log(response.data);
      setProjects(response.data);
    }).catch((error) => {
      console.log('error:: '+error);
    });
     
  }, []);


  async function handleAddProject(){
    const response = await api.post('projects', {
      title: `Novo projeto ${Date.now()}`,
      owner:  'Jess'
    });
    setProjects([...projects, response.data]);
  }
  return (
      <>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1"/>
      {/* <View  style={styles.container}>
        {projects.map( ({title,id}) => (
          <Text style={styles.projects} key={id}>{title}</Text>
        ))}
      </View> */}
      <SafeAreaView style={styles.container}>
      <FlatList 
        data={projects} 
        keyExtractor={project => project.id}
        renderItem={({item: project}) => (
        <Text style={styles.project}>{project.title}</Text>
      )}/>
      <TouchableOpacity 
        activeOpacity={0.6} 
        style={styles.button} 
        onPress={handleAddProject}
      >
        <Text style={styles.buttonText}>Adicionar projeto</Text>
      </TouchableOpacity>
      </SafeAreaView>
      </>
    );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#7159c1',
  },
  project: {
    color: '#fff',
    fontSize: 30
  },
  button: {
    backgroundColor : '#fff',
    margin: 20,
    height: 50,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 16,
  }
});