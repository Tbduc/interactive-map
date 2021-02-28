let provinces = {
  Masovian :
  {
    title : "Masovian",
    description : "The most advanced region in the country",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/35/Warsaw_Old_Town_Market_Square_10.JPG"
  },
  Pomeranian :
  {
    title : "Pomeranian",
    description : "Sea side of the country",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/96/Basen-portowy-gdynia.jpg"
  },
  WarmianMasurian :
  {
    title : "Warmian-Masurian",
    description : "Closer to the sea in the country",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d3/E%C5%82k_i_E%C5%82k_003.jpg"
  },
  LowerSilesian :
  {
    title : "Lower Silesian",
    description : "It is one of the richest provinces in Poland",
    image: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Wroclaw_rynek_%282015%29.JPG"
  },
  WestPomeranian :
  {
    title : "West Pomeranian",
    description : "Land by the sea",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Putbus_%282011-05-21%29_3.JPG"
  },
  Lubusz :
  {
    title : "Lubusz",
    description : "Land of forests and lakes",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/78/Gorz%C3%B3w_Wlkp.estakada_kolejowa_i_bulwary.JPG"
  },
  GreaterPoland :
  {
    title : "Greater Poland",
    description : "Greater Poland, sometimes called the \"cradle of Poland\"",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/5b/Ayuntamiento%2C_Poznan%2C_Polonia%2C_2014-09-18%2C_DD_73-75_HDR.jpg"
  },
  KuyavianPomeranian :
  {
    title : "Kuyavian-Pomeranian",
    description : "Kuyavia-Pomerania is a major node in the Polish transportation system",
    image: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Wiecbork_z_lotu_ptaka3.jpg"
  },
  Silesian :
  {
    title : "Silesian",
    description : "It is the largest urbanised area in Central and Eastern Europe",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Altus_i_okolice.JPG"
  },
  Łódź :
  {
    title : "Łódź",
    description : "The province is named after its capital and largest city, Łódź",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/72/%C5%81%C3%B3d%C5%BA_-_Pa%C5%82ac_Izraela_Pozna%C5%84skiego.jpg"
  },
  Świętokrzyskie :
  {
    title : "Świętokrzyskie",
    description : "It is situated in southeastern Poland, in the historical region of Lesser Poland, and takes its name from the Świętokrzyskie (Holy Cross) mountain range",
    image: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Dworzec_PKS_Ko%C5%9Bci%C3%B3%C5%82_Kielce.jpg"
  },
  Podlachian :
  {
    title : "Podlachian",
    description : "The voivodeship takes its name from the historic region of Poland called Podlasie",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d2/Wisentsauerland.jpg"
  },
  Lublin :
  {
    title : "Lublin",
    description : "The region is named after its largest city and regional capital, Lublin, and its territory is made of four historical lands",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Lublin_PanoramaStaregoMiasta.JPG"
  },
  Subcarpathian :
  {
    title : "Subcarpathian",
    description : "It is one of the most wooded Polish voivodeships (35.9% of total area), within its borders there is whole Bieszczady National Park, and parts of Magura National Park",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/47/Jasio%C5%82ka_River_park.jpg"
  },
  Opole :
  {
    title : "Opole",
    description : "The province's name derives from that of the region's capital and largest city, Opole",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Oppeln_-_Altstadt1-description.jpg"
  },
  LesserPoland :
  {
    title : "Lesser Poland",
    description : "Located in Southern Poland, Lesser Poland is the warmest place in Poland with average summer temperatures between 23 °C (73 °F) and 30 °C (86 °F) during the day",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/dd/Nt-223.jpg"
  },
}

var body = document.getElementsByTagName("BODY")[0];
var polandMap = document.getElementById("map");
var provinceInfo = document.getElementById("provinceInfo");
var allProvinces = polandMap.querySelectorAll("path");
var path = polandMap.getElementsByTagName("path");

polandMap.addEventListener("click", function(e){
    var province = e.target;
    var stateNames = Object.keys(provinces);
    if (e.target.nodeName == "path") {
        for (var i=0; i < allProvinces.length; i++) {
            allProvinces[i].classList.remove("active");
            if (province.getAttribute('name') == (stateNames[i])) {
              provinceInfo.innerHTML = "";
          		provinceInfo.insertAdjacentHTML("afterbegin", "<img src='" + provinces[stateNames[i]].image +"'><h1>"+ provinces[stateNames[i]].title +"</h1><p>"+ provinces[stateNames[i]].description +"</p>");
              provinceInfo.classList.add("show");
            }
        }
        province.classList.add("active");
    }
})

body.addEventListener('click', (e) => {
  if (!$(e.target).parents().addBack().is(path)) {
   console.log('Click outside');
   provinceInfo.classList.remove('show');
   for (var i=0; i < allProvinces.length; i++) {
     if($(e.target).parents().addBack().is(provinceInfo) && allProvinces[i].classList.contains('active')) {
       allProvinces[i].classList.add('active')
     } else {
       allProvinces[i].classList.remove('active')
     }
   }
  } else {
   console.log('Click inside');
 }
 if ($(e.target).parents().addBack().is(provinceInfo)) {
   provinceInfo.classList.add('show');
   console.log('clicked on pop up');
   for (var i=0; i < allProvinces.length; i++) {
     if(allProvinces[i].classList.contains('active')) {
       allProvinces[i].classList.add('active')
     }
   }
 }
});
