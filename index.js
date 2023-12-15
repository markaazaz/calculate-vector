        const vektorKolomKiri_0 = document.querySelector("#num1");
        const vektorKolomKanan_0 = document.querySelector("#num2");
        const vektorKolomKiri_1 = document.querySelector("#num3");
        const vektorKolomKanan_1 = document.querySelector("#num4");
        const vektorKolomKiri_2 = document.querySelector("#num5");
        const vektorKolomKanan_2 = document.querySelector("#num6");
        const vektorResult = document.querySelector("#result");

        // addition
        document.querySelector("#add").addEventListener("click", function () { 
        const kolom1 = 
          parseInt(vektorKolomKiri_0.value) + 
          parseInt(vektorKolomKanan_0.value); 
        const kolom2 = 
          parseInt(vektorKolomKiri_1.value) + 
          parseInt(vektorKolomKanan_1.value); 
        const kolom3 = 
          parseInt(vektorKolomKiri_2.value) + 
          parseInt(vektorKolomKanan_2.value); 
        vektorResult.value = `${kolom1},${kolom2},${kolom3}`; 
      });

      // substraction
      document.querySelector("#sub").addEventListener("click", function () { 
        const kolom1 = 
          parseInt(vektorKolomKiri_0.value) - 
          parseInt(vektorKolomKanan_0.value); 
        const kolom2 = 
          parseInt(vektorKolomKiri_1.value) - 
          parseInt(vektorKolomKanan_1.value); 
        const kolom3 = 
          parseInt(vektorKolomKiri_2.value) - 
          parseInt(vektorKolomKanan_2.value); 
        vektorResult.value = `${kolom1},${kolom2},${kolom3}`; 
      });

      // dot-product
      document.querySelector("#dot-product").addEventListener("click", function () { 
        const kolom1 = 
          parseInt(vektorKolomKiri_0.value) * 
          parseInt(vektorKolomKanan_0.value); 
        const kolom2 = 
          parseInt(vektorKolomKiri_1.value) * 
          parseInt(vektorKolomKanan_1.value); 
        const kolom3 = 
          parseInt(vektorKolomKiri_2.value) * 
          parseInt(vektorKolomKanan_2.value); 
        vektorResult.value = kolom1 + kolom2 + kolom3;
        // `${kolom1},${kolom2},${kolom3}`; 
      });

      // cross-product
      document.querySelector("#cross-product").addEventListener("click", function () { 
        const kolom1 = 
          (parseInt(vektorKolomKiri_1.value) * parseInt(vektorKolomKanan_2.value)) -
          (parseInt(vektorKolomKiri_2.value) * parseInt(vektorKolomKanan_1.value));
          //a2 b3 - a3 b2       
        const kolom2 = 
          (parseInt(vektorKolomKiri_2.value) * parseInt(vektorKolomKanan_0.value)) - 
          (parseInt(vektorKolomKiri_0.value) * parseInt(vektorKolomKanan_2.value));
          //a3 b1 - a1 b3
        const kolom3 = 
          (parseInt(vektorKolomKiri_0.value) * parseInt(vektorKolomKanan_1.value)) - 
          (parseInt(vektorKolomKiri_1.value) * parseInt(vektorKolomKanan_0.value)); 
          //a1 b2 - a2 b1
        vektorResult.value = `${kolom1},${kolom2},${kolom3}`; 
      });

      // transform elementer baris
      document.querySelector("#elementerBar").addEventListener("click", function () { 
        const baris_1 =
          `${parseInt(vektorKolomKiri_0.value)},${parseInt(vektorKolomKanan_0.value)}`;

        const baris_2 =
          `${parseInt(vektorKolomKiri_1.value)},${parseInt(vektorKolomKanan_1.value)}`;

        const baris_3 =
          `${parseInt(vektorKolomKiri_2.value)},${parseInt(vektorKolomKanan_2.value)}`;

        vektorResult.value = `[${baris_2}],[${baris_3}],[${baris_1}]`;
      });

      // transform elementer kolom
      document.querySelector("#elementerKol").addEventListener("click", function () { 
        const elemKolom_1 =
          `${parseInt(vektorKolomKiri_0.value)},${parseInt(vektorKolomKiri_1.value)},${parseInt(vektorKolomKiri_2.value)}`;

        const elemKolom_2 =
          `${parseInt(vektorKolomKanan_0.value)},${parseInt(vektorKolomKanan_1.value)},${parseInt(vektorKolomKanan_2.value)}`;

          vektorResult.value = `[${elemKolom_2}],[${elemKolom_1}]`;
      });