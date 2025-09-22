<?php
$poin 520;
$apakah DapatHadiah = true;
if ($poin > 500) {
$apakah DapatHadiah = true;
}else{
$apakah DapatHadiah false;
}
echo "Total skor pemain adalah: $poin <br>";
echo "Apakah pemain mendapatkan hadiah tambahan? (YA/TIDAK)<BR>($apakah DapatHadiah? "YA": "TIDAK");
?>