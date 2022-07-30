using Kendo.Mvc.Extensions;
using Kendo.Mvc.UI;
using Microsoft.AspNetCore.Mvc;
using System.ComponentModel.DataAnnotations;

namespace Core6_Kendo_newTeamplate.Controllers
{
    public class AccountCreateOrEditModel
    {
        public int Id { get; set; }
        [Display(Name = "Name")]
        public string Name { get; set; }    
        public byte Code { get; set; }
    }
    public class AccountsController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
        public async Task<IActionResult> Read([DataSourceRequest] DataSourceRequest request)
        {
            List<AccountCreateOrEditModel> vm = new List<AccountCreateOrEditModel>()
            {
                new AccountCreateOrEditModel{
                    Id=1,
                    Name="ALI",
                    Code=75,
                },
            };
            DataSourceResult result = vm.AsQueryable().ToDataSourceResult(request);
            return Json(result);

        }

    }
}
