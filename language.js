function LanguageJS(itemsToTranslate) {
    this.addLanguageFile = function(){
        var languageFile = document.getElementById('languageFile');
        (languageFile != null) ? languageFile.parentNode.removeChild(languageFile):"";
        languageFile = document.createElement('script');
        languageFile.src = "locale/bd-" + this.sectionID + "-" + this.languageID + ".js";
        languageFile.id = "languageFile";
        document.getElementsByTagName('body')[0].appendChild(languageFile);
    }

    this.translate = function(languageID, sectionID) {
        this.languageID = new String(languageID);
        this.sectionID = new String(sectionID);
        this.addLanguageFile();
        var languageFile = document.getElementById('languageFile');
        languageFile.onload = function(){
            for (var i in itemsToTranslate) {
                var elementToTranslate = document.getElementsByClassName('lang__' + itemsToTranslate[i]);
                for (var o in elementToTranslate) {
                    elementToTranslate[o].innerHTML = localization[itemsToTranslate[i]];
                }
            }
        }
    }
}
