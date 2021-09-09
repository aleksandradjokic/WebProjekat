using Microsoft.EntityFrameworkCore.Migrations;

namespace Web.Migrations
{
    public partial class V9 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Proizvod_Proizvodi_Proizvoditip",
                table: "Proizvod");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Proizvodi",
                table: "Proizvodi");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Proizvod",
                table: "Proizvod");

            migrationBuilder.RenameColumn(
                name: "Proizvoditip",
                table: "Proizvod",
                newName: "ProizvodiidProizvodi");

            migrationBuilder.RenameIndex(
                name: "IX_Proizvod_Proizvoditip",
                table: "Proizvod",
                newName: "IX_Proizvod_ProizvodiidProizvodi");

            migrationBuilder.AlterColumn<string>(
                name: "tip",
                table: "Proizvodi",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(450)");

            migrationBuilder.AddColumn<string>(
                name: "idProizvodi",
                table: "Proizvodi",
                type: "nvarchar(450)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AlterColumn<string>(
                name: "naziv",
                table: "Proizvod",
                type: "nvarchar(255)",
                maxLength: 255,
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(255)",
                oldMaxLength: 255);

            migrationBuilder.AddColumn<string>(
                name: "idProizvod",
                table: "Proizvod",
                type: "nvarchar(450)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Proizvodi",
                table: "Proizvodi",
                column: "idProizvodi");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Proizvod",
                table: "Proizvod",
                column: "idProizvod");

            migrationBuilder.AddForeignKey(
                name: "FK_Proizvod_Proizvodi_ProizvodiidProizvodi",
                table: "Proizvod",
                column: "ProizvodiidProizvodi",
                principalTable: "Proizvodi",
                principalColumn: "idProizvodi",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Proizvod_Proizvodi_ProizvodiidProizvodi",
                table: "Proizvod");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Proizvodi",
                table: "Proizvodi");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Proizvod",
                table: "Proizvod");

            migrationBuilder.DropColumn(
                name: "idProizvodi",
                table: "Proizvodi");

            migrationBuilder.DropColumn(
                name: "idProizvod",
                table: "Proizvod");

            migrationBuilder.RenameColumn(
                name: "ProizvodiidProizvodi",
                table: "Proizvod",
                newName: "Proizvoditip");

            migrationBuilder.RenameIndex(
                name: "IX_Proizvod_ProizvodiidProizvodi",
                table: "Proizvod",
                newName: "IX_Proizvod_Proizvoditip");

            migrationBuilder.AlterColumn<string>(
                name: "tip",
                table: "Proizvodi",
                type: "nvarchar(450)",
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "naziv",
                table: "Proizvod",
                type: "nvarchar(255)",
                maxLength: 255,
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "nvarchar(255)",
                oldMaxLength: 255,
                oldNullable: true);

            migrationBuilder.AddPrimaryKey(
                name: "PK_Proizvodi",
                table: "Proizvodi",
                column: "tip");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Proizvod",
                table: "Proizvod",
                column: "naziv");

            migrationBuilder.AddForeignKey(
                name: "FK_Proizvod_Proizvodi_Proizvoditip",
                table: "Proizvod",
                column: "Proizvoditip",
                principalTable: "Proizvodi",
                principalColumn: "tip",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
