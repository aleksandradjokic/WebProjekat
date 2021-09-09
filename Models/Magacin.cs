using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Web.Models
{
    [Table("Magacin")]
    public class Magacin
    {
        [Key]
        [Column("naziv")] 
        public string naziv { get; set; }
        [Column("n")] 
        public int n { get; set; }
        [Column("m")] 
        public int m { get; set; }
        [Column("trenunto")] 
        public int trenutno { get; set; }
        public virtual List<Raf> rafovi{get;set;}
        
    }
}