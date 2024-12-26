using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace server.Models
{
    public class AppDbContext : IdentityDbContext<User>
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }
        
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            foreach (var entityType in modelBuilder.Model.GetEntityTypes())
            {
                var tableName = entityType.GetTableName();
                if(tableName != null && tableName.StartsWith("AspNet")){
                    entityType.SetTableName(tableName.Replace("AspNet", ""));
                }
            }
            
            var settingModelBuilder = modelBuilder.Entity<Setting>();
            settingModelBuilder.HasOne(s => s.Type).WithMany(s => s.Settings).HasForeignKey(s => s.TypeId);
            var baseProductModelBuilder = modelBuilder.Entity<BaseProduct>();
            var productModelBuilder = modelBuilder.Entity<Product>();
            // productModelBuilder.HasOne(p => p.BaseProduct).WithMany(b => b.).HasForeignKey(p => p.BaseProductId);
            foreach (var item in Enum.GetValues<Setting.Types>())
            {
                Setting s;
                settingModelBuilder.HasData(s = new Setting
                {
                    SettingId = (int)item,
                    Name = item.ToString(),
                    Status = true
                });
                switch (item)
                {
                    case Setting.Types.Category:
                        settingModelBuilder.HasData(new Setting
                        {
                            SettingId = 6,
                            Name = "Category 1",
                            TypeId = (int)Setting.Types.Category,
                            Status = true
                        });
                        break;
                    case Setting.Types.PaymentMethod:
                        break;
                    case Setting.Types.OrderStatus:
                        break;   
                    case Setting.Types.Size:
                        settingModelBuilder.HasData(new Setting
                        {
                            SettingId = 7,
                            Name = "80cm",
                            TypeId = (int)Setting.Types.Size,
                            Status = true
                        });
                        break;
                    default:
                        break;
                }
            }
            baseProductModelBuilder.HasData(new BaseProduct
            {
                BaseProductId = 1,
                ProductName = "Base Product 1",
            });
            productModelBuilder.HasData(new Product[]{
                new ()
                {
                    ProductId = 1,
                    BaseProductId = 1,
                    Price = 100,
                },
                new (){
                    ProductId = 2,
                    BaseProductId = 1,
                    Price = 200,
                }
            });
        }
        public DbSet<BaseProduct> BaseProducts { get; set; } = null!;
        public DbSet<Product> Products { get; set; } = null!;
        public DbSet<Setting> Settings { get; set; } = null!;
        public DbSet<Image> Images { get; set; } = null!;
        public override DbSet<User> Users { get; set; } = null!;
    }
}