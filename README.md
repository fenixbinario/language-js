# language-js
Soporte multi-idioma simple con JavaScript. **No necesita ninguna libreria (jQuery, Angular, etc)**.
## Como usarlo: 
Añadir el archivo JavaScript *language.js*
```html
  <script type="text/javascript" src="language.js"></script>
```

### Crear archivos de traduccion.
Crear una carpeta llamada */locale/*.

Crear los archivos dentro de esa carpeta, el nombre de estos archivos debe ser:

language-**identificadorSeccion**-**identificadorIdioma**.js.


*identificadorSeccion*: Un simple identificador para separar los archivos de traduccion.

*identificadorIdioma*: Identificador de idioma con el standard [ISO 639-1](https://es.wikipedia.org/wiki/ISO_639-1).

Ejemplos:

Seccion | Español (es) | Ingles (en)
------- | -------- |------
index.html | language-*index*-*es*.js | language-*index*-*en*.js
settings.html | language-*settings*-*es*.js | language-*settings*-*en*.js

#### Estructura del archivo de traduccion:
Dentro de cada archivo, tiene que ir un codigo parecido a este:
```javascript
var localization = {
	identificador: "Texto",
};
```


[Articulo](http://murodev.blogspot.com/2016/02/multi-idioma-javascript.html)
