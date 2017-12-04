using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace webapi.Models
{
    public class destination
    {
        public int id {get;set;}
        public string name {get;set;}
        public string description {get;set;}
        public string street {get;set;}
        public string town {get;set;}
    }

}
