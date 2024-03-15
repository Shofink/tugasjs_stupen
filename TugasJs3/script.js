function dataPerson(){
    let forms = document.getElementById('frm');
    let nama = forms.nama.value;
    let hobby = forms.hobby.value;
    let pekerjaan = forms.pekerjaan.value;
    let input = 'Nama anda ' + nama + '<br> Hobby Anda ' + hobby + '<br> Pekerjaan anda ' + pekerjaan ;
    let no_input = "Maaf nama, hobby, atau pekerjaan anda belum terisi";
    let hasil = (nama && hobby && pekerjaan) ? input : no_input;

    document.getElementById('hasil').innerHTML = hasil;
    // lengkapi kode berikut dan tampilkan hasilnya ada pada HTML
    // 1. isian nama
    // 2. isian pekerjaan
    // 3. isian Hobby
}