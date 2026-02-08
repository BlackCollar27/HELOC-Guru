// Color Replacement Script
// This script replaces all purple/blue colors with the new brand colors

const replacements = [
  // Gradients
  { from: /from-purple-600/g, to: 'from-[#026EC4]' },
  { from: /from-purple-500/g, to: 'from-[#026EC4]' },
  { from: /from-purple-400/g, to: 'from-[#3498d9]' },
  { from: /from-purple-100/g, to: 'from-[#cce5f7]' },
  { from: /from-purple-50/g, to: 'from-[#e6f2fb]' },
  { from: /to-blue-600/g, to: 'to-[#0ECEEO]' },
  { from: /to-blue-500/g, to: 'to-[#0ECEEO]' },
  { from: /to-blue-100/g, to: 'to-[#cff9fc]' },
  { from: /to-blue-50/g, to: 'to-[#e7fcfe]' },
  { from: /via-purple-900/g, to: 'via-[#026EC4]' },
  { from: /via-purple-600/g, to: 'via-[#026EC4]' },
  { from: /via-blue-600/g, to: 'via-[#0ECEEO]' },
  { from: /via-blue-50/g, to: 'via-[#e7fcfe]' },
  
  // Text colors
  { from: /text-purple-600/g, to: 'text-[#026EC4]' },
  { from: /text-purple-900/g, to: 'text-[#026EC4]' },
  { from: /text-purple-700/g, to: 'text-[#026EC4]' },
  { from: /hover:text-purple-700/g, to: 'hover:text-[#026EC4]' },
  
  // Background colors
  { from: /bg-purple-600/g, to: 'bg-[#026EC4]' },
  { from: /bg-purple-50/g, to: 'bg-[#e6f2fb]' },
  
  // Border colors  
  { from: /border-purple-600/g, to: 'border-[#026EC4]' },
  { from: /border-purple-500/g, to: 'border-[#026EC4]' },
  { from: /border-purple-200/g, to: 'border-[#cce5f7]' },
  
  // Shadows & Rings
  { from: /shadow-purple-500/g, to: 'shadow-[#026EC4]' },
  { from: /ring-purple-200/g, to: 'ring-[#cce5f7]' },
  
  // RGB values
  { from: /rgb\(147 51 234\)/g, to: 'rgb(2 110 196)' },
  { from: /rgb\(59 130 246\)/g, to: 'rgb(14 206 224)' },
  
  // Specific gradient combinations
  { from: /from-purple-400 to-pink-500/g, to: 'from-[#026EC4] to-[#0ECEEO]' },
  { from: /from-purple-400 to-pink-600/g, to: 'from-[#026EC4] to-[#0ECEEO]' },
  { from: /from-indigo-400 to-purple-500/g, to: 'from-[#026EC4] to-[#0ECEEO]' },
  { from: /from-indigo-400 to-purple-600/g, to: 'from-[#026EC4] to-[#0ECEEO]' },
  { from: /from-purple-50 to-pink-50/g, to: 'from-[#e6f2fb] to-[#e7fcfe]' },
];

console.log('Use these replacements in your codebase');
console.log('Total replacements:', replacements.length);
