using Microsoft.EntityFrameworkCore.Migrations;

namespace Web.Migrations
{
    public partial class V1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Magacin",
                columns: table => new
                {
                    naziv = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    n = table.Column<int>(type: "int", nullable: false),
                    m = table.Column<int>(type: "int", nullable: false),
                    trenunto = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Magacin", x => x.naziv);
                });

            migrationBuilder.CreateTable(
                name: "Raf",
                columns: table => new
                {
                    marka = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    trenunto = table.Column<int>(type: "int", nullable: false),
                    max = table.Column<int>(type: "int", nullable: false),
                    Magacinnaziv = table.Column<string>(type: "nvarchar(450)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Raf", x => x.marka);
                    table.ForeignKey(
                        name: "FK_Raf_Magacin_Magacinnaziv",
                        column: x => x.Magacinnaziv,
                        principalTable: "Magacin",
                        principalColumn: "naziv",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Proizvodi",
                columns: table => new
                {
                    tip = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    maxProizvoda = table.Column<int>(type: "int", nullable: false),
                    brojProizvoda = table.Column<int>(type: "int", nullable: false),
                    marka = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Rafmarka = table.Column<string>(type: "nvarchar(450)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Proizvodi", x => x.tip);
                    table.ForeignKey(
                        name: "FK_Proizvodi_Raf_Rafmarka",
                        column: x => x.Rafmarka,
                        principalTable: "Raf",
                        principalColumn: "marka",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Proizvod",
                columns: table => new
                {
                    naziv = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: false),
                    tip = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Proizvoditip = table.Column<string>(type: "nvarchar(450)", nullable: true),
                    Rafmarka = table.Column<string>(type: "nvarchar(450)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Proizvod", x => x.naziv);
                    table.ForeignKey(
                        name: "FK_Proizvod_Proizvodi_Proizvoditip",
                        column: x => x.Proizvoditip,
                        principalTable: "Proizvodi",
                        principalColumn: "tip",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Proizvod_Raf_Rafmarka",
                        column: x => x.Rafmarka,
                        principalTable: "Raf",
                        principalColumn: "marka",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Proizvod_Proizvoditip",
                table: "Proizvod",
                column: "Proizvoditip");

            migrationBuilder.CreateIndex(
                name: "IX_Proizvod_Rafmarka",
                table: "Proizvod",
                column: "Rafmarka");

            migrationBuilder.CreateIndex(
                name: "IX_Proizvodi_Rafmarka",
                table: "Proizvodi",
                column: "Rafmarka");

            migrationBuilder.CreateIndex(
                name: "IX_Raf_Magacinnaziv",
                table: "Raf",
                column: "Magacinnaziv");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Proizvod");

            migrationBuilder.DropTable(
                name: "Proizvodi");

            migrationBuilder.DropTable(
                name: "Raf");

            migrationBuilder.DropTable(
                name: "Magacin");
        }
    }
}
