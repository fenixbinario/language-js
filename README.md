# language-js
Soporte multi-idioma simple con JavaScript.
## Como usarlo:
1. Añadir el archivo JavaScript *language.js*:

```html
  <script src="language.js"></script>
```

Y tambien indicar que elementos tienen traduccion (ver *Crear las traducciones* en este documento para saber mas):
```javascript
var LanguageJS = new LanguageJS([
    "title",
    "description"
]);
```


2. Crear archivos de traduccion.
Crea una carpeta llamada */locale/*.

Crear los archivos dentro de esa carpeta, el nombre de estos archivos debe ser:

>bd-**identificadorSeccion**-**identificadorIdioma**.js.

*identificadorSeccion*: Un simple identificador para separar los archivos de traducción segun la seccion que traduzcan.

*identificadorIdioma*: Identificador de idioma (Recomendado el standard [ISO 639-1](https://es.wikipedia.org/wiki/ISO_639-1)).

Ejemplos:

Seccion | Español (es) | Ingles (en)
------- | -------- |------
index.html | bd-*index*-*es*.js | language-*index*-*en*.js
settings.html | bd-*settings*-*es*.js | language-*settings*-*en*.js


3. Crear las traducciones:

Dentro de cada archivo antes creado, se deben crear las traducciones con esta estructura:
```javascript
var localization = {
	identificador: "Texto de traudccion",
};
```

Por ejemplo:
```javascript
var localization = {
	titulo: "Mi pagina",
    descripcion: "Esta es mi pagina web."
};
```


4. Asignar identificadores a cada elemento HTML a traducir:

Para que se traduzca correctamente, debemos ir a nuestra HTML y añadir una clase que relacione el objeto con el texto que nemos introducido en los archivo de traduccion.
Para que no existan confusiones sobre las clases, estas lleva un prefijo (*lang__*) del que va acompañado el identificador:
```html
    <p class="lang__identificador">Texto</p>
```

Ejemplo:
```html
    <p class="lang__titulo">Mi pagina</p>
```


5. Llamar a la funcion para traducir:
Funcion en JavaScript:
```javascript
    LanguageJS.translate('identificadorIdioma', 'identificadorSeccion');
```

Por ejemplo:
```javascript
    LanguageJS.translate('es', 'index');
```

Este seria un ejemplo con varios idiomas:
```html
<a href="#" onclick="LanguageJS.translate('es', 'index');">Español</a>
<a href="#" onclick="LanguageJS.translate('en', 'index');">Ingles</a>
<a href="#" onclick="LanguageJS.translate('it', 'index');">Italiano</a>
```

[Articulo](http://murodev.blogspot.com/2016/02/multi-idioma-javascript.html)
