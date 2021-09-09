using Microsoft.EntityFrameworkCore.Migrations;

namespace Web.Migrations
{
    public partial class V2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "trenunto",
                table: "Raf",
                newName: "trenuntoPr");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "trenuntoPr",
                table: "Raf",
                newName: "trenunto");
        }
    }
}
