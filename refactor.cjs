const fs = require('fs');
const globPattern = [
  'src/layouts/Layout.astro',
  'src/components/CardExperience.astro',
  'src/components/About.astro',
  'src/components/Contact.astro',
  'src/components/Projects.astro',
  'src/components/Content.astro',
  'src/components/Nav.astro',
  'src/components/Tags.astro',
  'src/styles/global.css'
];

globPattern.forEach(f => {
  if (fs.existsSync(f)) {
    let content = fs.readFileSync(f, 'utf8');
    
    // Layout specifics
    if (f.includes('Layout.astro')) {
      content = content.replace(/<body[\s\S]*?>/g, '<body class="min-h-screen bg-white text-black font-sans selection:bg-neutral-200 selection:text-black overflow-x-hidden">');
      content = content.replace(/<div class="fixed inset-0[^>]*>[\s\S]*?<\/div>\s*<\/div>/g, '');
    }

    // Colors
    content = content.replace(/text-[#36312E]/g, 'text-black');
    content = content.replace(/text-[#2A2421]/g, 'text-black');
    content = content.replace(/text-stone-\d+/g, 'text-neutral-600');
    content = content.replace(/text-white\/[0-9]+/g, 'text-neutral-600');
    content = content.replace(/text-white/g, 'text-black');
    
    // Borders
    content = content.replace(/border-white\/[0-9]+/g, 'border-neutral-200');
    
    // Backgrounds
    content = content.replace(/bg-white\/[0-9]+/g, 'bg-neutral-50');
    
    // Ambers -> Blacks/Neutrals
    content = content.replace(/text-amber-\d+/g, 'text-black');
    content = content.replace(/bg-amber-\d+\/\d+/g, 'bg-neutral-100');
    content = content.replace(/bg-amber-\d+/g, 'bg-black text-white hover:bg-neutral-800');
    content = content.replace(/border-amber-\d+\/\d+/g, 'border-neutral-300');
    content = content.replace(/shadow-amber-\d+/g, 'shadow-none');
    
    // Global CSS glassmorphism rewrite
    if (f.includes('global.css')) {
      content = content.replace(/\.glass-card\s*{[^}]*}/g, '.glass-card { background: white; border: 1px solid #e5e5e5; transition: all 300ms ease; }');
      content = content.replace(/\.glass-card-card\s*{[^}]*}/g, '.glass-card-card { background: white; border: 1px solid #e5e5e5; transition: all 300ms ease; }');
      content = content.replace(/\.glass-card:hover\s*{[^}]*}/g, '.glass-card:hover { transform: translateY(-2px); box-shadow: 0 4px 20px rgba(0,0,0,0.05); }');
      content = content.replace(/\.glass-card-card:hover\s*{[^}]*}/g, '.glass-card-card:hover { transform: translateY(-2px); box-shadow: 0 4px 20px rgba(0,0,0,0.05); }');
    }
    
    // Remove gradients
    content = content.replace(/bg-gradient-to-[a-z]+\s+from-[a-z]+-\d+\s+to-[a-z]+-\d+/g, 'bg-neutral-100 text-black');

    fs.writeFileSync(f, content);
  }
});
console.log('Swiss Minimalism applied successfully.');
