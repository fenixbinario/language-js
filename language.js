function initTranslation(sectionID){
  var languageID = 'es';
  if(languageID && sectionID){
        var translationFile = document.createElement('script');
		translationFile.type = 'text/javascript';
		translationFile.src = "locale/language-"+sectionID+"-"+languageID+".js";
		document.getElementsByTagName('body')[0].appendChild(translationFile);

		setTimeout(function(){
	    		translateApp();
		}, 2000);
	}else{
		  alert('No se ha creado el archivo de traduccion.');
    }
}

function translateApp(){
	var translateIDs = [
		"title",
		"description",
		"translate"
	];
	
	for(i = 0; i<translateIDs.length;i++){
		var elementToTranslate = document.getElementsByClassName('lang__'+translateIDs[i]);
		for(ii = 0; ii<elementToTranslate.length;ii++){
			elementToTranslate[ii].innerHTML = translateIDs[i];
		}
	}
}
