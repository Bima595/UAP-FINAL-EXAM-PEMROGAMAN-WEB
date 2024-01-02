 const barang = {
        "001": { nama: "A", harga: 10000 },
        "002": { nama: "B", harga: 20000 },
        "003": { nama: "C", harga: 30000 },
      };


      function tampilkanDaftarBarang() {
        const daftarBarangElement = document.getElementById("daftarBarang");

        for (const kode in barang) {
          const { nama, harga } = barang[kode];
        
          const row = document.createElement("tr");

          const kodeCol = document.createElement("td");
          kodeCol.textContent = kode;
          row.appendChild(kodeCol);

          const namaCol = document.createElement("td");
          namaCol.textContent = nama;
          row.appendChild(namaCol);

          const hargaCol = document.createElement("td");
          hargaCol.textContent = harga;
          row.appendChild(hargaCol);

          daftarBarangElement.appendChild(row);
        }
      }

      function Tambah() {
        var kodeBarang = document.getElementById("code1").value;
        var banyakBarang = document.getElementById("code2").value;

        if (barang.hasOwnProperty(kodeBarang)) {
          var hargaBarang = barang[kodeBarang].harga;

          var total = banyakBarang * hargaBarang;

          alert("total " + total);

          var jumlah = prompt("Masukan uang: ");

          var kembalian = jumlah - total;

          alert("kembalian" + kembalian);
        } else {
          alert("Kode Barang invalid");
        }
      }

      document.addEventListener("DOMContentLoaded", function () {
        tampilkanDaftarBarang();
      });