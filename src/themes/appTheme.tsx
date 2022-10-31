import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
    globalMargin: {
        marginHorizontal: 20,
    },
    fondoApp: {
        backgroundColor: "#E6EBF1",
        flex: 1,
        flexDirection : 'column',
        justifyContent : 'center',
        alignItems: 'center',
        
    },
    title:{
        fontSize: 36,
        fontFamily: 'Gilroy-ExtraBold',
        color:'#6EA4F4'
    },
    subtitle:{
        fontSize: 24,
        fontFamily: 'Gilroy-Light',
        color:'#6EA4F4'
    },

    //Start Home Views
    menuContainer: {
        marginVertical: 30,
        marginHorizontal: 50,
        flex: 0.5,
        flexDirection:'column',
        marginTop:50,
    },

    //Start Flatlist Views
    fondoFlatlist: {
        backgroundColor: "#E6EBF1",
        flex: 1,
    },
    menuFlatList: {
        marginVertical: 65,
        marginHorizontal: 50,
        flex: 0.5,
    },
    botonFlatList:{
        width: 120,
        height: 90,
        backgroundColor: 'white',
        borderRadius: 10,
        marginRight: 10,
        borderColor: '#6EA4F4',
        borderWidth: 1,
        
    },
    containerTexto:{
        position:'relative',
        marginLeft:5,
        marginTop:5,
        justifyContent:'center',
        
        
    },
    boxImagen:{
        backgroundColor:'black',
        height:50,
        width:60,
        borderRadius:20,
        marginLeft:5,
        marginTop:5

    },
     box:{
        height:50,
        width:50,
        borderRadius:20,
        marginLeft:25,
        marginTop:5,
        resizeMode: 'contain',
    }, 
    textoFlatlist: {
        fontSize: 16,
        fontFamily: 'Gilroy-ExtraLight',
        color: 'black',
        marginLeft:10,
                
    },
    subtextoFlatlist: {
        fontSize: 16,
        fontFamily: 'Gilroy-ExtraLight',
        color: 'black',
        marginLeft:70,
        
    },
    titleFlatlist:{
        fontSize: 36,
        fontFamily: 'Gilroy-ExtraBold',
        color:'#6EA4F4',
        marginTop:30,
        //marginLeft:'35%',
        alignItems: 'center',
        justifyContent: 'space-around',
    },

    //Lista Cursos
    menuContainerCursos: {
        //marginVertical: 30,
        //marginHorizontal: 50,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 0.5,
        //backgroundColor:'red',
        flexDirection:'column',
        //marginTop:100,
        //position:'relative',
    },

    //Lista Materias

    menuContainerMaterias: {
        //marginVertical: 30,
        //marginHorizontal: 50,
        alignItems: 'center',
        justifyContent: 'space-around',
        flex: 0.5,
        //backgroundColor:'red',
        flexDirection:'row',
        //marginTop:100,
        //position:'relative',
        
    },

    //Lista Alumnos

    menuContainerAlumnos: {
        //marginVertical: 30,
        //marginHorizontal: 50,
        alignItems: 'center',
        justifyContent: 'space-around',
        flex: 0.5,
        //backgroundColor:'red',
        flexDirection:'row',
        //marginTop:100,
        //position:'relative',
    },

    //Lista Datos Alumnos
    menuContainerDatosAlumnos: {
        alignItems: 'flex-start',
        marginTop:'10%',
        marginRight:'30%',
        justifyContent: 'space-around',
        flex: 0.4,
        //backgroundColor:'red',
        flexDirection:'column',
    },

    textoAlumnos: {
        fontSize: 16,
        fontFamily: 'Gilroy-ExtraLight',
        color: 'black',
        //marginLeft:10,
    },

    //Botones
    boton: {
        width: 110,
        height: 40,
        backgroundColor: '#7796B3',
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.24,
        shadowRadius: 7,
        elevation: 9,


    },
    textoBoton: {
        fontSize: 16,
        fontFamily: 'Gilroy-ExtraBold',
        color: 'white',
    },
    textoHome:{
        fontSize: 16,
        fontFamily: 'Gilroy-ExtraBold',
        color:'#6EA4F4'
    },

    //Eventos
    botonEventos:{
        width: 340,
        height:110,
        backgroundColor: 'white',
        borderRadius:20,
        marginRight: 10,
        borderColor: '#6EA4F4',
        borderWidth: 1,
        marginBottom:15,
    },
    
    //Texto Evento
    textoEvento:{
        fontSize: 14,
        fontFamily: 'Gilroy-ExtraLight',
        color: 'black',
        marginLeft:10,    
        textAlign: 'center',            
    },

    //Contacto Institucion

    botonContactoInstitucion:{
        width: 250,
        height:60,
        backgroundColor: 'white',
        borderRadius:20,
        marginRight: 10,
        borderColor: '#6EA4F4',
        borderWidth: 1,
        marginBottom:15,
        
    },
    menuContainerDatosInstitucion: {
        justifyContent: 'space-around',
        flex: 0.5,
        //backgroundColor:'red',
    },
    boxContactoContainer:{
        marginBottom:'25%',
    },
     boxContacto:{
        height:100,
        width:100,
        borderRadius:50,
        marginTop:5,
        resizeMode: 'contain',
    }, 
    boxEvento:{
        height:100,
        width:100,
        borderRadius:50,
        marginTop:5,
        resizeMode: 'contain',
    }, 
    boxContainerInfoDatos:{
        borderColor: '#6EA4F4',
        backgroundColor:'white',
        borderWidth: 1,
        height:110,
        width:290,
        borderRadius:20,
        marginTop:10, 
    },
    mostrarInfo:{
        fontSize: 14,
        fontFamily: 'Gilroy-Light',
        color:'black',
        fontWeight:'700',
        marginTop:10,
        textAlign:'left',
        marginLeft:20,
    },
    mostrarLabel:{
        fontSize: 14,
        fontFamily: 'Gilroy-Light',
        color:'#6EA4F4',
        fontWeight:'700',
        marginTop:10,
        textAlign:'left',
    },



    //Contacto Docentes
    menuContainerDatosDocentes: {
        alignItems: 'center',
        marginTop:'20%',
        marginRight:'30%',
        justifyContent: 'space-around',
        flex: 0.4,
        //backgroundColor:'red',
        flexDirection:'column',
        
    },
});