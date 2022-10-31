import React, { useState } from "react";
import { Text, Switch, View, TouchableOpacity, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../../themes/appTheme';

import Icon from 'react-native-vector-icons/Feather';
import { CustomSwitch } from "../../components/CustomSwitch";

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { MostrarAlumno } from "../../components/MostrarAlumno";
import { FilerByCurso } from '../../hooks/FilerByCurso';

interface Props extends NativeStackScreenProps<any,any>{};

const ListaAlumnosScreen =({ navigation,route }:Props)=> {

let curso = route.params?.curso.toString();
let materia = route.params?.materia.toString();

const { alumnosCursos,isLoading } = FilerByCurso(curso); 

   if (isLoading) {
    return (
    <View style={{flex:1, justifyContent:'center',alignItems:'center',backgroundColor: "#E6EBF1"}}>
        <ActivityIndicator  color="red" size={100}/>
    </View>
    )
    }

    return (
      <View style={styles.fondoApp}>
      <SafeAreaView><Text style={styles.title}>Alumnos</Text></SafeAreaView>       
      <SafeAreaView style={styles.menuContainerDatosAlumnos}>

          {  //Renderizo todo los objetos
            alumnosCursos.map(item=><MostrarAlumno alumno={item} key={item.id}/>)
          }

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

