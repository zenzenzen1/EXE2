using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace server.Models
{
    public class Product
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int ProductId { get; set; }
        // Sub Products
        public int BaseProductId { get; set; }
        public BaseProduct BaseProduct { get; set; } = null!;
        
        [Column(TypeName = "decimal(18, 2)")]
        public decimal Price { get; set; }
        
        public bool Status { get; set; } = true;
        
        public int? CategoryId { get; set; }
        public Setting? Category { get; set; }
        
        public int? MainImageId { get; set; }
        public Image? MainImage { get; set; }
        
        public virtual ICollection<Image>? SubImages { get; set; } = new List<Image>();
    }
}