# Md-Links

## Índice

* [1. Descripción del Proyecto](#1-Descripción-del-Proyecto)
* [2. Instalación y Configuración](#2-Instalación-y-Configuración)
* [3. API](#3-API)
* [4. CLI](#4-CLI)
* [5. Creador](#5-Creador)

***

## 1. Descripción del Proyecto

Md-Links es una librería desarrollada en JavaScript para el recorrido de directorios y la lectura de archivos Markdown(.md),
permitiendo la extracción y validación de los Links o Url anidados en cada archivo.

## 2. Instalación Y Configuración

Para instalar ingresa el siguiente comando en tu terminal de Git Bash:

`npm install <https://github.com/angiephb/BOG004-md-links>`

Para crear un archivo .js

`const mdLinks = require('mdlinks')`

## 3. API

### 3.1 Diagrama de Flujo 

[ ](./img/API.png)

### 3.2 Guía de Uso

El módulo se puede importar en otros scripts de Node.js y ofrece la siguiente interfaz:

`mdLinks(path, options)`

* `path`: Es la ruta relativa o absoluta que ingresa el usuario.
* `options`: Un objeto con la siguiente propiedad:
  - `validate`: Booleano que determina si se desea validar los links encontrados.

#### Ejemplo

**_Cuando options es igual a validate === true_** 

```js
const mdLinks = require('mdlinks')
mdLinks("./pruebas/archivo.md", validate === true)
```
_Retornará una promesa que resuelve un Array de objetos, donde cada objeto representa un link y contiene las siguientes propiedades:_

```
[
  {
    href: https://img.playbuzz.com/image/upload/ar_1.5,c_crop/v1556901078/isndqlxvo8n9fpogzlms.gif,
    text: hola archivo,
    file: pruebas\\archivo.md,
    status: 200,
    ok: ok
  }
]
```

**_Cuando options es igual a validate === false_** 

```js
const mdLinks = require('mdlinks')
mdLinks("./pruebas/archivo.md")
```
_Retornará una promesa que resuelve un Array de objetos, donde cada objeto representa un link y contiene las siguientes propiedades:_

```
[
  {
    href: https://img.playbuzz.com/image/upload/ar_1.5,c_crop/v1556901078/isndqlxvo8n9fpogzlms.gif,
    text: hola archivo,
    file: pruebas\\archivo.md,
  }
]
```

## 4. CLI

### 4.1 Diagrama de Flujo

[ ](./img/CLI.png)

### 4.2 Guía de Uso

La librería es ejecutable a través de la linea de comando de la siguiente manera:

#### Ejemplo 

**_Cuando ingresas el comando md-links + la ruta del archivo o directorio_** 

_Retornará un Array que representara cada link las siguientes propiedades:_

```
$  md-links ./pruebas/archivo.md
[
  'C:\\Users\\Usuario\\Documents\\LABORATORIA\\PROYECTO MD\\BOG004-md-links\\pruebas\\archivo.md https://img.playbuzz.com/image/upload/ar_1.5,c_crop/v1556901078/isndqlxvo8n9fpogzlms.gif hola archivo'
]
```
#### Ejemplo Opcion --validate

**_Cuando ingresas el comando md-links + la ruta del archivo o directorio + --validate_** 

_Retornará un Array con la validación de cada link las siguientes propiedades:_

```
$  md-links ./pruebas/archivo.md --validate
[
  'pruebas\\archivo.md https://img.playbuzz.com/image/upload/ar_1.5,c_crop/v1556901078/isndqlxvo8n9fpogzlms.gif OK 200 hola archivo',
]
```

#### Ejemplo Opcion --stats

**_Cuando ingresas el comando md-links + la ruta del archivo o directorio + --stats_** 

_Retornará un Array con las estadisticas de cada link las siguientes propiedades: (Total:cantidad de links en el archivo, Unique:cantidad de links unicos contando solo una vez los links repetidos)_

```
$  md-links ./pruebas/archivo.md --stats
 Total:  6
 Unique:  5
```
#### Ejemplo Opcion --validate --stats

**_Cuando ingresas el comando md-links + la ruta del archivo o directorio + --validate --stats_** 

_Retornará un Array con las estadisticas de cada link las siguientes propiedades: (Total:cantidad de links en el archivo, Unique:cantidad de links unicos contando solo una vez los links repetidos, Broken:Cantidad de links rotos o invalidos)_

```
$  md-links ./pruebas/archivo.md --validate --stats
 Total:  6 
 Unique:  5
 Broken:  3
```


## 5. Creadora
:smiley_cat:
[ANGIE HERRERA](https://github.com/angiephb/BOG004-md-links) :smiley_cat: