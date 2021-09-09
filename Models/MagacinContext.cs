using Microsoft.EntityFrameworkCore;

namespace Web.Models
{

    public class MagacinContext: DbContext
    {
        public DbSet<Magacin> Magacin {get; set;}
        public DbSet<Raf> Rafovi {get; set;}
        public DbSet<Proizvodi> proizvodiRafa {get; set;}
        public DbSet<Proizvod> naziviProizvoda {get; set;}

        public MagacinContext(DbContextOptions options ) : base(options)
        {

        }
    }
}