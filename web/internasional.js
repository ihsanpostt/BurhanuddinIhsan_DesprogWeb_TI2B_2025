const cards = document.querySelectorAll(".produk-card");
const keranjangList = document.getElementById("daftar-keranjang");
const totalText = document.getElementById("total");

let totalHarga = 0;
let keranjang = {};

/*untuk menambah dan mengurangi jumlah sapi*/
cards.forEach(card => {
  const btnPlus = card.querySelector(".btn-plus");
  const btnMinus = card.querySelector(".btn-minus");
  const jumlahSpan = card.querySelector(".jumlah");
  const btnBuy = card.querySelector(".btn-buy");

/*fungsi untuk menambah dan mengurangi jumlah sapi*/
  let jumlah = 0;

  btnPlus.addEventListener("click", () => {
    jumlah++;
    jumlahSpan.textContent = jumlah;
  });

  btnMinus.addEventListener("click", () => {
    if (jumlah > 0) {
      jumlah--;
      jumlahSpan.textContent = jumlah;
    }
  });
/*menambah produk ke keranjang*/
  btnBuy.addEventListener("click", () => {
    const nama = card.dataset.nama;
    const harga = parseInt(card.dataset.harga);

    if (jumlah > 0) {
      if (keranjang[nama]) {
        keranjang[nama].jumlah += jumlah;
      } else {
        keranjang[nama] = { harga, jumlah };
      }
      jumlah = 0;
      jumlahSpan.textContent = 0;
      updateKeranjang();
    } else {
      alert("Tambahkan jumlah sapi terlebih dahulu!");
    }
  });
});

/*fungsi update keranjang*/
function updateKeranjang() {
  keranjangList.innerHTML = "";
  totalHarga = 0;

  for (const nama in keranjang) {
    const item = keranjang[nama];
    const subtotal = item.harga * item.jumlah;
    totalHarga += subtotal;

    const li = document.createElement("li");
    li.textContent = `${nama} (${item.jumlah} ekor) - Rp. ${subtotal.toLocaleString("id-ID")}`;
    keranjangList.appendChild(li);
  }

  totalText.textContent = `Total: Rp. ${totalHarga.toLocaleString("id-ID")}`;
}


