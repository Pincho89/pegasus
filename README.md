# PegasusApp


1- Instalar dependencias ( por las dudas ) 

- npm install

2- Iniciar aplicacion

- npx react-native run-android 

Va a demorar porque va a "descargar" e instalar la app en su dispositivo virtual


Iconos

Pagina todos los iconos -> https://github.com/oblador/react-native-vector-icons


Instalar iconos (Android)

Option: With Gradle (recommended)
This method has the advantage of fonts being copied from this module at build time so that the fonts and JS are always in sync, making upgrades painless.

Edit android/app/build.gradle ( NOT android/build.gradle ) and add the following:

apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"
To customize the files being copied, add the following instead:

project.ext.vectoricons = [
    iconFontNames: [ 'MaterialIcons.ttf', 'EvilIcons.ttf' ] // Name of the font files you want to copy
]

apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"

Curso Seccion 5

https://www.udemy.com/course/react-native-fh/learn/lecture/25345690?start=375#overview


Notas

- Cuando quieran hacer un cambio o se les cuelgue tendran que siempre reloguear METRO , presionando R , a su vez es donde marcará bien los errores
