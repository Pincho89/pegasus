import React from 'react'
import { Text, TouchableOpacity, View, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Feather';
import { styles } from '../../themes/appTheme';

interface Props extends NativeStackScreenProps<any,any>{};



const ListaDocentesScreen =({ navigation }: Props)=> {
    
    return (
    <View style={styles.fondoApp}>
    <SafeAreaView><Text style={styles.title}>Docentes</Text></SafeAreaView>       
    <SafeAreaView style={styles.menuContainerDatosDocentes}>
      
      <Text style={ styles.textoFlatlist }> 
        <Icon 
            name="user" 
            size={20} 
            color={"black"}
        /> Docente 1</Text>
    
      <Text style={ styles.textoFlatlist }>
        <Icon 
          name="user" 
          size={20} 
          color={"black"}
      /> Docente 2</Text>

      <Text style={ styles.textoFlatlist }>
        <Icon 
          name="user" 
          size={20} 
          color={"black"}
      /> Docente 3</Text>

      <Text style={ styles.textoFlatlist }>
        <Icon 
          name="user" 
          size={20} 
          color={"black"}
      /> Docente 4</Text>

      <Text style={ styles.textoFlatlist }>
        <Icon 
          name="user" 
          size={20} 
          color={"black"}
      /> Docente 5</Text>
              
    </SafeAreaView>
    </View>
  )
}

export default ListaDocentesScreen;