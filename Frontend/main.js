import { Raf } from "./Raf.js"
import { Magacin } from "./Magacin.js"
import { Proizvodi } from "./Proizvodi.js"
import { Proizvod } from "./Proizvod.js"

var d = document.createElement("div");
d.classList.add("da");
document.body.appendChild(d);

var pLabela = document.createElement("label");
pLabela.classList.add("lbl");
pLabela.innerHTML = "Naziv proizvoda";
d.appendChild(pLabela);

pLabela = document.createElement("input");
pLabela.className = "naziv";
d.appendChild(pLabela);

var d1 = document.createElement("div");
d1.classList.add("da");
document.body.appendChild(d1);

pLabela = document.createElement("label");
pLabela.innerHTML = "Novi naziv proizvoda:";
d1.appendChild(pLabela);

pLabela = document.createElement("input");
pLabela.className = "nnaziv";
d1.appendChild(pLabela);

var d2 = document.createElement("div");
d2.classList.add("da");
document.body.appendChild(d2);

pLabela = document.createElement("label");
pLabela.innerHTML = "Tip uredjaja:";
d2.appendChild(pLabela);

pLabela = document.createElement("input");
pLabela.className = "tip";
d2.appendChild(pLabela);

var d3 = document.createElement("div");
d3.classList.add("da");
document.body.appendChild(d3);

pLabela = document.createElement("label");
pLabela.innerHTML = "Marka proizvoda:";
d3.appendChild(pLabela);

pLabela = document.createElement("input");
pLabela.className = "marka";
d3.appendChild(pLabela);

var d4 = document.createElement("div");
d4.classList.add("da");
document.body.appendChild(d4);

const dugme1 = document.createElement("button");
dugme1.classList.add("bt");
dugme1.innerHTML = "Izmani proizvod";
d4.appendChild(dugme1);

/*dugme1.onclick = (ev) => {
    const markaP = document.body.querySelector(".marka").value;
    const tipP = document.body.querySelector(".tip").value;
    const nazivP = document.body.querySelector(".naziv").value;
    const nnazivP = document.body.querySelector(".nnaziv").value;
    console.log(markaP);
    console.log(tipP);
    console.log(nazivP);
    console.log(nnazivP);

    if (markaP == "") {
        alert("Molimo Vas unesite marku prilikom izmene proizvoda");
        return;
    }
    if (tipP == "") {
        alert("Molimo Vas unesite tip prilikom izmene proizvoda");
        return;
    }
    if (nazivP == "") {
        alert("Molimo Vas unesite naziv prilikom izmene proizvoda");
        return;
    }
    if (nnazivP == "") {
        alert("Molimo Vas unesite naziv prilikom izmene proizvoda");
        return;
    }

        
                                var id="magacin" + markaP + tipP + nazivP;
                                var mag="magacin";
                                fetch("https://localhost:5001/Magacin/IzmeniProizvod" + id , {
                                    method: "PUT",
                                    headers: {
                                        "Content-Type": "application/json"
                                    },
                                    body: JSON.stringify({
                                        idProizvod: id,
                                        naziv: nnazivP,
                                        tip: tipP,
                                        nazivM: mag,
                                        marka: markaP
                                    })
                                }).then(p => {
                                    if (p.ok) {
                                        console.log("Succesful");
                                        alert("Uspesna izmena osvezite stranicu");
                                    }//if (p.status == 406)
                                    else  {
                                        alert("Input all informations.");
                                    }
                                }).catch(p => {
                                    console.log("Error: " + p);
                                });
                                
                         //   }
                          

                        
}*/

let opcija = null;
let labela = null;
let divRb = null;
var pLabela = document.createElement("h3");
pLabela.classList.add("lbl");
pLabela.innerHTML = "Odaberite magacin";
document.body.appendChild(pLabela);
fetch("https://localhost:5001/Magacin/PreuzmiMagacin").then(p => {
    p.json().then(data => {
        data.forEach(magacin => {
            // const m = new Magacin(magacin.naziv, magacin.n, magacin.m, magacin.trenutno);

            divRb = document.createElement("div");
            opcija = document.createElement("input");
            opcija.type = "radio";
            opcija.name = "radioNazivi";
            opcija.value = magacin.naziv;

            labela = document.createElement("label");
            labela.innerHTML = magacin.naziv;

            divRb.appendChild(opcija);
            divRb.appendChild(labela);
            document.body.appendChild(divRb);

        });
        dugme1.onclick = (ev) => {
            const markaP = document.body.querySelector(".marka").value;
            const tipP = document.body.querySelector(".tip").value;
            const nazivP = document.body.querySelector(".naziv").value;
            const nnazivP = document.body.querySelector(".nnaziv").value;
            console.log(markaP);
            console.log(tipP);
            console.log(nazivP);
            console.log(nnazivP);

            if (markaP == "") {
                alert("Molimo Vas unesite marku prilikom izmene proizvoda");
                return;
            }
            if (tipP == "") {
                alert("Molimo Vas unesite tip prilikom izmene proizvoda");
                return;
            }
            if (nazivP == "") {
                alert("Molimo Vas unesite naziv prilikom izmene proizvoda");
                return;
            }
            if (nnazivP == "") {
                alert("Molimo Vas unesite naziv prilikom izmene proizvoda");
                return;
            }
            data.forEach(magacin => {
                magacin.rafovi.forEach((element) => {

                    var r = new Raf(element.marka, element.max, element.trenutnoPr);
                    if (r.marka == markaP) {
                        element.listaProizvoda.forEach((tip) => {
                            var pi = new Proizvodi(tip.maxProizvoda, tip.brojProizvoda, tip.tip, tip.marka);
                            if (pi.tip == tipP) {
                                tip.listaNaziva.forEach((naziv) => {
                                    console.log(magacin.naziv);
                                    console.log(naziv.naziv);
                                    console.log(nazivP);
                                    if (naziv.naziv == nazivP) {
                                        console.log(naziv.naziv);
                                        console.log(nazivP);
                                        var id=magacin.naziv + markaP + tipP + nazivP;
                                        console.log(id);
                                        fetch("https://localhost:5001/Magacin/IzmeniProizvod" , {
                                            method: "PUT",
                                            headers: {
                                                "Content-Type": "application/json"
                                            },
                                            body: JSON.stringify({
                                                idProizvod: id,
                                                naziv: nnazivP,
                                                tip: tipP,
                                                nazivM: magacin.naziv,
                                                marka: markaP
                                            })
                                        }).then(p => {
                                            if (p.ok) {
                                                console.log("Succesful");
                                                alert("Uspesna izmena osvezite stranicu");
                                                
                                            }//if (p.status == 406)
                                            else  {
                                                alert("Input all informations.");
                                            }
                                        }).catch(p => {
                                            console.log("Error: " + p);
                                        });
                                        
                                }
                                  

                                });
                            }
                        });
                    }
                });
            });
        }
        const dugme = document.createElement("button");
        dugme.innerHTML = "Odaberi";
        dugme.classList.add("bt");
        document.body.appendChild(dugme);
        dugme.onclick = (ev) => {
            const mag = document.body.querySelector(`input[name='${"radioNazivi"}']:checked`);
            if (mag == null) {
                alert("Molimo Vas odaberite magacin");
                return;
            }
            const magac = mag.value;
            data.forEach(magacin => {
                if (magacin.naziv == magac) {
                    const m = new Magacin(magacin.naziv, magacin.n, magacin.m, magacin.trenutno);


                    magacin.rafovi.forEach((element) => {

                        var r = new Raf(element.marka, element.max, element.trenutnoPr);

                        element.listaProizvoda.forEach((tip) => {
                            var pi = new Proizvodi(tip.maxProizvoda, tip.brojProizvoda, tip.tip, tip.marka);
                            tip.listaNaziva.forEach((naziv) => {
                                var p = new Proizvod(tip.marka, naziv.naziv, naziv.tip);
                                pi.dodajProizvod(p);

                            });
                            r.dodajTip(pi);
                        });
                        m.dodajRaf(r);

                    });
                    m.crtajMagacin(document.body);
                }
            });

        }

    });
});
