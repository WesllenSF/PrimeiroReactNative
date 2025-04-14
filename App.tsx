import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,TextInput, TouchableOpacity} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>IMC</Text>
      <StatusBar style="auto" />
        <View style={styles.bloco}>
            <Text style={styles.label}>Peso</Text>
              <TextInput 
              style={styles.input} 
              />
        </View>
        <View style={styles.bloco}>
            <Text style={styles.label}>Altura</Text>
              <TextInput 
              style={styles.input} 
              />
        </View>

        <View>
            <TouchableOpacity style={styles.btnTxt}>
              <Text>Calcular</Text>
            </TouchableOpacity>
        </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    backgroundColor: '#f0f8ff',
    color: 'black',
    width: 250,
    height: 50,
    borderWidth: 1,
    borderRadius: 10,
  },
  titulo: {
    color: 'black',
    marginBottom: 80,
    fontSize: 80,
  },
  bloco: {

  },
  btnTxt: {
    marginTop:  30,
    backgroundColor: 'white',
    color: 'black',
    alignItems: 'center',
    width: 250,
    height: 50,
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: 'center',
  },
  label: {
    paddingBottom:10,
    paddingTop: 20,
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    paddingLeft: 10,
  },


});
