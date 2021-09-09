
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace Web.Models
{
    [Table("Proizvod")]
    public class Proizvod
    {

        [Key]
        [Column("idProizvod")] 
        public string idProizvod { get; set; }
        [MaxLength(255)]
        [Column("naziv")]
        public string naziv { get; set; }
        [Column("tip")] 
        public string tip { get; set; }
        [Column("nazivM")] 
        public string nazivM { get; set; }
        
        [Column("marka")] 
        public string marka { get; set; }
        [JsonIgnore]
        public Proizvodi Proizvodi{get;set;}
        [JsonIgnore]
        public Raf Raf{get;set;}
    }
}