import { Proizvodi } from "./Proizvodi.js"
export class Raf {
  constructor(marka, max, trenutnoPr) {
    
    this.max = max;
    this.marka = marka;
    this.trenutnoPr = trenutnoPr;
    this.kontejner = null;
    this.tipovi = [];

  }
  crtajRaf(host, lab, host1) {
    if (!host)
      throw new Error("Greska u hostu");
    if (!host1)
      throw new Error("Greska u hostu");
    this.kontejner = document.createElement("div");
    this.kontejner.classList.add("kontejner");
    host.appendChild(this.kontejner);
    var j = 0;
    {
      this.crtajProizvodeNaRafu(this.kontejner, host1);
    }
  }
  crtajProizvodeNaRafu(host1, host) {
    const kontRafa = document.createElement("div");
    kontRafa.classList.add("kontRaf");
    kontRafa.classList.add("kontejnerProizvodi");
    host1.appendChild(kontRafa);

    let red=null;
    let mesto;
    let mest;
    let pom = 0;

    red = document.createElement("div");
    red.className = "red";


    var i = 0;
    var p1 = 0;
    var j = this.max / 5;
    if (this.max % 5 != 0) {
      j++;
    }
    for (var p = 0; p < j; p++) {
      var pomocna = document.createElement("div");
      kontRafa.appendChild(pomocna);
      pomocna.id = this.marka + p;

    }

    this.tipovi.forEach((tip) => {
      if (i < this.trenutnoPr) {
        if (i % 5 == 0) {
          p1++;
        }
        tip.crtajProizvod(document.getElementById(this.marka + p1), host);
        i++;
      }

    });

  }
  dodajProizvodi(noviTip) {

    if (!this.pronadjiTip(noviTip)) {
      this.tipovi.push(noviTip);

    }
    else {
      this.tipovi.forEach((tip) => {
        alert("OVaj tip uredjaja vec postoji")
      });
    }
  }
  dodajTip(noviTip) {
    this.tipovi.push(noviTip);
  }
  /*pronadjiTip(nadjiTip) {
    let pom = false;
    console.log(this.tipovi);
    this.tipovi.forEach((tip) => {
      if (tip.tip == nadjiTip) {
console.log(tip);
        return  tip;
        
      }
    });
   // return pom;
  }*/
  pronadjiProizvode(t, naz) {
    
    
    //this.tipovi.forEach(tip => {
    //  if (tip.tip == t) {
        let pro;
       /* for(let i=0;i<this.trenutnoPr;i++) {
            let pro1=this.tipovi[i].pronadjiNaz(naz);
            if(pro1)
            {

              pro=pro1;
            }
      }*/
      
      let p=this.pronadjiTip(t);
    console.log(p);
      if(p){
      pro=  p.pronadjiN(naz);
      console.log(pro);
      return pro}
      else return pro=null;
  
  }
  pronadjiTip(t) {
 
    // n=null;
    let n=this.tipovi.find(tipp=>tipp.tip==t);
console.log(n);
       if(n)
       return n;
       else return n=null;

  }
  upisiProizvod(pr) {
    this.tipovi.forEach(tip=>{
      if(tip.tip==pr.tip)
      {
        tip.upisiProizvod(pr);

       
      }
    });
  }
  obrisiProizvod(pr,host){
    var k=this.pronadjiTip(pr.tip);
    k.obrisiProizvod(pr);
    
  }
  obrisiProizvodi(pr){
 
    const index = this.tipovi.indexOf(pr);
  
    if (index > -1) {
        this.tipovi.splice(index, 1);
        this.trenutnoPr--;
      }
}
}
