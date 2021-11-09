// alert("Simple Market JS")
class Produk {
    constructor(_sku, _img, _nama, _kategori, _stok, _harga) {
        this.sku = _sku; //SKU-xxxxxx
        this.img = _img;
        this.nama = _nama;
        this.kategori = _kategori;
        this.stok = _stok;
        this.harga = _harga;
    }
}

let dataProduk = [
    {
        sku: "SKU-1-126374",
        img: "https://cdn1-production-images-kly.akamaized.net/_rs9uvS4NgkmKEzerOrUdbe_QoM=/640x640/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/1170319/original/065589700_1457942078-a99626_kids-911_9-oreo.jpg",
        nama: "Oreo Coklat",
        kategori: "Makanan",
        stok: 12,
        harga: 7500
    },
    {
        sku: "SKU-2-198374",
        img: "https://id-live-05.slatic.net/p/cc79d0a7f3820ad5916a224e02915312.jpg_720x720q80.jpg_.webp",
        nama: "Pocari Sweat",
        kategori: "Minuman",
        stok: 24,
        harga: 10000
    }
];

function btnSimpan() {
    // Mengambil data dri element input form
    let form = document.getElementById("form-produk")
    let sku = `SKU-${dataProduk.length + 1}-${Math.round(Math.random() * 1000000)}`;
    let img = form.elements[0].value;
    let nama = form.elements[1].value;
    let harga = form.elements[2].value;
    let stok = form.elements[3].value;
    let kategori = form.elements[4].value;

    // Proteksi
    if (img == "" || nama == "" || harga == "" || stok == "" || kategori == "" || kategori == "null") {
        alert("Isi semua data dengan benar")
    } else {
        dataProduk.push(new Produk(sku, img, nama, kategori, parseInt(stok), parseInt(harga)))
    }
    console.log(dataProduk)
    // reset ulang input element
    form.elements[0].value = "";
    form.elements[1].value = "";
    form.elements[2].value = "";
    form.elements[3].value = "";
    form.elements[4].value = null;
    // render ulang tampilan produk
    printProduk()
}

function printProduk(data = dataProduk) {
    document.getElementById("table-produk").innerHTML = data.map((value, index) => {
        return `<tr>
        <td>${value.sku}</td>
        <td><img src="${value.img}" width="150px"></td>
        <td>${value.nama}</td>
        <td>${value.kategori}</td>
        <td>${value.stok.toLocaleString()}</td>
        <td>IDR. ${value.harga.toLocaleString()}</td>
        <td><button  type="button" >Edit</button>
            <button type="button" onclick="deleteProduk(${index})">Delete</button>
        </td>
    </tr>`
    }).join('')
}


const deleteProduk = (idx) => {
    // SKU
    /**
     * 1. fungsi button harus mendapatkan data sku melalui parameter
     * 2. gunakan data sku untuk mencari index dari data
     * 3. jika index ditemukan, baru kita gunakan splice untuk menghpus berdasarkan index
     * 4. setelah hapus, kemudian render ulang
     * 
    */
    // index
    /**
     * 1. fungsi button harus mendapatkan data index melalui parameter
     * 2. jika index ditemukan, baru kita gunakan splice untuk menghpus berdasarkan index
     * 3. setelah hapus, kemudian render ulang
     * 
    */
    if (confirm(`Anda yakin menghapus produk ${dataProduk[idx].sku} ${dataProduk[idx].nama} ?`)) {
        dataProduk.splice(idx, 1)
        printProduk()
    }
}

const btnFilter = () => {
    // 1. get value dari filter form
    let form = document.getElementById("form-filter")
    let filterNama = form.elements[0].value
    let filterMin = form.elements[1].value
    let filterMax = form.elements[2].value
    let filterKategori = form.elements[3].value
    console.log(filterNama, filterMin, filterMax, filterKategori)

    // 2. proses filter data
    let dataFilter = dataProduk.filter((value, index) => {
        if (filterKategori != "null") {
            return value.kategori == filterKategori
        } else if (filterNama.length > 0) {
            return value.nama.toLowerCase().includes(filterNama.toLowerCase())
        } else if (filterMin >= 0 && filterMax >= 0) {
            return value.harga >= filterMin && value.harga <= filterMax
        }
    })

    console.log("Cek data filter", dataFilter)

    // 3. proses cetak data
    printProduk(dataFilter)

    // Reset form value
    form.elements[0].value = ""
    form.elements[1].value = ""
    form.elements[2].value = ""
    form.elements[3].value = "null"
}

const btnReset = () => {
    printProduk()
}

printProduk()