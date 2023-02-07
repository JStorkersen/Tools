
class Dictionary{
    
    constructor(...languages){
        this.languagefiles = languages
        this.dictionary = null;
        this.currentLanguage = null
    }

    setLanguage = async function(lang){
        // Velger språket som skal brukes.

        let languageFile = this.languagefiles.find( file => {
             return file.indexOf(lang) != -1
            });
        
        this.currentLanguage = lang;

        this.dictionary = await import(languageFile, { assert: { type: "json" } });
    }

}

export default Dictionary;