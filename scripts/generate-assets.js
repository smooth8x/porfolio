const fs = require('fs');
const path = require('path');

const ensureDir = (dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
};

const placeholdersDir = path.join(__dirname, '../public/images/placeholders');
const lutsDir = path.join(__dirname, '../public/images/luts');

ensureDir(placeholdersDir);
ensureDir(lutsDir);

// Create rich SVG images that render beautifully in Next.js Image component
const createProjectSvg = (title, category, accentColor, bgGradient, patternType) => `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 750" width="1200" height="750">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${bgGradient[0]}"/>
      <stop offset="50%" stop-color="${bgGradient[1]}"/>
      <stop offset="100%" stop-color="${bgGradient[2]}"/>
    </linearGradient>
    <linearGradient id="cardGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="rgba(255,255,255,0.12)"/>
      <stop offset="100%" stop-color="rgba(255,255,255,0.02)"/>
    </linearGradient>
    <linearGradient id="accentGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="${accentColor}"/>
      <stop offset="100%" stop-color="#ffffff"/>
    </linearGradient>
    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="30" result="blur"/>
      <feComposite in="SourceGraphic" in2="blur" operator="over"/>
    </filter>
  </defs>

  <!-- Background -->
  <rect width="1200" height="750" fill="url(#bg)"/>
  
  <!-- Subtle Grid Lines -->
  <g stroke="rgba(255,255,255,0.04)" stroke-width="1">
    <line x1="100" y1="0" x2="100" y2="750"/>
    <line x1="300" y1="0" x2="300" y2="750"/>
    <line x1="600" y1="0" x2="600" y2="750"/>
    <line x1="900" y1="0" x2="900" y2="750"/>
    <line x1="1100" y1="0" x2="1100" y2="750"/>
    <line x1="0" y1="150" x2="1200" y2="150"/>
    <line x1="0" y1="375" x2="1200" y2="375"/>
    <line x1="0" y1="600" x2="1200" y2="600"/>
  </g>

  <!-- Glow Orb -->
  <circle cx="950" cy="200" r="220" fill="${accentColor}" opacity="0.18" filter="url(#glow)"/>
  <circle cx="250" cy="550" r="180" fill="#38BDF8" opacity="0.08" filter="url(#glow)"/>

  <!-- Browser Window Mockup Frame -->
  <g transform="translate(150, 100)">
    <!-- Main Window Card -->
    <rect width="900" height="550" rx="16" fill="rgba(14, 14, 20, 0.85)" stroke="rgba(255, 255, 255, 0.12)" stroke-width="1.5"/>
    
    <!-- Window Header Bar -->
    <rect width="900" height="54" rx="16" fill="rgba(22, 22, 30, 0.95)"/>
    <rect y="40" width="900" height="14" fill="rgba(22, 22, 30, 0.95)"/>
    <line x1="0" y1="54" x2="900" y2="54" stroke="rgba(255, 255, 255, 0.08)"/>

    <!-- Window Controls -->
    <circle cx="30" cy="27" r="6" fill="#FF5F56"/>
    <circle cx="50" cy="27" r="6" fill="#FFBD2E"/>
    <circle cx="70" cy="27" r="6" fill="#27C93F"/>

    <!-- URL Pill -->
    <rect x="250" y="14" width="400" height="26" rx="13" fill="rgba(0,0,0,0.4)" stroke="rgba(255,255,255,0.06)"/>
    <text x="450" y="31" fill="rgba(255,255,255,0.4)" font-family="system-ui, sans-serif" font-size="12" text-anchor="middle" font-weight="500">https://${title.toLowerCase().replace(/[^a-z0-9]/g, '')}.com</text>

    <!-- Content UI Mockup Layout -->
    <!-- Hero Banner inside Mockup -->
    <rect x="40" y="84" width="820" height="240" rx="12" fill="url(#cardGrad)" stroke="rgba(255,255,255,0.08)"/>
    
    <!-- Mini Navigation inside Mockup -->
    <text x="60" y="125" fill="${accentColor}" font-family="system-ui, sans-serif" font-size="13" font-weight="700" letter-spacing="2">${category.toUpperCase()}</text>
    <text x="60" y="175" fill="#ffffff" font-family="system-ui, sans-serif" font-size="28" font-weight="800">${title}</text>
    <text x="60" y="210" fill="rgba(255,255,255,0.6)" font-family="system-ui, sans-serif" font-size="14" font-weight="400">Crafted with WordPress • Elementor Pro • Custom CSS3</text>
    
    <!-- CTA Button Mockup -->
    <rect x="60" y="240" width="140" height="38" rx="8" fill="${accentColor}"/>
    <text x="130" y="264" fill="#08080a" font-family="system-ui, sans-serif" font-size="12" font-weight="700" text-anchor="middle">EXPLORE SITE</text>

    <!-- 3 Mini Cards below Hero -->
    <g transform="translate(40, 348)">
      <!-- Card 1 -->
      <rect x="0" y="0" width="255" height="160" rx="10" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.06)"/>
      <rect x="20" y="24" width="40" height="40" rx="8" fill="rgba(229,169,60,0.15)"/>
      <circle cx="40" cy="44" r="8" fill="${accentColor}"/>
      <rect x="20" y="80" width="140" height="10" rx="5" fill="rgba(255,255,255,0.7)"/>
      <rect x="20" y="105" width="200" height="8" rx="4" fill="rgba(255,255,255,0.2)"/>
      <rect x="20" y="123" width="160" height="8" rx="4" fill="rgba(255,255,255,0.2)"/>

      <!-- Card 2 -->
      <rect x="282" y="0" width="255" height="160" rx="10" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.06)"/>
      <rect x="302" y="24" width="40" height="40" rx="8" fill="rgba(56,189,248,0.15)"/>
      <circle cx="322" cy="44" r="8" fill="#38BDF8"/>
      <rect x="302" y="80" width="140" height="10" rx="5" fill="rgba(255,255,255,0.7)"/>
      <rect x="302" y="105" width="200" height="8" rx="4" fill="rgba(255,255,255,0.2)"/>
      <rect x="302" y="123" width="160" height="8" rx="4" fill="rgba(255,255,255,0.2)"/>

      <!-- Card 3 -->
      <rect x="565" y="0" width="255" height="160" rx="10" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.06)"/>
      <rect x="585" y="24" width="40" height="40" rx="8" fill="rgba(168,85,247,0.15)"/>
      <circle cx="605" cy="44" r="8" fill="#A855F7"/>
      <rect x="585" y="80" width="140" height="10" rx="5" fill="rgba(255,255,255,0.7)"/>
      <rect x="585" y="105" width="200" height="8" rx="4" fill="rgba(255,255,255,0.2)"/>
      <rect x="585" y="123" width="160" height="8" rx="4" fill="rgba(255,255,255,0.2)"/>
    </g>
  </g>
</svg>
`;

// Create Creative Portfolio SVGs
const createCreativeSvg = (title, tag, color1, color2, iconType) => `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 650" width="1000" height="650">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${color1}"/>
      <stop offset="100%" stop-color="${color2}"/>
    </linearGradient>
    <filter id="cinematicGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="40" result="blur"/>
      <feComposite in="SourceGraphic" in2="blur" operator="over"/>
    </filter>
  </defs>

  <rect width="1000" height="650" fill="#09090D"/>
  <rect width="1000" height="650" fill="url(#bgGrad)" opacity="0.25"/>
  
  <!-- Vignette -->
  <radialGradient id="vignette" cx="50%" cy="50%" r="50%">
    <stop offset="60%" stop-color="transparent"/>
    <stop offset="100%" stop-color="#050508"/>
  </radialGradient>
  <rect width="1000" height="650" fill="url(#vignette)"/>

  <!-- Subtle Center Glow -->
  <circle cx="500" cy="325" r="180" fill="${color1}" opacity="0.3" filter="url(#cinematicGlow)"/>

  <!-- Frame Border -->
  <rect x="40" y="40" width="920" height="570" rx="16" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="1.5"/>

  <!-- 16:9 Letterbox Bars -->
  <rect x="40" y="40" width="920" height="40" fill="rgba(0,0,0,0.6)"/>
  <rect x="40" y="570" width="920" height="40" fill="rgba(0,0,0,0.6)"/>

  <!-- Play / Focus Icon Indicator in Center -->
  <circle cx="500" cy="300" r="48" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.2)" stroke-width="2"/>
  <polygon points="492,284 516,300 492,316" fill="#FFFFFF"/>

  <!-- Film Timecode & Meta -->
  <text x="70" y="68" fill="rgba(255,255,255,0.5)" font-family="monospace" font-size="13">REC [●] 24FPS • 4K PRORES</text>
  <text x="930" y="68" fill="#E5A93C" font-family="monospace" font-size="13" text-anchor="end">${tag.toUpperCase()}</text>

  <!-- Title & Description in Bottom Bar -->
  <text x="70" y="550" fill="#FFFFFF" font-family="system-ui, sans-serif" font-size="26" font-weight="700">${title}</text>
  <text x="70" y="596" fill="rgba(255,255,255,0.6)" font-family="system-ui, sans-serif" font-size="13">DaVinci Resolve • Premiere Pro • Node-Based Color Grading</text>
</svg>
`;

// Create LUT Before/After SVGs
const createLutImage = (mode, presetName, theme) => {
  const isBefore = mode === 'before';
  const bg = isBefore 
    ? '#24282B' // Flat Log washed out look
    : '#0A0E17'; // Graded rich look
  
  const textColor = isBefore ? '#88929A' : '#F4F4F6';
  const accent = isBefore ? '#6A7580' : '#E5A93C';

  return `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 600" width="1000" height="600">
  <defs>
    <linearGradient id="lutGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      ${isBefore 
        ? `<stop offset="0%" stop-color="#4B5358"/><stop offset="50%" stop-color="#353B40"/><stop offset="100%" stop-color="#282D31"/>`
        : `<stop offset="0%" stop-color="#18130B"/><stop offset="40%" stop-color="#0A0F1A"/><stop offset="100%" stop-color="#261705"/>`
      }
    </linearGradient>
    <filter id="gradeGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="30" result="blur"/>
      <feComposite in="SourceGraphic" in2="blur" operator="over"/>
    </filter>
  </defs>

  <!-- Base Canvas -->
  <rect width="1000" height="600" fill="url(#lutGrad)"/>

  ${!isBefore ? `
  <!-- Graded Golden Atmospheric Bloom -->
  <circle cx="650" cy="220" r="160" fill="#E5A93C" opacity="0.35" filter="url(#gradeGlow)"/>
  <circle cx="280" cy="420" r="140" fill="#0EA5E9" opacity="0.2" filter="url(#gradeGlow)"/>
  ` : `
  <!-- Flat Log Overlay -->
  <rect width="1000" height="600" fill="rgba(255,255,255,0.08)"/>
  `}

  <!-- Subtle Film Lines & Horizon -->
  <line x1="80" y1="360" x2="920" y2="360" stroke="${isBefore ? 'rgba(255,255,255,0.1)' : 'rgba(229,169,60,0.3)'}" stroke-width="1.5"/>

  <!-- Mountain Silhouette / Cinematic Scene -->
  <polygon points="80,500 240,320 380,420 560,260 740,400 920,300 920,540 80,540" 
    fill="${isBefore ? 'rgba(255,255,255,0.12)' : '#05070B'}" 
    stroke="${isBefore ? 'rgba(255,255,255,0.15)' : 'rgba(229,169,60,0.4)'}" 
    stroke-width="2"/>

  <!-- Water Reflection / Floor Reflection -->
  <rect x="80" y="440" width="840" height="80" fill="${isBefore ? 'rgba(255,255,255,0.06)' : 'rgba(229,169,60,0.08)'}"/>

  <!-- Status HUD -->
  <g transform="translate(60, 60)">
    <rect width="220" height="42" rx="8" fill="${isBefore ? 'rgba(0,0,0,0.5)' : 'rgba(229,169,60,0.2)'}" stroke="${accent}" stroke-width="1.5"/>
    <text x="110" y="26" fill="${textColor}" font-family="monospace" font-size="14" font-weight="700" text-anchor="middle">
      ${isBefore ? 'FLAT LOG RAW' : 'GRADED 3D LUT'}
    </text>
  </g>

  <!-- Camera / Color space tag -->
  <text x="940" y="85" fill="${isBefore ? '#778899' : '#E5A93C'}" font-family="monospace" font-size="13" text-anchor="end">
    ${presetName}
  </text>
  
  <text x="60" y="550" fill="${textColor}" font-family="system-ui, sans-serif" font-size="18" font-weight="600">
    ${isBefore ? 'Flat Raw Camera Profile (Unprocessed S-Log / Log)' : 'Rich Cinematic Contrast • Precision Color Balancing'}
  </text>
</svg>
`;
};

// Write WordPress placeholders
fs.writeFileSync(path.join(placeholdersDir, 'wp-agency.webp'), createProjectSvg('Aura Brand Agency', 'Creative Studio', '#E5A93C', ['#0A0A0F', '#14141F', '#07070A']));
fs.writeFileSync(path.join(placeholdersDir, 'wp-ecommerce.webp'), createProjectSvg('Verve E-Commerce', 'WooCommerce Store', '#38BDF8', ['#070D18', '#0F1E33', '#060B12']));
fs.writeFileSync(path.join(placeholdersDir, 'wp-corporate.webp'), createProjectSvg('Nexus Global B2B', 'Corporate Enterprise', '#10B981', ['#06140F', '#0B231B', '#050D0A']));
fs.writeFileSync(path.join(placeholdersDir, 'wp-architect.webp'), createProjectSvg('Monolith Studio', 'Architecture Atelier', '#F59E0B', ['#161208', '#241C0A', '#0D0A05']));

// Write Creative placeholders
fs.writeFileSync(path.join(placeholdersDir, 'creative-grade.webp'), createCreativeSvg('Cinematic Atmosphere & Color Science', 'Color Grading', '#E5A93C', '#1A1408'));
fs.writeFileSync(path.join(placeholdersDir, 'creative-edit.webp'), createCreativeSvg('High-Energy Commercial Cut', 'Video Editing', '#38BDF8', '#081628'));
fs.writeFileSync(path.join(placeholdersDir, 'creative-reel.webp'), createCreativeSvg('Viral Retention Reel Flow', 'Cinematic Reels', '#EC4899', '#240817'));
fs.writeFileSync(path.join(placeholdersDir, 'creative-motion.webp'), createCreativeSvg('Futuristic Logo & Title Reveal', 'Motion Graphics', '#8B5CF6', '#15092A'));
fs.writeFileSync(path.join(placeholdersDir, 'creative-social.webp'), createCreativeSvg('Editorial Brand Carousel & Grid', 'Social Content', '#F59E0B', '#1F1506'));
fs.writeFileSync(path.join(placeholdersDir, 'creative-photo.webp'), createCreativeSvg('Editorial Street & Moody Night', 'Photography', '#06B6D4', '#05181E'));

// Write LUT pairs
fs.writeFileSync(path.join(lutsDir, 'log-before-1.webp'), createLutImage('before', 'Sony S-Log3 → Raw', 'gold'));
fs.writeFileSync(path.join(lutsDir, 'graded-after-1.webp'), createLutImage('after', 'Sony S-Log3 → Graded Tungsten Gold', 'gold'));

fs.writeFileSync(path.join(lutsDir, 'log-before-2.webp'), createLutImage('before', 'Apple Log → Raw Flat', 'cyan'));
fs.writeFileSync(path.join(lutsDir, 'graded-after-2.webp'), createLutImage('after', 'Apple Log → Graded Cyber Cyan', 'cyan'));

fs.writeFileSync(path.join(lutsDir, 'log-before-3.webp'), createLutImage('before', 'Rec.709 → Standard Profile', 'vintage'));
fs.writeFileSync(path.join(lutsDir, 'graded-after-3.webp'), createLutImage('after', 'Rec.709 → Graded 35mm Analog Film', 'vintage'));

console.log('All placeholder assets generated successfully!');
