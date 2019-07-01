using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace EmployeeWebApiService.Controllers
{
    public class EmployeeController : ApiController
    {
        public IEnumerable<Employee> Get()
        {
            using(testEntities entities = new testEntities())
            {
                return entities.Employees.ToList();
            }
        }

        public Employee Get(int code) //i used 'code' as alias of id. if we choose alias other than id then u need to change alias in the WebApiConfig.cs as well.
        {
            using (testEntities entities = new testEntities())
            {
                return entities.Employees.FirstOrDefault(e => e.id == code);
            }
        }
    }
}
