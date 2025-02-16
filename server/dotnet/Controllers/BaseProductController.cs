using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using server.Models;

namespace server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BaseProductController : ControllerBase
    {
        private readonly AppDbContext _context;

        public BaseProductController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/BaseProduct
        [HttpGet]
        public async Task<ActionResult<IEnumerable<BaseProduct>>> GetBaseProducts()
        {
            return await _context.BaseProducts.Include(bp => bp.Products).ToListAsync();
        }

        // GET: api/BaseProduct/5
        [HttpGet("{id}")]
        public async Task<ActionResult<BaseProduct>> GetBaseProduct(int id)
        {
            var baseProduct = await _context.BaseProducts.FindAsync(id);

            if (baseProduct == null)
            {
                return NotFound();
            }

            return baseProduct;
        }

        // PUT: api/BaseProduct/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutBaseProduct(int id, BaseProduct baseProduct)
        {
            if (id != baseProduct.BaseProductId)
            {
                return BadRequest();
            }

            _context.Entry(baseProduct).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BaseProductExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/BaseProduct
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<BaseProduct>> PostBaseProduct(BaseProduct baseProduct)
        {
            _context.BaseProducts.Add(baseProduct);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetBaseProduct", new { id = baseProduct.BaseProductId }, baseProduct);
        }

        // DELETE: api/BaseProduct/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteBaseProduct(int id)
        {
            var baseProduct = await _context.BaseProducts.FindAsync(id);
            if (baseProduct == null)
            {
                return NotFound();
            }

            _context.BaseProducts.Remove(baseProduct);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool BaseProductExists(int id)
        {
            return _context.BaseProducts.Any(e => e.BaseProductId == id);
        }
    }
}
