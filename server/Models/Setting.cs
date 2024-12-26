using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace server.Models
{
    public class Setting
    {
        public const int NORMAL_STRING_LENGTH = 100;
        public const int DEFAULT_STRING_LENGTH = 255;
        public const int LONG_STRING_LENGTH = 511;
        
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int SettingId { get; set; }
        
        [MaxLength(NORMAL_STRING_LENGTH)]
         public string Name { get; set; } = string.Empty;
        
        [MaxLength(DEFAULT_STRING_LENGTH)]
        public string? Value { get; set; } = string.Empty;
        
        public int? TypeId { get; set; }
        public Setting? Type { get; set; } = null!;
        
        public virtual ICollection<Setting>? Settings { get; set; } = null!;
        
        public bool Status { get; set; } = true;
        
        [MaxLength(DEFAULT_STRING_LENGTH)]
        public string? Description { get; set; } = string.Empty;
        
        public enum Types{
            Category = 1,
            PaymentMethod = 2,
            OrderStatus = 3,
            Size = 4,
        }
    }
}