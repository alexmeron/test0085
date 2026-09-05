const fs = require('fs');

const raw = fs.readFileSync('/Users/alex/.gemini/antigravity/brain/bd03e5b4-69af-4953-bed1-86ffefcb3793/.system_generated/steps/2067/output.txt', 'utf8');
const data = JSON.parse(raw.substring(raw.indexOf('{'))).result;

function analyzeComponent(compData) {
  console.log(`\n\n=== AUDIT FOR ${compData.name} ===`);
  const variants = compData.variants;
  
  // Group by sizes
  const sizes = {};
  // Group by variants
  const colorVariants = {};
  
  for (const v of variants) {
    const sizeMatch = v.name.match(/size=([^,]+)/);
    const varMatch = v.name.match(/variant=([^,]+)/);
    const stateMatch = v.name.match(/state=([^,]+)/);
    
    if (!sizeMatch || !varMatch || !stateMatch) continue;
    
    const size = sizeMatch[1];
    const variant = varMatch[1];
    const state = stateMatch[1];
    
    // Process size layout
    if (state === 'default' && variant === 'primary') {
      sizes[size] = {
        height: v.height,
        padding: `${v.paddingTop}px ${v.paddingRight}px ${v.paddingBottom}px ${v.paddingLeft}px`,
        paddingLeftVar: v.boundVariables?.paddingLeft,
        paddingTopVar: v.boundVariables?.paddingTop,
        radiusVar: v.boundVariables?.topLeftRadius,
        itemSpacingVar: v.boundVariables?.itemSpacing,
        fontFam: v.textBoundVariables?.fontFamily,
        fontSizeVar: v.textBoundVariables?.fontSize,
        lineHeightVar: v.textBoundVariables?.lineHeight,
        fontWeightVar: v.textBoundVariables?.fontWeight,
      };
      if (v.iconSize) {
         sizes[size].iconSize = `${v.iconSize.width}x${v.iconSize.height}`;
         sizes[size].iconWidthVar = v.iconBoundVariables?.width;
      }
    }
    
    // Process colors
    if (!colorVariants[variant]) colorVariants[variant] = {};
    colorVariants[variant][state] = {
      fill: v.boundVariables?.fills?.[0],
      text: v.textBoundVariables?.fills?.[0] || v.iconBoundVariables?.fills?.[0]
    };
  }
  
  console.log('\n--- SIZE STYLES ---');
  for (const [size, info] of Object.entries(sizes)) {
    console.log(`SIZE: ${size}`);
    console.log(`  Height: ${info.height}px`);
    console.log(`  Padding: ${info.padding} (Top: ${info.paddingTopVar}, Left: ${info.paddingLeftVar})`);
    console.log(`  Radius: ${info.radiusVar}`);
    console.log(`  Gap: ${info.itemSpacingVar}`);
    console.log(`  Typography: ${info.fontSizeVar}, ${info.lineHeightVar}, ${info.fontWeightVar}`);
    if (info.iconSize) {
      console.log(`  Icon: ${info.iconSize} (${info.iconWidthVar})`);
    }
  }
  
  console.log('\n--- COLOR VARIANTS ---');
  for (const [variant, states] of Object.entries(colorVariants)) {
    console.log(`VARIANT: ${variant}`);
    for (const [state, info] of Object.entries(states)) {
      console.log(`  State: ${state} -> Fill: ${info.fill}, Text: ${info.text}`);
    }
  }
}

analyzeComponent(data.button);
analyzeComponent(data.buttonIcon);
