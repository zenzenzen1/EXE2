using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace server.Models
{
    public class BaseProduct
    {
        // Base Product
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int BaseProductId { get; set; }
        
        [MaxLength(Setting.DEFAULT_STRING_LENGTH)]
        public string ProductName { get; set; } = string.Empty;
        
        [MaxLength(Setting.DEFAULT_STRING_LENGTH)]
        public string? Description { get; set; }
        
        public virtual ICollection<Product> Products { get; set; } = new List<Product>();
    }
}