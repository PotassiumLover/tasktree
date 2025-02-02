﻿using System.ComponentModel.DataAnnotations;
using Microsoft.EntityFrameworkCore;

namespace TaskTree.Models
{
    public class Project : BaseEntity
    {
        [Required]
        public string Name { get; set; } = null!;
        public string? Description { get; set; }
        public Task? Root { get; set; }
        public double? Progress { get; set; }
        [Required]
        public long UserId { get; set; }
        [Required]
        public User? User { get; set; }
    }
}
