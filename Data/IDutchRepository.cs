using System.Collections.Generic;
using DutchTreat.Data.Entities;
using Microsoft.AspNetCore.Mvc;

namespace DutchTreat.Data
{
  public interface IDutchRepository
  {
    IEnumerable<Product> GetAllProducts();
    IEnumerable<Product> GetProductsByCategory(string category); 
        object GetAllOrdersByUser(string username, bool includeItems);

    IEnumerable<Order> GetAllOrders(bool includeItems);
    Order GetOrderById(string username, int id);

    void AddEntity(object entity);
    bool SaveAll();
       
    }
}