function rand(length) {
    result           = '';
    characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    charactersLength = characters.length;
    for (i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    document.write(result,"<hr>")
 }

 function rand20(length) {
    result           = '';
    characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    charactersLength = characters.length;
    for (i = 0; i < length; i++) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength))+" ";
    }
    document.write(result,"<hr>")
 }




