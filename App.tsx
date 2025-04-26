
import { StyleSheet, Text, View ,TextInput, TouchableOpacity} from 'react-native';

export default function App() {

  function calcularImc(){
    alert("Calculo de IMC")
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>IMC</Text>

        <View>
            <Text style={styles.label}></Text>
              <TextInput 
              style={styles.input} 
              keyboardType="numeric"
              placeholder="Peso"
              />
        </View>
        <View>
            <Text style={styles.label}></Text>
              <TextInput 
              style={styles.input} 
              keyboardType="numeric"
              placeholder="Peso"
              />
        </View>

        <View>
            <TouchableOpacity style={styles.btnTxt} onPress={calcularImc}>
              <Text style={styles.textBtn}>Calcular</Text>
            </TouchableOpacity>
        </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f8ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    backgroundColor: 'white',
    color: 'black',
    fontSize: 15,
    width: 250,
    height: 50,
    paddingLeft: 10,
    borderWidth: 0.8,
    borderRadius: 10,
  },
  titulo: {
    color: 'black',
    marginBottom: 80,
    fontSize: 80,
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
    paddingTop: 10,
  },
  textBtn: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  }
});
