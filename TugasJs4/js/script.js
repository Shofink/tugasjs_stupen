let frm = document.getElementById('cetak');
    let jabatanPilihan = ["Manager", "Asisten Manager", "Staff"];
    let pilihJabatan = `<option value=""> Pilih Jabatan ----- </option> `;
    for (let j in jabatanPilihan){
        pilihJabatan += `<option value"${jabatanPilihan[j]}">${jabatanPilihan[j]}</option>`;
    }
    frm.jabatan.innerHTML = pilihJabatan;

    let statusPilihan = ["Menikah", "Belum Menikah"];
    let pilihStatus = `<option value=""> Pilih Status ----- </option> `;
    for (let s in statusPilihan){
        pilihStatus += `<option value"${statusPilihan[s]}">${statusPilihan[s]}</option>`;
    }
    frm.status.innerHTML = pilihStatus;

    function dataPerson(){
        let nama = frm.nama.value;
        let jabatan = frm.jabatan.value;
        let status = frm.status.value;
        
       

    let gaji;
    switch(jabatan){
        case "Manager" : gaji = 15000000; break;
        case "Asisten Manager" : gaji = 10000000; break;
        case "Staff" : gaji = 5000000; break;
        default: gaji = 0;
    }

    let tunjanganJabatan = 0.15 * gaji;
    let bpjs = 0.1 * gaji;
    let tunjangankeluarga = (status === "Menikah") ? 0.2 * gaji : 0;
    let totalgaji = gaji + tunjanganJabatan + bpjs + tunjangankeluarga;

    let input = 'Nama : ' + nama + '<br> Jabatan : ' + jabatan + '<br> Status : ' + status + '<br>Total Gaji : ' + totalgaji;
  
    let hasil = (nama && jabatan && status && totalgaji)? input : no_input;
    document.getElementById('hasil').innerHTML = hasil;
    }
    
    