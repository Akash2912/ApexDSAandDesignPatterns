public with sharing class stripZeros {

    public String strip(String text) {
        if(text.startsWith('0')){
            
            String substring = text.substring(1);
            String newString = strip(substring);
            return newString;
        }
        return text;
    }
}
