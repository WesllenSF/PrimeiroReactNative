
import { StyleSheet, Text, View ,TextInput, TouchableOpacity} from 'react-native';
import { useState } from 'react';

export default function App() {
  // Definindo variavel

  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [resultado, setResultado] = useState('');

// Função para o calculo
  function calcularImc(){
    const pesoNum = parseFloat(peso);
    const alturaNum = parseFloat(altura);

    const imc = pesoNum / (alturaNum * alturaNum);
    let classe = '';

    if (imc <= 18.5) {
      classe = 'Abaixo do peso';
    } else if (imc >= 18.6 && imc <= 24.99) {
      classe = 'Peso ideal';
    } else if (imc >= 25 && imc <= 29.99) {
      classe = 'Levemente acima do peso';
    } else if (imc >= 30 && imc <= 34.99) {
      classe = 'Obesidade grau I';
    } else if (imc >= 35 && imc <= 39.99) {
      classe = 'Obesidade grau II (severa)';
    } else if (imc >= 40) {
      classe = 'Obesidade grau III (mórbida)';
    }

    setResultado(`Seu IMC é: ${imc.toFixed(2)} ${classe}`);

  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>IMC</Text>

        <View>
            <Text style={styles.label}>Altura</Text>

            {/* input da altura */}
              <TextInput 
              style={styles.input} 
              keyboardType="numeric"
              placeholder="Altura: 1.65"
              value={altura}
              onChangeText={setAltura}  
              />
        </View>
        <View>
            <Text style={styles.label}>Peso</Text>
            {/* Input do peso */}
              <TextInput 
              style={styles.input} 
              keyboardType="numeric"
              placeholder="Peso: 70"
              value={peso}
              onChangeText={setPeso}
              />
        </View>

        <View>
          {/* Botão que chama a função do calculo */}
            <TouchableOpacity style={styles.btnTxt} onPress={calcularImc}>
              <Text style={styles.textBtn}>Calcular</Text>
            </TouchableOpacity>
        </View>

        {resultado && (
              <View>
                <Text style={styles.resultado}>{resultado}</Text>
              </View>
            )}

    </View>
  );
}

const styles = StyleSheet.create({
  resultado: {
    color: 'black',
    marginTop: 25,
    fontSize: 25,
    paddingLeft:10,
    paddingRight:10,
    alignItems: 'center',
    justifyContent: 'center',
  },
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
