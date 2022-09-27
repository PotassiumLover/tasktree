using Microsoft.EntityFrameworkCore;
using System.Diagnostics.CodeAnalysis;

namespace TaskTree.Models;

public class TaskTreeContext : DbContext
{
  public TaskTreeContext(DbContextOptions<TaskTreeContext> options) : base(options)
  {
  }
  
  public DbSet<User> Users { get; set; }

  // example:
  // public DbSet<User> Users { get; set; } = null!;
}