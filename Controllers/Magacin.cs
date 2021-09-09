using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Web.Models;
using Microsoft.EntityFrameworkCore;

namespace Web.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MagacinController : ControllerBase
    {
        public MagacinContext Context {get; set;}
        public MagacinController(MagacinContext context)
        {
           Context=context;
        }
        [Route("PreuzmiJedanProizvod")]
        [HttpGet]
        public async Task<List<Proizvod>>PreuzmiJedanProizvod()
        {
            return await Context.naziviProizvoda.ToListAsync() ;
        }
         [Route("PreuzmiRafove")]
        [HttpGet]
        public async Task<List<Raf>> PreuzmiRafove()
        {
           return await Context.Rafovi.Include(p=>p.listaProizvoda).ThenInclude(par=> par.listaNaziva).ToListAsync();
        }
        [Route("UpisRafova/{naziv}")]
        [HttpPost]
        public async Task<IActionResult> UpisRafova(string naziv, [FromBody] Raf r)
        {//
           var magacin=await Context.Magacin.FindAsync(naziv);
          if (magacin.trenutno == magacin.m*magacin.n)
                {
                    return StatusCode(406);
                }
           magacin.trenutno++;
           r.idRaf=magacin.naziv+r.marka;
            r.nazivM=magacin.naziv;
            r.Magacin=magacin;
           Context.Rafovi.Add(r);
           await Context.SaveChangesAsync();
           return Ok();
        }
        [Route("PreuzmiMagacin")]
        [HttpGet]
        public async Task<List<Magacin>> PreuzmiMagacin()
        {
           return await Context.Magacin.Include(p=>p.rafovi).ThenInclude(par=> par.listaProizvoda).ThenInclude(pr=> pr.listaNaziva).ToListAsync();
        }
         [Route("IzbrisiProizvod/{idProizvod}")]
        [HttpDelete]
        public async Task IzbrisiProizvod(string idProizvod)
        {
          var pro= await Context.FindAsync<Proizvod>(idProizvod);
          var p=pro.nazivM+pro.marka+pro.tip;
          var proizvodi=await Context.proizvodiRafa.FindAsync(p);

            proizvodi.brojProizvoda--;
          Context.Remove(pro);
          await Context.SaveChangesAsync();
        }
         [Route("IzbrisiMarku/{idRaf}")]
        [HttpDelete]
        public async Task IzbrisiMarku(string idRaf)
        {
            

          var mar= await Context.FindAsync<Raf>(idRaf);
          var magacin=await Context.Magacin.FindAsync(mar.nazivM);

            magacin.trenutno--;
          Context.Remove(mar);
          await Context.SaveChangesAsync();
        }
         [Route("IzbrisiTip/{idProizvodi}")]
        [HttpDelete]
        public async Task IzbrisiTip(string idProizvodi)
        {   
          var t= await Context.FindAsync<Proizvodi>(idProizvodi);
          var m=t.nazivM+t.marka;
          var ti=await Context.Rafovi.FindAsync(m);

            ti.trenutnoPr--;
          Context.Remove(t);
          await Context.SaveChangesAsync();
        }
        [Route("UpisMagacina")]
        [HttpPost]
        public async Task UpisMagacina([FromBody] Magacin m)
        {
           Context.Magacin.Add(m);
           await Context.SaveChangesAsync();
        }
         [Route("UpisProizvoda/{marka}")]
        [HttpPost]
        public async Task<IActionResult> UpisProizvoda(string marka, [FromBody] Proizvodi pr)
        {
//
         // pr.idProizvodi=pom.idRaf+pr.tip;

          var m=pr.nazivM+pr.marka;
            var raf=await Context.Rafovi.FindAsync(m);
            pr.Raf=raf;
            pr.marka=raf.marka;
            if (raf.trenutnoPr == raf.max)
                {
                    return StatusCode(406);
                }
            raf.trenutnoPr++;
           Context.proizvodiRafa.Add(pr);
           await Context.SaveChangesAsync();
           return Ok();

           

        }
        [Route("UpisJednogProizvoda/{tip}")]
        [HttpPost]
        public async Task<IActionResult> UpisJednogProizvoda(string tip,[FromBody]Proizvod p)
        {
            //
           // var pom=p.Proizvodi;
            var k=p.nazivM+p.marka+p.tip;
            var proizvodi=await Context.proizvodiRafa.FindAsync(k);
          //  p.idProizvod=pom.idProizvodi+p.naziv;
           // var raf=await Context.Rafovi.FindAsync(marka);
            p.tip=proizvodi.tip;
            
            p.Raf=proizvodi.Raf;
            p.Proizvodi=proizvodi;
            if (proizvodi.brojProizvoda == proizvodi.maxProizvoda)
                {
                    return StatusCode(406);
               }
            proizvodi.brojProizvoda++;
           Context.naziviProizvoda.Add(p);
           await Context.SaveChangesAsync();
           return Ok();

        }
        [Route("PreuzmiProizvode")]
        [HttpGet]
        public async Task<List<Proizvodi>> PreuzmiProizvode()
        {
            return await Context.proizvodiRafa.Include(p=>p.listaNaziva).ToListAsync();
        }
        [Route("IzmeniProizvod")]
        [HttpPut]
        public async Task IzmeniProizvod([FromBody] Proizvod proizvod)
        {
          
         // 
         
            Context.Update<Proizvod>(proizvod);
            //proizvod.idProizvod=proizvod.nazivM+proizvod.marka+proizvod.tip+proizvod.naziv;

            await Context.SaveChangesAsync();
        }
        /*[Route("IzmeniProizvodi")]
        public async Task IzmeniProizvod([FromBody] Proizvodi proizvodi)
        {
          
         // 
         
            Context.Update<Proizvodi>(proizvodi);
            //proizvod.idProizvod=proizvod.nazivM+proizvod.marka+proizvod.tip+proizvod.naziv;

            await Context.SaveChangesAsync();
        }*/
        
    
    }
}
