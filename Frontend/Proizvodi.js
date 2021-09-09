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
            console.log(i);
            /*console.log(this.listaNaziva.length); 
            console.log(br);
            if(this.listaNaziva.length==0)
             {
                 i=1;
                 
             }
             if(  i!=0){
                     host1.innerHTML="";
                   // this.listaNaziva.length==0 ||
                     i--;
             }
             if(br>0)
             {
                 host1.innerHTML="";
                 br=0;
             }*/
            if (i > 0) {
                ;
                while (i > 0) {

                    if (document.getElementById(i)!=null) {
                        var el = document.getElementById(i);

                        document.getElementById(i).remove();
                        i--;
                        // el.remove();
                    }

                    }

                }


                this.listaNaziva.forEach((naziv) => {
                    i++;
                    //br++;
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
        pronadjiNaz(naz){
            /*this.listaNaziva.forEach(naziv=>{
                if(naziv.naziv==naz)
                 {
                    console.log(naziv.naziv);
                    return naziv.naziv;
                    }
                 else{
                     return false;
                 }
              });*/
            let n = this.listaNaziva.find(nazivv => nazivv.naziv == naz);

            return n;
        }
        upisiProizvod(pr){
            if (this.brojProizvoda < this.maxProizvoda) {
                /*console.log(pr);
                fetch("https://localhost:5001/Magacin/UpisJednogProizvoda/" + pr.tip+ pr.marka, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        naziv: pr.naziv,
                        tip: pr.tip
                    })
                })*/
            }
            else {
                alert("Kapacitet je pun!");
            }


        }
        obrisiProizvod(pr){
            console.log(pr);
            this.listaNaziva.pop(pr);
            console.log(this.listaNaziva);
            this.brojProizvoda--;
            i = 0;

        }

    }