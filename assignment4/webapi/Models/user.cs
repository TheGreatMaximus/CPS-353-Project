using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace webapi.Models
{
    public class user
    {
        public int id {get;set;}
        public string firstName {get;set;}
        public string lastName {get;set;}
        public string password {get;set;}
        public string userName {get;set;}
    }

}
