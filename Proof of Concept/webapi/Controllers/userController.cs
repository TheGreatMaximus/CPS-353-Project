﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WebApi.Repositories;
using webapi.Models;

namespace webapi.Controllers
{
    [Route("api/[controller]")]
    public class userController : Controller
    {

        private WebsiteRepository _websiteRepository;

        public userController()
        {
            _websiteRepository = new WebsiteRepository();
        }

        // GET api/values
        [HttpGet]
        public List<user> Get()
        {
            return _websiteRepository.Get();
        }
        
        [HttpGet("GetAllDestinations")]
        public List<destination> Getalldestinations()
        {
            return _websiteRepository.Getalldestinations();
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public user Get(int id)
        {
            return _websiteRepository.Get(id);
        }
        [HttpGet("GetByUsername")]
        public user GetUserByUsername([FromQuery]string username)
        {
            return _websiteRepository.Get(username);
        }

        [HttpGet("GetDestByUser")]
        public List<destination> GetDestinationByUser([FromQuery]user user)
        {
            return _websiteRepository.Getuserdestinations(user);
        }

        [HttpGet ("GetByCredentials")]
        public user GetUserByCredentials([FromQuery]string username,[FromQuery]string password)
        {
            return _websiteRepository.Get(username,password);
        }

        // POST api/values
        [HttpPost]
        public void Post([FromQuery]user user)
        {
            _websiteRepository.Add(user);
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            _websiteRepository.Remove(id);
        }

        [HttpPost("destinationInfo")]
        
        public void addDestinations([FromQuery]user user,[FromQuery]destination x)
        {
            _websiteRepository.AddDesttoUser(user,x);
        }

    }
}
