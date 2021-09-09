﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Web.Models;

namespace Web.Migrations
{
    [DbContext(typeof(MagacinContext))]
    [Migration("20210905223940_V3")]
    partial class V3
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("ProductVersion", "5.0.9")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("Web.Models.Magacin", b =>
                {
                    b.Property<string>("naziv")
                        .HasColumnType("nvarchar(450)")
                        .HasColumnName("naziv");

                    b.Property<int>("m")
                        .HasColumnType("int")
                        .HasColumnName("m");

                    b.Property<int>("n")
                        .HasColumnType("int")
                        .HasColumnName("n");

                    b.Property<int>("trenutno")
                        .HasColumnType("int")
                        .HasColumnName("trenunto");

                    b.HasKey("naziv");

                    b.ToTable("Magacin");
                });

            modelBuilder.Entity("Web.Models.Proizvod", b =>
                {
                    b.Property<string>("naziv")
                        .HasMaxLength(255)
                        .HasColumnType("nvarchar(255)")
                        .HasColumnName("naziv");

                    b.Property<string>("Proizvoditip")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("Rafmarka")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("tip")
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("tip");

                    b.HasKey("naziv");

                    b.HasIndex("Proizvoditip");

                    b.HasIndex("Rafmarka");

                    b.ToTable("Proizvod");
                });

            modelBuilder.Entity("Web.Models.Proizvodi", b =>
                {
                    b.Property<string>("tip")
                        .HasColumnType("nvarchar(450)")
                        .HasColumnName("tip");

                    b.Property<string>("Rafmarka")
                        .HasColumnType("nvarchar(450)");

                    b.Property<int>("brojProizvoda")
                        .HasColumnType("int")
                        .HasColumnName("brojProizvoda");

                    b.Property<string>("marka")
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("marka");

                    b.Property<int>("maxProizvoda")
                        .HasColumnType("int")
                        .HasColumnName("maxProizvoda");

                    b.HasKey("tip");

                    b.HasIndex("Rafmarka");

                    b.ToTable("Proizvodi");
                });

            modelBuilder.Entity("Web.Models.Raf", b =>
                {
                    b.Property<string>("marka")
                        .HasColumnType("nvarchar(450)")
                        .HasColumnName("marka");

                    b.Property<string>("Magacinnaziv")
                        .HasColumnType("nvarchar(450)");

                    b.Property<int>("max")
                        .HasColumnType("int")
                        .HasColumnName("max");

                    b.Property<int>("trenutnoPr")
                        .HasColumnType("int")
                        .HasColumnName("trenuntoPr");

                    b.HasKey("marka");

                    b.HasIndex("Magacinnaziv");

                    b.ToTable("Raf");
                });

            modelBuilder.Entity("Web.Models.Proizvod", b =>
                {
                    b.HasOne("Web.Models.Proizvodi", "Proizvodi")
                        .WithMany("listaNaziva")
                        .HasForeignKey("Proizvoditip");

                    b.HasOne("Web.Models.Raf", "Raf")
                        .WithMany()
                        .HasForeignKey("Rafmarka");

                    b.Navigation("Proizvodi");

                    b.Navigation("Raf");
                });

            modelBuilder.Entity("Web.Models.Proizvodi", b =>
                {
                    b.HasOne("Web.Models.Raf", "Raf")
                        .WithMany("listaProizvoda")
                        .HasForeignKey("Rafmarka");

                    b.Navigation("Raf");
                });

            modelBuilder.Entity("Web.Models.Raf", b =>
                {
                    b.HasOne("Web.Models.Magacin", "Magacin")
                        .WithMany("rafovi")
                        .HasForeignKey("Magacinnaziv");

                    b.Navigation("Magacin");
                });

            modelBuilder.Entity("Web.Models.Magacin", b =>
                {
                    b.Navigation("rafovi");
                });

            modelBuilder.Entity("Web.Models.Proizvodi", b =>
                {
                    b.Navigation("listaNaziva");
                });

            modelBuilder.Entity("Web.Models.Raf", b =>
                {
                    b.Navigation("listaProizvoda");
                });
#pragma warning restore 612, 618
        }
    }
}
