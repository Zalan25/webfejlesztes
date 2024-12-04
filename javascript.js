function ar() {
    var mezar = 8000;
    var labdaar = 15000;
    var sapkaar = 7000;
    var jegy1ar = 40000;
    var jegy2ar = 70000;
    var jegy3ar = 100000;

    let osszeg = 0;
    let termekek = 0;

    let mez_db = document.getElementById("mezekdb").value;
    let labda_db = document.getElementById("labdadb").value;
    let sapka_db = document.getElementById("sapkadb").value;
    let jegy1_db = document.getElementById("jegy1db").value;
    let jegy2_db = document.getElementById("jegy2db").value;
    let jegy3_db = document.getElementById("jegy3db").value;

    if (mez_db > 0) {
        osszeg += mez_db * mezar;
        termekek++;
    }
    if (labda_db > 0) {
        osszeg += labda_db * labdaar;
        termekek++;
    }
    if (sapka_db > 0) {
        osszeg += sapka_db * sapkaar;
        termekek++;
    }
    if (jegy1_db > 0) {
        osszeg += jegy1_db * jegy1ar;
        termekek++;
    }
    if (jegy2_db > 0) {
        osszeg += jegy2_db * jegy2ar;
        termekek++;
    }
    if (jegy3_db > 0) {
        osszeg += jegy3_db * jegy3ar;
        termekek++;
    }


    document.getElementById("eredmeny").value = osszeg;

    if (osszeg > 70000 && termekek > 1) {
        document.getElementById("gratulacio").style.display = "block";
    } else {
        document.getElementById("gratulacio").style.display = "none";
    }
}
