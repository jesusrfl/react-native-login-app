# React Native Login App Test
## Instalar
* **yarn install**  
* Dependencias
  * Extras / Google Play services
  * Extras / Google Repository
  * Android 6.0 (API 23) / Google APIs Intel x86 Atom System Image Rev. 19
  * Android SDK Build-tools 23.0.3
  * Android SDK Platform 25
## Configurar
* Agregar Google Maps API Key para Android en el archivo **android\app\src\main\AndroidManifest.xml**
```xml
  <application>
    ...
    <!-- Sustituir los puntos por la clave. 
          Normalmente es algo como AIzaSyBjsINSH5x39Ks6c0_CoS1yr1Mb3cB3cVo -->
    <meta-data
      android:name="com.google.android.geo.API_KEY"
      android:value="..."/> 
  </application> 
```
## Ejecutar
* **react-native run-android**

  
