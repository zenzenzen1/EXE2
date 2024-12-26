using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace server.Models
{
    public class Image
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int ImageId { get; set; }
        
        [MaxLength(Setting.DEFAULT_STRING_LENGTH)]
        public string ImageName { get; set; } = string.Empty;
        
        [MaxLength(Setting.LONG_STRING_LENGTH)]
        public string ImageUrl { get; set; } = string.Empty;
        
        
    }
}