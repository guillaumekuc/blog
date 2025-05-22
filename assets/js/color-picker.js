console.log('color-picker.js is loaded');

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.coloredDot').forEach(dot => {
        dot.addEventListener('click', function() {
            // Remove active from all, add to clicked
            document.querySelectorAll('.coloredDot').forEach(d => d.classList.remove('active'));
            this.classList.add('active');
            
            // Get colors
            const color = window.getComputedStyle(this).backgroundColor;
            const darker = getDarkerColorLab(color);

            //update CSS variables
            document.documentElement.style.setProperty('--primary-color', color);
            document.documentElement.style.setProperty('--darker-primary-color', darker);
        });
    });
});


function getDarkerColorLab(rgbColor, offset = -20) {
    const color = rgbColor;
    const rgb = color.match(/\d+/g).map(Number);
    
    // RGB → Lab → Darker Lab → RGB
    const lab = rgbToLab(rgb[0], rgb[1], rgb[2]);
    lab[0] = Math.max(0, Math.min(100, lab[0] + offset)); // Reduce L* value
    //hue shift: slightly less red & more blue (mimicks in-shadow hue shifts)
    lab[1] = Math.max(-128, Math.min(127, lab[1]-6.375));
    lab[2] = Math.max(-128, Math.min(127, lab[2]-12.75));
    
    const darkerRgb = labToRgb(lab[0], lab[1], lab[2]);
    return `rgb(${Math.round(darkerRgb[0])}, ${Math.round(darkerRgb[1])}, ${Math.round(darkerRgb[2])})`;
}

// RGB to Lab conversion pipeline
function rgbToLab(r, g, b) {
    // Normalize RGB values
    [r, g, b] = [r, g, b].map(val => {
        val = val / 255;
        return val > 0.04045 ? Math.pow((val + 0.055) / 1.055, 2.4) : val / 12.92;
    });
    
    // RGB to XYZ (D65 illuminant)
    let x = r * 0.4124564 + g * 0.3575761 + b * 0.1804375;
    let y = r * 0.2126729 + g * 0.7151522 + b * 0.0721750;
    let z = r * 0.0193339 + g * 0.1191920 + b * 0.9503041;
    
    // Normalize for D65 white point
    x = x / 0.95047;
    y = y / 1.00000;
    z = z / 1.08883;
    
    // XYZ to Lab
    [x, y, z] = [x, y, z].map(val => 
        val > 0.008856 ? Math.pow(val, 1/3) : (7.787 * val + 16/116)
    );
    
    const L = 116 * y - 16;
    const a = 500 * (x - y);
    const b_lab = 200 * (y - z);
    
    return [L, a, b_lab];
}

function labToRgb(L, a, b) {
    // Lab to XYZ
    let y = (L + 16) / 116;
    let x = a / 500 + y;
    let z = y - b / 200;
    
    [x, y, z] = [x, y, z].map(val => {
        const cubed = Math.pow(val, 3);
        return cubed > 0.008856 ? cubed : (val - 16/116) / 7.787;
    });
    
    // Apply D65 white point
    x = x * 0.95047;
    y = y * 1.00000;
    z = z * 1.08883;
    
    // XYZ to RGB
    let r = x * 3.2404542 + y * -1.5371385 + z * -0.4985314;
    let g = x * -0.9692660 + y * 1.8760108 + z * 0.0415560;
    let b_rgb = x * 0.0556434 + y * -0.2040259 + z * 1.0572252;
    
    // Gamma correction and normalization
    [r, g, b_rgb] = [r, g, b_rgb].map(val => {
        val = val > 0.0031308 ? 1.055 * Math.pow(val, 1/2.4) - 0.055 : 12.92 * val;
        return Math.max(0, Math.min(255, val * 255));
    });
    
    return [r, g, b_rgb];
}