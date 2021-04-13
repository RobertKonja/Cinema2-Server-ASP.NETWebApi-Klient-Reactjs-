using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace Cinema2.Models
{
    public class CinemaContext :DbContext
    {

        public DbSet<Movie> Movies { get; set; }
        public DbSet<Director> Directors { get; set; }


        public CinemaContext() : base("name = CinemaContext") { }








    }
}