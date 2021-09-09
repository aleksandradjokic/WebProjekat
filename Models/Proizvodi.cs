using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace Web.Models
{
    [Table("Proizvodi")]
    public class Proizvodi
    {
        [Key]
        [Column("idProizvodi")] 
        public string idProizvodi { get; set; }
        [Column("maxProizvoda")] 
        public int maxProizvoda { get; set; }
        [Column("brojProizvoda")] 
        public int brojProizvoda { get; set; }
        [Column("tip")] 
        public string tip { get; set; }
        [Column("marka")] 
        public string marka { get; set; }
        [Column("nazivM")] 
        public string nazivM { get; set; }
        [JsonIgnore]
        public Raf Raf { get; set; }
        public virtual List<Proizvod> listaNaziva{get;set;}
    }
}
