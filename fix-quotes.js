// This script fixes unescaped single quotes in all destination pages
const fs = require('fs');
const path = require('path');

// List of destination pages to fix
const destinationPages = [
  'app/destinations/colombia/page.tsx',
  'app/destinations/costa-rica/page.tsx',
  'app/destinations/egypt/page.tsx',
  'app/destinations/mexico/page.tsx',
  'app/destinations/peru/page.tsx',
  'app/destinations/turkey/page.tsx'
];

// Function to fix unescaped quotes in a file
function fixUnescapedQuotes(filePath) {
  console.log(`Fixing unescaped quotes in ${filePath}...`);
  
  // Read the file content
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Replace problematic patterns
  // 1. Fix "It's" -> "It&apos;s"
  content = content.replace(/It's/g, 'It&apos;s');
  
  // 2. Fix "country's" -> "country&apos;s"
  content = content.replace(/country's/g, 'country&apos;s');
  
  // 3. Fix "Bogotá's" -> "Bogotá&apos;s"
  content = content.replace(/Bogotá's/g, 'Bogotá&apos;s');
  
  // 4. Fix "Colombia's" -> "Colombia&apos;s"
  content = content.replace(/Colombia's/g, 'Colombia&apos;s');
  
  // 5. Fix "San Andrés" -> "San Andrés"
  content = content.replace(/San Andrés/g, 'San Andrés');
  
  // 6. Fix any other possessive forms
  content = content.replace(/(\w+)'s/g, '$1&apos;s');
  
  // Write the fixed content back to the file
  fs.writeFileSync(filePath, content, 'utf8');
  
  console.log(`Fixed ${filePath}`);
}

// Fix each destination page
destinationPages.forEach(fixUnescapedQuotes);

console.log('All destination pages fixed successfully!');
