function LanguageJS(items) {
    this.addLanguageFile = function(){
        var languageFile = document.getElementById('languageFile');
        (languageFile != null) ? languageFile.parentNode.removeChild(languageFile):"";
        languageFile = document.createElement('script');
        languageFile.src = "locale/bd-" + this.section + "-" + this.languageID + ".js";
        languageFile.id = "languageFile";
        document.getElementsByTagName('body')[0].appendChild(languageFile);
    }

    this.translate = function(languageID, section) {
        this.languageID = new String(languageID);
        this.section = new String(section);
        this.addLanguageFile();
        var languageFile = document.getElementById('languageFile');
        languageFile.onload = function(){
            for (var i in items) {
                var elementToTranslate = document.getElementsByClassName('lang__' + items[i]);
                for (var o in elementToTranslate) {
                    elementToTranslate[o].innerHTML = localization[items[i]];
                }
            }
        }
    }
}
