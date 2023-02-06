function generateStartupName(text) {
    var vowels = "aeiouAEIOU";
    var result = "";
    for (var i = 0; i < text.length; i++) {
        if (vowels.indexOf(text[i]) === -1) {
            result += text[i];
        }
    }
    return result;
}
