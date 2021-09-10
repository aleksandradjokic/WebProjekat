import { Proizvod } from "./Proizvod.js"
var i = 0; var br = 0;
export class Proizvodi {
    constructor(maxProizvoda, brojProizvoda, tip, marka) {
   
        this.maxProizvoda = maxProizvoda;
        this.brojProizvoda = brojProizvoda;
        this.tip = tip;

        this.marka = marka;

        this.miniKontejner = null;

        this.listaNaziva = [];
    }

    crtajProizvod(host, host1) {
        this.miniKontejner = document.createElement("button");
        this.miniKontejner.classList.add("butt");
        this.miniKontejner.innerHTML = this.tip + " " + this.brojProizvoda + "/" + this.maxProizvoda;

        host.appendChild(this.miniKontejner);

        const kont = document.createElement("label");
        host1.appendChild(kont);

        this.miniKontejner.onclick = (ev) => {

/* if(kont!=null)
{
    kont.innerHTML="";
}

this.listaNaziva.forEach((naziv) => {
   // i++;

    naziv.crtajNaziv(kont, i);

})
           fetch("https://localhost:5001/Magacin/PreuzmiProizvod").then(p => {
          p.json().then(data => {
            data.forEach(proiz => {
                if(proiz.tip==this.tip && proiz.marka==this.marka&& proiz.naziv==t)
                console.log(proiz);
                    //proiz.crtajNaziv(kont, i);
                    proiz.listaNaziva.forEach((n) => {
                       // i++;
        
                        //n.crtajNaziv(kont, i);
        
                    })
            });
        });
    });*/
            if (i > 0) {

                while (i > 0) {
console.log(i);
                    if (document.getElementById(i)) {
                        var el = document.getElementById(i);

                        document.getElementById(i).remove();
                        i--;

                    }
                    else{
                        i=0;
                    }

                }

            }


            this.listaNaziva.forEach((naziv) => {
                i++;

                naziv.crtajNaziv(kont, i);

            })

        }
    }

    dodajProizvod(pr) {
        this.listaNaziva.push(pr);
    }
    proveraNaziva(noviNaziv) {
        let pom = false;
        this.listaNaziva.forEach((naziv) => {
            if (noviNaziv.naziv == naziv.naziv) {
                pom = true;
            }
        });
        return pom;
    }
    pronadjiN(naz) {

        let n = this.listaNaziva.find(nazivv => nazivv.naziv == naz);

        return n;
    }
    upisiProizvod(pr) {
        if (this.brojProizvoda < this.maxProizvoda) {

        }
        else {
            alert("Kapacitet je pun!");
        }


    }
    obrisiProizvod(pr) {
        const index = this.listaNaziva.indexOf(pr);
        if (index > -1) {
            this.listaNaziva.splice(index, 1);
            this.brojProizvoda--;
          }
        //this.listaNaziva.pop(pr);

        //this.brojProizvoda--;
        //i = 0;

    }

}