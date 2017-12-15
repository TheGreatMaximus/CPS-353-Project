using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using webapi.Models;
namespace webapi.Models
{
    public class user
    {
        public int id {get;set;}
        public string firstName {get;set;}
        public string lastName {get;set;}
        public string password {get;set;}
        public string userName {get;set;}

        public string email {get;set;}

        public List<destination> _destinations = new List<destination> ();
    }

}
