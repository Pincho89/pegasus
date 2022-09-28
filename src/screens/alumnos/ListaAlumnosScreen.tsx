import React, { useState } from "react";
import { Text, Switch, View, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../../themes/appTheme';

import Icon from 'react-native-vector-icons/Feather';
import { CustomSwitch } from "../../components/CustomSwitch";

import { NativeStackScreenProps } from '@react-navigation/native-stack';

interface Props extends NativeStackScreenProps<any,any>{};

const ListaAlumnosScreen =({ navigation }:Props)=> {


  const [state, setState] = useState({
    isActive: true,
    isHungry: false,
    isHappy: true
});

  const { isActive, isHungry, isHappy } = state;

  const onChange = ( value: boolean, field: string ) => {
    setState({
        ...state,
        [field]: value
    });
  }


    return (
      <View style={styles.fondoApp}>
      <SafeAreaView><Text style={styles.title}>Alumnos</Text></SafeAreaView>       
      <SafeAreaView style={styles.menuContainerDatosAlumnos}>
        
          <Text style={ styles.textoAlumnos }> 
            <Icon name="user" size={25} color={"black"}/>  Lucas Castro
            <CustomSwitch isOn={ isActive } onChange={ (value) => onChange( value, 'isActive' ) } />
          </Text>


          <Text style={ styles.textoAlumnos }> 
            <Icon name="user" size={25} color={"black"}/>  Santiago Linares
            <CustomSwitch isOn={ isHungry } onChange={ (value) => onChange( value, 'isHungry' ) } />
          </Text>

          <Text style={ styles.textoAlumnos }> 
            <Icon name="user" size={25} color={"black"}/>  Rodrigo Castro
            <CustomSwitch isOn={ isHappy } onChange={ (value) => onChange( value, 'isHappy' ) } />
          </Text>

      </SafeAreaView>
      <View style={{marginTop:30}}></View>
        <SafeAreaView style={{flexDirection:'row'}}>
              <TouchableOpacity
                    style={{ 
                        ...styles.boton,
                    }}
                    onPress={ () => navigation.navigate('ListaReporteScreen')  }
                >
                    <Text style={ styles.textoBoton }>Ver Reporte</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{ 
                        ...styles.boton,
                    }}
                    onPress={ () => navigation.navigate('CifradosScreen')  }
                >
                    <Text style={ styles.textoBoton }>Guardar</Text>
                </TouchableOpacity>
        </SafeAreaView>
      </View>
  )
}

export default ListaAlumnosScreen;

