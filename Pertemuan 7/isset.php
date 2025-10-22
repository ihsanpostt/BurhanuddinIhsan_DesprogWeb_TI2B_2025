<?php

echo"Percobaan 1 <br>";
$umur;
if (isset($umur) && $umur >= 18) {
    echo "anda sudah dewasa";
} else {
    echo "anda belum dewasa atau variabel 'umur' tidak ditemukan";
}
echo"<br><br>Percobaan 2<br>";
$data = array("nama" => "Burhanuddin", "usia" => 18);
if (isset($data["nama"])){
    echo "Nama: " . $data ["nama"];
} else {
    echo "variabel 'nama' tidak ditemukan dalam array";
}
?>
