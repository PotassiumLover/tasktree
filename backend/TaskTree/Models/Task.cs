﻿using System.ComponentModel.DataAnnotations;
using Microsoft.EntityFrameworkCore;

namespace TaskTree.Models
{
    public class Task : BaseEntity
    {
        [Required]
        public string Name { get; set; } = null!;
        public string? Description { get; set; }
        public double? Progress { get; set; }
        public double? Weight { get; set; }
        public DateTime? CompletedAt { get; set; }

        public long? ProjectId { get; set; }
        public Project? Project { get; set; }
        public Task? Parent { get; set; }
        public List<Task>? Children { get; set; }
        public long UserId { get; set; }
    }
}
