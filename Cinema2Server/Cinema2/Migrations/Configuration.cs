namespace Cinema2.Migrations
{
    using Cinema2.Models;
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<Cinema2.Models.CinemaContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(Cinema2.Models.CinemaContext context)
        {
            //  This method will be called after migrating to the latest version.

            //  You can use the DbSet<T>.AddOrUpdate() helper extension method
            //  to avoid creating duplicate seed data.


            context.Directors.AddOrUpdate( x => x.Id,
                new Director() {Id=1,Name="Peter",Age=25 },
                new Director() {Id=2,Name="Pitar",Age=26 },
                new Director() {Id=3,Name="Pethr",Age=24 },
                new Director() {Id=4,Name="Pavel",Age=38 }
                
                
                
                
                );




           context.SaveChanges();


            context.Movies.AddOrUpdate(x => x.Id,
                new Movie(){ Id = 1, Name = "hophop", Genre = "comedy", Year = 2020, DirectorId = 1 },
                new Movie(){ Id = 2, Name = "huphup", Genre = "crime", Year = 2021, DirectorId = 2 },
                new Movie(){ Id = 3, Name = "hiphop", Genre = "action", Year = 2019, DirectorId = 3 },
                new Movie(){ Id = 4, Name = "hipihop", Genre = "fantasy", Year = 2018, DirectorId = 1 }
                     
            
                
                
                
                );

            context.SaveChanges();

        }
    }
}
