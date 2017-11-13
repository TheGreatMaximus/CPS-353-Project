using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using webapi.Models;
namespace WebApi.Repositories
{
    public class WebsiteRepository
    {
        static List<user> _users = new List<user> ();
        
        static int count = 0;

        public WebsiteRepository()
        {
            if(count == 0)
            {
          user user1 = new user() {id = 123, username = "alice",    password = "alice",    firstname =  "Alice",  lastname = "Wonder"  };
          user user2 = new user() {id = 234, username = "bob",      password = "bob",      firstname = "Bob",    lastname = "Marley"  };
          user user3 = new user() {id = 345, username = "charly",   password = "charly",   firstname = "Charly", lastname = "Garcia"  };
          user user4 = new user() {id = 456, username = "jannunzi", password = "jannunzi", firstname = "Jose",   lastname = "Annunzi" };
          _users.Add(user1);
          _users.Add(user2);
          _users.Add(user3);
          _users.Add(user4);
          count++;
            }
        }

        public List<user> Get()
        {
            return _users;
        }        public user Get(int id)
        {
            return _users.FirstOrDefault(u => u.id == id);
        }
        public user Get(string username)
        {
            return _users.FirstOrDefault(u => u.username == username);
        }
        public user Get(string username, string password)
        {
            return _users.FirstOrDefault(u => u.username == username && u.password == password);
        }
        public void Add(user user)
        {
            _users.Add(user);
        }
        public void update (user user)
        {
            var usertemp = _users.FirstOrDefault(u => u.id == user.id);
            usertemp = user;
        }
        public void Remove (int id)
        {
            var usertemp = _users.FirstOrDefault(u => u.id == id);
            if (usertemp != null)
            {
                _users.Remove(usertemp);
            }
        }

    }
}