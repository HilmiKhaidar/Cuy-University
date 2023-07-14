let nama = "hlimiaaz";
let usia = 23;

function generateBiodata() {
  if (usia > 10 && usia < 18 ) {
    console.log("anda remaja");
  } 
  else if ( usia > 18 && usia < 30) {
    console.log("anda dewasa");
  }
  else {
  	console.log("wah elu jenis orang mana ya gue bingung TvT")
  }
}

console.log(nama);
console.log(usia);

generateBiodata();
