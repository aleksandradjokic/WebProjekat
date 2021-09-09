using Microsoft.EntityFrameworkCore.Migrations;

namespace Web.Migrations
{
    public partial class V12 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "nazivM",
                table: "Proizvodi",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "marka",
                table: "Proizvod",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "nazivM",
                table: "Proizvod",
                type: "nvarchar(max)",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "nazivM",
                table: "Proizvodi");

            migrationBuilder.DropColumn(
                name: "marka",
                table: "Proizvod");

            migrationBuilder.DropColumn(
                name: "nazivM",
                table: "Proizvod");
        }
    }
}
