using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace Web.Models
{
    [Table("Raf")]
    public class Raf
    {
        [Key]
        [Column("idRaf")] 
        public string idRaf { get; set; }
        [Column("marka")] 
        public string marka { get; set; }
        [Column("trenuntoPr")] 
        public int trenutnoPr { get; set; }
        [Column("max")] 
        public int max { get; set; }
        [Column("nazivM")] 
        public string nazivM { get; set; }
        [JsonIgnore]
        public Magacin Magacin { get; set; }
        public virtual List<Proizvodi> listaProizvoda{get;set;}
        
    }
}
