
import Dictionary from "./Tools.mjs"

function testLanguage(){
    const languages = ["./languages/no.json", "./languages/en.json"];
    const dictionary = new Dictionary(...languages);
    dictionary.setLanguage("no");
    test(JSON.stringify(dictionary.languagefiles) === JSON.stringify(languages), "Testing setting of languages");
}

function test(test, description){
    if(test){
        console.log("🟢" + description);
    } else{
        console.log("🔴" + description);
    }
}

testLanguage(); 