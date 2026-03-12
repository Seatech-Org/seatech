import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Define the site's production URL
const DOMAIN = 'https://seatech.info';

// Get the current directory name (ESM equivalent of __dirname)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define all primary routes 
// Note: We don't include dynamic routes (like /products/:id) here unless
// we fetch all product IDs from Supabase during the build process.
// For now, we will include the main static routes.
const routes = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/products', priority: '0.9', changefreq: 'daily' },
  { path: '/about', priority: '0.8', changefreq: 'monthly' },
  { path: '/contact', priority: '0.8', changefreq: 'monthly' },
  { path: '/location', priority: '0.7', changefreq: 'monthly' },
  { path: '/clients', priority: '0.8', changefreq: 'monthly' },
  { path: '/government-procurement', priority: '0.9', changefreq: 'monthly' },
  { path: '/become-partner', priority: '0.8', changefreq: 'monthly' },
  { path: '/request-oem', priority: '0.8', changefreq: 'monthly' },
  { path: '/quote-request', priority: '0.7', changefreq: 'monthly' },
  { path: '/auth', priority: '0.5', changefreq: 'monthly' }
];

// Generate the XML string
const generateXml = () => {
  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

  const today = new Date().toISOString().split('T')[0];

  routes.forEach(route => {
    xml += `  <url>\n`;
    xml += `    <loc>${DOMAIN}${route.path}</loc>\n`;
    xml += `    <lastmod>${today}</lastmod>\n`;
    xml += `    <changefreq>${route.changefreq}</changefreq>\n`;
    xml += `    <priority>${route.priority}</priority>\n`;
    xml += `  </url>\n`;
  });

  xml += `</urlset>`;
  return xml;
};

// Write the file to the public directory
const sitemapPath = path.resolve(__dirname, '../public/sitemap.xml');
fs.writeFileSync(sitemapPath, generateXml());

console.log(`✅ Sitemap successfully generated at ${sitemapPath}`);
