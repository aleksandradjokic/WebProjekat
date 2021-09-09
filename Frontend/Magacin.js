import { Raf } from "./Raf.js"
import { Proizvodi } from "./Proizvodi.js"
import { Proizvod } from "./Proizvod.js"


export class Magacin {
  constructor(naziv, n, m, trenutno) {

    this.naziv = naziv;
    this.Megakontejner = null;
    this.max = n * m;
    this.trenutno = trenutno;
    this.n = n;
    this.m = m;
    this.rafovi = [];
  }

  crtajMagacin(host) {
    if (!host)
      throw new Error("Greska u hostu");
    this.Megakontejner = null;
    this.Megakontejner = document.createElement("div");
    this.Megakontejner.classList.add("Megakontejner");
    host.appendChild(this.Megakontejner);

    var pom = document.createElement("div");
    pom.classList.add("a");
    this.crtajFormuSkladisti(this.Megakontejner);

    this.crtajRafove(this.Megakontejner);

  }
  crtajRafove(host) {

    const host1 = document.createElement("div");


    host1.classList.add("a");
    host.appendChild(host1);
    host1.className = "kontejner";
    const kontRafova = document.createElement("div");
    kontRafova.classList.add("a");
    //kontRafova.className = "kontejner";
    host1.appendChild(kontRafova);
    const pom = document.createElement("div");
    pom.classList.add("a");
    pom.className = "pom";
    kontRafova.appendChild(pom);

    let red = null;
    let mesto;
    let mest;
    red = document.createElement("div");

    red.classList.add("red");

    kontRafova.appendChild(red);
    var i = 0;
    var p1 = 0;
    var j = Math.floor(this.trenutno / 6);
    if (this.trenutno % 6 != 0) {
      j++;
    }
    for (var p = 0; p < j; p++) {
      var pomocna = document.createElement("div");
      pomocna.classList.add("kontejnerRed");
      red.appendChild(pomocna);
      pomocna.id = this.naziv + p;
    }
    this.rafovi.forEach((r) => {
      console.log(p1)
      if (i == 6) {
        p1++;
        i = 0;

      }


      var pLabela = document.createElement("label");
      pLabela.innerHTML = r.marka;
      document.getElementById(this.naziv + p1).appendChild(pLabela);

      r.crtajRaf(document.getElementById(this.naziv + p1), r.marka, pom);


      i++;
    });
  }
  crtajMestoZaNazive(host) {
    const pom = document.createElement("div");

    host.appendChild(pom);
  }
  dodajRaf(pov) {
    this.rafovi.push(pov);

  }
  crtajFormuSkladisti(host) {
    const kont1 = document.createElement("div");
    kont1.className = "kontSkladisti";
    host.appendChild(kont1);

    const kont2 = document.createElement("div");
    kont2.className = "kontSkladisti";
    kont1.appendChild(kont2);

    const kont3 = document.createElement("div");
    kont3.className = "kontSkladisti";
    kont1.appendChild(kont3);

    const kont4 = document.createElement("div");
    kont3.className = "kontSkladisti";
    kont1.appendChild(kont4);

    var pLabela = document.createElement("h3");
    pLabela.classList.add("lbl");
    pLabela.innerHTML = "Unesite podatke proizvoda koji dodajete";
    kont2.appendChild(pLabela);

    /* this.crtajDetalje(kont2, "Dodaj proizvod");
 
     var pLabela = document.createElement("h3");
     pLabela.innerHTML = "Unesite podatke proizvoda koji brisete ";
     kont2.appendChild(pLabela);
 
     this.crtajDetalje(kont2, "Obrisi proizvod");*/
    var pLabela = document.createElement("label");
    pLabela.innerHTML = "Naziv proizvoda";
    kont2.appendChild(pLabela);

    pLabela = document.createElement("input");
    pLabela.className = "nazivProizvoda";
    kont2.appendChild(pLabela);

    pLabela = document.createElement("label");
    pLabela.innerHTML = "Tip uredjaja:";
    kont2.appendChild(pLabela);

    pLabela = document.createElement("input");
    pLabela.className = "tipUredjaja";
    kont2.appendChild(pLabela);

    pLabela = document.createElement("label");
    pLabela.innerHTML = "Marka proizvoda:";
    kont2.appendChild(pLabela);


    let marke = [];
    this.rafovi.forEach((raf) => {
      marke.push(raf.marka);
    });
    //["samsung", "bosh", "LG", "philips"];

    let opcija = null;
    let labela = null;
    let divRb = null;
    marke.forEach((marka) => {
      divRb = document.createElement("div");
      opcija = document.createElement("input");
      opcija.type = "radio";
      opcija.name = "radioMarke";
      opcija.value = marka;

      labela = document.createElement("label");
      labela.innerHTML = marka;

      divRb.appendChild(opcija);
      divRb.appendChild(labela);
      kont2.appendChild(divRb);
    })
    this.dodajDugme(kont2, "Dodaj proizvod");
    this.dodajDugme(kont2, "Obrisi proizvod");


    pLabela = document.createElement("h3");
    pLabela.classList.add("lbl");
    pLabela.innerHTML = "Unesite tip koji dodajete";
    kont3.appendChild(pLabela);

    pLabela = document.createElement("label");
    pLabela.innerHTML = "Marka uredjaja";
    kont3.appendChild(pLabela);

    pLabela = document.createElement("input");
    pLabela.className = "markaUredjajaTip";
    kont3.appendChild(pLabela);

    pLabela = document.createElement("label");
    pLabela.innerHTML = "Tip uredjaja:";
    kont3.appendChild(pLabela);

    pLabela = document.createElement("input");
    pLabela.className = "tipUredjajaTip";
    kont3.appendChild(pLabela);

    pLabela = document.createElement("label");
    pLabela.innerHTML = "Maksimalan broj proizvoda:";
    kont3.appendChild(pLabela);

    pLabela = document.createElement("input");
    pLabela.setAttribute("type", "number");
    pLabela.className = "maxPrTip";
    kont3.appendChild(pLabela);

    this.dodajDugmeTip(kont3, "Dodaj tip");
    this.dodajDugmeTip(kont3, "Obrisi tip");

    pLabela = document.createElement("h3");
    pLabela.classList.add("lbl");
    pLabela.innerHTML = "Unesite marku koju dodajete";
    kont3.appendChild(pLabela);

    pLabela = document.createElement("label");
    pLabela.innerHTML = "Marka uredjaja";
    kont3.appendChild(pLabela);

    pLabela = document.createElement("input");
    pLabela.className = "markaUredjajaM";
    kont3.appendChild(pLabela);

    pLabela = document.createElement("label");
    pLabela.innerHTML = "Maksimalan broj proizvoda:";
    kont3.appendChild(pLabela);

    pLabela = document.createElement("input");
    pLabela.setAttribute("type", "number");
    pLabela.className = "maxPrM";
    kont3.appendChild(pLabela);

    this.dodajDugmeMarka(kont3, "Dodaj marku");
    this.dodajDugmeMarka(kont3, "Obrisi marku");
  }

  dodajOpcije(number, name, host, divRb, sel) {
    let labela = document.createElement("label");
    labela.classList.add("lbl");
    labela.innerHTML = name
    divRb.appendChild(labela);
    divRb.appendChild(sel);
    for (let i = 0; i < number; i++) {
      let opcija = document.createElement("option");
      opcija.innerHTML = i;
      opcija.value = i;
      sel.appendChild(opcija);
    }
    host.appendChild(divRb);
  }
  crtajDetalje(host, text) {
    var pLabela = document.createElement("label");
    pLabela.innerHTML = "Naziv proizvoda";
    host.appendChild(pLabela);

    pLabela = document.createElement("input");
    pLabela.className = "nazivProizvoda";
    host.appendChild(pLabela);

    pLabela = document.createElement("label");
    pLabela.innerHTML = "Tip uredjaja:";
    host.appendChild(pLabela);

    pLabela = document.createElement("input");
    pLabela.className = "tipUredjaja";
    host.appendChild(pLabela);

    pLabela = document.createElement("label");
    pLabela.innerHTML = "Marka proizvoda:";
    host.appendChild(pLabela);


    let marke = [];
    this.rafovi.forEach((raf) => {
      marke.push(raf.marka);
    });
    //["samsung", "bosh", "LG", "philips"];

    let opcija = null;
    let labela = null;
    let divRb = null;
    marke.forEach((marka) => {
      divRb = document.createElement("div");
      opcija = document.createElement("input");
      opcija.type = "radio";
      opcija.name = "radioMarke";
      opcija.value = marka;

      labela = document.createElement("label");
      labela.innerHTML = marka;

      divRb.appendChild(opcija);
      divRb.appendChild(labela);
      host.appendChild(divRb);
    })


    //this.dodajDugme(host, text);


  }
  dodajDugmeMarka(host, text) {
    const dugme = document.createElement("button");
    dugme.classList.add("bt");
    dugme.innerHTML = text;
    host.appendChild(dugme);

    dugme.onclick = (ev) => {
      const marka = this.Megakontejner.querySelector(".markaUredjajaM").value;
      const br = parseInt(this.Megakontejner.querySelector(".maxPrM").value);

      console.log(text);


      if (text == "Dodaj marku") {
        if (marka == "") {
          alert("Molimo Vas unesite marku prilikom dodavanja marke");
          return;
        }
        if (this.Megakontejner.querySelector(".maxPrM").value == "") {
          alert("Molimo Vas unesite maksimalan broj tipova prilikom dodavanja marke");
          return;
        }
        var mar;
        this.rafovi.forEach(raf => {
          if (raf.marka == marka)
            mar = raf.marka;
        });
        if (mar)
          alert("Ova marka se vec nalazi u magacinu ");
        else {
          if (this.trenutno == this.max) {
            alert("Kapacitet magacina je ispunjen");
          }
          else {
            var r = new Raf(marka, br, 0);
            fetch("https://localhost:5001/Magacin/UpisRafova/" + this.naziv, {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                idRaf: this.naziv + marka,
                marka: marka,
                trenutnoPr: 0,
                max: br,
                nazivM: this.naziv
              })
            }).then(p => {
              if (p.ok) {
                console.log("Succesful");
                alert("Uspesno dodavanje osvezite stranicu");
                this.rafovi.push(r);
                this.Megakontejner.innerHTML = "";
                this.crtajMagacin(document.body);
              }
              else if (p.status == 406) {
                alert("Kapacitet magacina je ispunjen.");
              }
            }).catch(p => {
              console.log("Error: " + p);
            });
          }
        }
      }
      else {
        if (text == "Obrisi marku") {
          if (marka == "") {
            alert("Molimo Vas unesite marku prilikom brisanja marke");
            return;
          }
          var mar;
          this.rafovi.forEach(raf => {
            if (raf.marka == marka)
              mar = raf.marka;
          });
          if (!mar)
            alert("Ova marka se ne nalazi u magacinu ");
          else {

            let mar2;
            this.rafovi.forEach(raf => {
              if (raf.marka == marka)

                mar2 = raf.trenutnoPr;


            });
            if (mar2 != 0) {

              alert("Nije moguce obrisati marku ukoliko se u njoj nalaze tipovi");
            }
            else {
              var p = this.naziv + marka;
              var pom;
              var s;
              this.rafovi.forEach((raf) => {
                if (raf.marka == marka) {
                  s = raf;

                }

              });
              console.log(s);
              fetch("https://localhost:5001/Magacin/IzbrisiMarku/" + p, {
                method: "DELETE",
                headers: {
                  "Content-Type": "application/json"
                }
              }).then(p => {
                if (p.ok) {
                  console.log("Succesful");
                  alert("Uspesno brisanje osvezite stranicu");
                  this.rafovi.pop(s);
                  this.Megakontejner.innerHTML = "";
                  this.crtajMagacin(document.body);
                }
                else if (p.status == 406) {
                  alert("Input all informations.");
                }
              }).catch(p => {
                console.log("Error: " + p);
              });
            }
          }
        }

      }
    }
  }
  dodajDugmeTip(host, text) {
    const dugme = document.createElement("button");
    dugme.classList.add("bt");
    dugme.innerHTML = text;
    host.appendChild(dugme);

    dugme.onclick = (ev) => {
      const marka = this.Megakontejner.querySelector(".markaUredjajaTip").value;
      const tip = this.Megakontejner.querySelector(".tipUredjajaTip").value;
      const max = parseInt(this.Megakontejner.querySelector(".maxPrTip").value);

      let pom;
      if (text == "Dodaj tip") {
        if (marka == "") {
          alert("Molimo Vas unesite marku prilikom dodavanja tipa");
          return;
        }
        if (tip == "") {
          alert("Molimo Vas unesite tip prilikom dodavanja tipa");
          return;
        }
        if (this.Megakontejner.querySelector(".maxPrTip").value == "") {
          alert("Molimo Vas unesite maksimalan broj uredjaja prilikom dodavanja tipa");
          return;
        }
        this.rafovi.forEach((raf) => {
          if (raf.marka == marka) {
            console.log(raf.pronadjiTip(tip));
            pom = raf.pronadjiTip(tip);
            console.log(pom);
          }
        });
        if (pom) {
          alert("Ovaj tip se vec nalazi u magacinu. ");
        }
        else {
          var mar;
          this.rafovi.forEach(raf => {
            if (raf.marka == marka)
              mar = raf.marka;
          });
          if (!mar)
            alert("Ova marka se ne nalazi u magacinu ");
          else {
            var l = new Proizvodi(max, 0, tip, marka);
            var p = this.naziv + marka + tip;
var sa;
            this.rafovi.forEach((raf) => {
              if (raf.marka == marka) {
                sa = raf;
              }
            });
            fetch("https://localhost:5001/Magacin/UpisProizvoda/" + marka, {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                idProizvodi: p,
                maxProizvoda: max,
                brojProizvoda: 0,
                tip: tip,
                marka: marka,
                nazivM: this.naziv
              })
            }).then(p => {
              if (p.ok) {
                console.log("Succesful");
                alert("Uspesno dodavanje osvezite stranicu");
                sa.dodajTip(l);
                sa.trenutnoPr++;
                console.log(sa);
                this.Megakontejner.innerHTML = "";
                this.crtajMagacin(document.body);
              }
              else if (p.status == 406) {
               alert("Kapacitet magacina je ispunjen.");

              }
            }).catch(p => {
              console.log("Error: " + p);
            });
          }
        }

      }
      else {
        if (text == "Obrisi tip") {

          if (marka == "") {
            alert("Molimo Vas unesite marku prilikom brisanja tipa");
            return;
          }
          if (tip == "") {
            alert("Molimo Vas unesite tip prilikom brisanja tipa");
            return;
          }
          var mar;
          this.rafovi.forEach(raf => {
            if (raf.marka == marka)
              mar = raf.marka;
          });
          if (!mar)
            alert("Ova marka se ne nalazi u magacinu ");
          else {
            var pom1;
            this.rafovi.forEach((raf) => {
              if (raf.marka == marka) {
                pom1 = raf.pronadjiTip(tip);
              }
            });
            if (!pom1) {
              alert("Ovaj tip se ne nalazi u magacinu. ");
            }
            else {
              if (pom1.brojProizvoda != 0) {
                alert("Nije moguce obrisati tip ukoliko se u njemu nalaze proizvodi");
              }

              else {
                var t = this.naziv + marka + tip;
                var s;
                this.rafovi.forEach((raf) => {
                  if (raf.marka == marka) {
                    s = raf.pronadjiTip(tip);
                  }
                });

                console.log(s);
                fetch("https://localhost:5001/Magacin/IzbrisiTip/" + t, {
                  method: "DELETE",
                  headers: {
                    "Content-Type": "application/json"
                  }
                }).then(p => {
                  if (p.ok) {
                    console.log("Succesful");
                    alert("Uspesno brisanje osvezite stranicu");
                    this.obrisiProizvodi(s);
                    this.Megakontejner.innerHTML = "";
                    this.crtajMagacin(document.body);
                  }
                  else if (p.status == 406) {
                    alert("Input all informations.");
                  }
                }).catch(p => {
                  console.log("Error: " + p);
                });
              }
            }
          }
        }
      }
    }

  }
  dodajDugme(host, text) {
    const dugme = document.createElement("button");
    dugme.innerHTML = text;
    dugme.classList.add("bt");
    host.appendChild(dugme);
    dugme.onclick = (ev) => {
      const naziv = this.Megakontejner.querySelector(".nazivProizvoda").value;
      const tip = this.Megakontejner.querySelector(".tipUredjaja").value;
      const markaa = this.Megakontejner.querySelector(`input[name='${"radioMarke"}']:checked`);
      if (markaa == null) {
        alert("Molimo Vas odaberite marku proizvoda");
        return;
      }
      if (naziv == "") {
        alert("Molimo Vas unesite naziv proizvoda");
        return;
      }
      if (tip == "") {
        alert("Molimo Vas unesite tip proizvoda");
        return;
      }
      const marka = markaa.value;
      let pom;
      if (text == "Dodaj proizvod") {
        //if (this.pronadjiRaf(marka, tip, naziv)) {
        this.rafovi.forEach((raf) => {
          if (raf.marka == marka) {
            pom = raf.pronadjiProizvode(tip, naziv);
          }
        });
        if (pom) {
          alert("Ovaj proizvod se vec nalazi u magacinu. ");
        }
        else {
          let pom1;
          this.rafovi.forEach((raf) => {
            pom1 = raf.pronadjiTip(tip);

          });
          if (!pom1) {
            alert("Ovaj tip ne postoji u magacinu prvo dodajte tip. ");
          }
          else {
            var p = this.naziv + marka + tip + naziv;
            var s=new Proizvod(marka,naziv,tip);
              var r;
              this.rafovi.forEach((raf) => {
                if (raf.marka == marka) {
                  r=raf.pronadjiTip(tip);
                  
                }
              });
              console.log(s);
            fetch("https://localhost:5001/Magacin/UpisJednogProizvoda/" + tip, {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                idProizvod: p,
                naziv: naziv,
                tip: tip,
                nazivM: this.naziv,
                marka: marka
              })
            }).then(p => {
              if (p.ok) {
                console.log("Succesful");
                alert("Uspesno dodavanje osvezite stranicu");
                //  this.Megakontejner.innerHTML=null;
                r.listaNaziva.push(s);
                  r.brojProizvoda++;
                this.Megakontejner.innerHTML = "";
                this.crtajMagacin(document.body);
              }
              else if (p.status == 406) {
                alert("Kapacitet magacina je ispunjen.");

              }
            }).catch(p => {
              console.log("Error: " + p);
            });
          }
        }

      }
      else {
        if (text == "Obrisi proizvod") {
          let pom1;
          this.rafovi.forEach((raf) => {
            pom1 = raf.pronadjiTip(tip);

          });
          if (!pom1) {
            alert("Ovaj tip ne postoji u magacinu. ");
          }

          else {
            this.rafovi.forEach((raf) => {
              if (raf.marka == marka) {
                pom = raf.pronadjiProizvode(tip, naziv);
              }
            });
            if (!pom) {
              alert("Ovaj proizvod se ne nalazi u magacinu. ");
            }


            else {
              var t = this.naziv + marka + tip + naziv;
              var s;
              var r;
              this.rafovi.forEach((raf) => {
                if (raf.marka == marka) {
                  //r=raf.pronadjiTip(raf);
                 s = raf.pronadjiProizvode(tip, naziv);
                }
              });
              console.log(s);

              fetch("https://localhost:5001/Magacin/IzbrisiProizvod/" + t, {
                method: "DELETE",
                headers: {
                  "Content-Type": "application/json"
                }
              }).then(p => {
                if (p.ok) {
                  console.log("Succesful");
                  // alert("Uspesno brisanje osvezite stranicu");
                  this.obrisiProizvod(s);
                 // r.listaNaziva.push(s);
                 // r.brojProizvoda++;

                  this.Megakontejner.innerHTML = "";
                  this.crtajMagacin(document.body);


                }
                else if (p.status == 406) {
                  alert("Input all informations.");
                }
              }).catch(p => {
                console.log("Error: " + p);
              });

            }

          }

        }

      }
    }

    // 
    // 
  }
  obrisiProizvod(pr) {
    this.rafovi.forEach(element => {
      if (element.marka == pr.marka)
        element.obrisiProizvod(pr);
    });
  }
  obrisiProizvodi(pr) {
    this.rafovi.forEach(element => {
      if (element.marka == pr.marka)
        element.obrisiProizvodi(pr);
    });
  }
}



