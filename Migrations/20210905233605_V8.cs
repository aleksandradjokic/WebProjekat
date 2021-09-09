using Microsoft.EntityFrameworkCore.Migrations;

namespace Web.Migrations
{
    public partial class V8 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Proizvod_Raf_Rafmarka",
                table: "Proizvod");

            migrationBuilder.DropForeignKey(
                name: "FK_Proizvodi_Raf_Rafmarka",
                table: "Proizvodi");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Raf",
                table: "Raf");

            migrationBuilder.RenameColumn(
                name: "Rafmarka",
                table: "Proizvodi",
                newName: "RafidRaf");

            migrationBuilder.RenameIndex(
                name: "IX_Proizvodi_Rafmarka",
                table: "Proizvodi",
                newName: "IX_Proizvodi_RafidRaf");

            migrationBuilder.RenameColumn(
                name: "Rafmarka",
                table: "Proizvod",
                newName: "RafidRaf");

            migrationBuilder.RenameIndex(
                name: "IX_Proizvod_Rafmarka",
                table: "Proizvod",
                newName: "IX_Proizvod_RafidRaf");

            migrationBuilder.AlterColumn<string>(
                name: "marka",
                table: "Raf",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(450)");

            migrationBuilder.AddColumn<string>(
                name: "idRaf",
                table: "Raf",
                type: "nvarchar(450)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Raf",
                table: "Raf",
                column: "idRaf");

            migrationBuilder.AddForeignKey(
                name: "FK_Proizvod_Raf_RafidRaf",
                table: "Proizvod",
                column: "RafidRaf",
                principalTable: "Raf",
                principalColumn: "idRaf",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Proizvodi_Raf_RafidRaf",
                table: "Proizvodi",
                column: "RafidRaf",
                principalTable: "Raf",
                principalColumn: "idRaf",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Proizvod_Raf_RafidRaf",
                table: "Proizvod");

            migrationBuilder.DropForeignKey(
                name: "FK_Proizvodi_Raf_RafidRaf",
                table: "Proizvodi");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Raf",
                table: "Raf");

            migrationBuilder.DropColumn(
                name: "idRaf",
                table: "Raf");

            migrationBuilder.RenameColumn(
                name: "RafidRaf",
                table: "Proizvodi",
                newName: "Rafmarka");

            migrationBuilder.RenameIndex(
                name: "IX_Proizvodi_RafidRaf",
                table: "Proizvodi",
                newName: "IX_Proizvodi_Rafmarka");

            migrationBuilder.RenameColumn(
                name: "RafidRaf",
                table: "Proizvod",
                newName: "Rafmarka");

            migrationBuilder.RenameIndex(
                name: "IX_Proizvod_RafidRaf",
                table: "Proizvod",
                newName: "IX_Proizvod_Rafmarka");

            migrationBuilder.AlterColumn<string>(
                name: "marka",
                table: "Raf",
                type: "nvarchar(450)",
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);

            migrationBuilder.AddPrimaryKey(
                name: "PK_Raf",
                table: "Raf",
                column: "marka");

            migrationBuilder.AddForeignKey(
                name: "FK_Proizvod_Raf_Rafmarka",
                table: "Proizvod",
                column: "Rafmarka",
                principalTable: "Raf",
                principalColumn: "marka",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Proizvodi_Raf_Rafmarka",
                table: "Proizvodi",
                column: "Rafmarka",
                principalTable: "Raf",
                principalColumn: "marka",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
