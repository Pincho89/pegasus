import React from 'react'
import { Text, TouchableOpacity, View, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../../themes/appTheme';

import { NativeStackScreenProps } from '@react-navigation/native-stack';

interface Props extends NativeStackScreenProps<any,any>{};

const ListaReporteScreen =({ navigation }:Props)=> {
    
    return (
    <View style={styles.fondoApp}>
    <SafeAreaView><Text style={styles.title}>Reporte</Text></SafeAreaView>       
    </View>
  )
}

export default ListaReporteScreen;