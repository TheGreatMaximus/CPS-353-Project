using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using webapi.Models;
namespace webapi.Models
{
    public class user
    {
        public int id {get;set;}
        public string firstname {get;set;}
        public string lastname {get;set;}
        public string password {get;set;}
        public string username {get;set;}

        public List<destination> _destinations = new List<destination> ();
    }

}
