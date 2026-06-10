
initializeTheme();

document.querySelectorAll('.coloredDot').forEach(dot => {
    dot.addEventListener('click', event => {
        updateColorTheme(window.getComputedStyle(dot).backgroundColor, dot)
    });
});

function initializeTheme() {
    const savedThemeIndex= localStorage.getItem('themeIndex');
    if (savedThemeIndex) {
        const dots= document.querySelectorAll(".coloredDot");
        const savedDot = dots[savedThemeIndex];
        const savedColor = window.getComputedStyle(savedDot).backgroundColor;
        updateColorTheme(savedColor, savedDot)     
    } else {
        const defaultDot =  Array.from(document.querySelectorAll(".coloredDot")).find(item => item.classList.contains("default"));        
        const defaultColor = hexToRgb(window.config.colors.find(item => 
          item.default
        ).color);
        if (defaultColor){
            updateColorTheme(defaultColor, defaultDot);
        }
    }
}

function updateColorTheme(color, element) {
    // Remove active from all, add to clicked
    document.querySelectorAll('.coloredDot').forEach(d => d.classList.remove('active'));
    if (element){
        element.classList.add('active');
    }  
    // Compute colors
    const darker = getDarkerColorLab(color);
    const lighter = getLighterColorLab(color);

    //update CSS variables
    document.documentElement.style.setProperty('--primary-color', color);
    document.documentElement.style.setProperty('--darker-primary-color', darker);
    document.documentElement.style.setProperty('--light-primary-color', lighter);

    //update favicon
    createDotFavicon(lighter);

    //store Theme Index
    if (element) {
        const dotIndex = Array.from(document.querySelectorAll('.coloredDot')).indexOf(element);
        localStorage.setItem('themeIndex', dotIndex);
        localStorage.setItem('themePrimaryColor', color);
        localStorage.setItem('themeDarkerColor', darker);
    }
}

function getLighterColorLab(rgbColor, offset = 20) {
    const rgb = rgbColor.match(/\d+/g).map(Number);
    const lab = rgbToLab(rgb[0], rgb[1], rgb[2]);
    lab[0] = Math.max(0, Math.min(100, lab[0] + offset));
    // increase chroma as lightness rises — lit surfaces appear more saturated
    lab[1] = Math.max(-128, Math.min(127, lab[1] * 1.3));
    lab[2] = Math.max(-128, Math.min(127, lab[2] * 1.3));
    const lighterRgb = labToRgb(lab[0], lab[1], lab[2]);
    return `rgb(${Math.round(lighterRgb[0])}, ${Math.round(lighterRgb[1])}, ${Math.round(lighterRgb[2])})`;
}

function getDarkerColorLab(rgbColor, offset = -20) {
    const color = rgbColor;
    const rgb = color.match(/\d+/g).map(Number);
    
    // RGB → Lab → Darker Lab → RGB
    const lab = rgbToLab(rgb[0], rgb[1], rgb[2]);
    lab[0] = Math.max(0, Math.min(100, lab[0] + offset)); // Reduce L* value
    //hue shift: slightly less red & more blue (mimicks in-shadow hue shifts)
    const range=255;
    lab[1] = Math.max(-128, Math.min(127, lab[1]-3/100*range));
    lab[2] = Math.max(-128, Math.min(127, lab[2]-8/100*range));
    
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

function hexToRgb(hex) {
  // Remove the hash if present
  hex = hex.replace('#', '');
  
  // Parse the hex values
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  
  return `rgb(${r}, ${g}, ${b})`;
}

function createDotFavicon(color) {
  const svg = `<svg width="100%" height="100%" viewBox="0 0 225 275" version="1.1" xmlns="http://www.w3.org/2000/svg" style="fill-rule:evenodd;clip-rule:evenodd;"><path d="M118.254,27.083l4.687,0c3.011,0.001 5.578,1.109 7.914,3.398c2.297,2.25 3.378,4.841 3.378,7.869l-0,90.027c-0,0.64 0.27,1.11 0.472,1.371c0.198,0.258 1.032,0.788 1.045,0.794c0.007,0.003 0.407,0.163 0.407,0.163l1.579,-0l0.623,-0.696l35.636,-39.999l0.012,-0.012c5.352,-6.11 12.144,-9.131 20.447,-9.131l9.859,0c0.944,0 1.576,0.214 2.022,0.517c0.447,0.303 0.873,0.81 1.217,1.677l0.057,0.134c0.415,0.864 0.505,1.562 0.419,2.136c-0.086,0.575 -0.373,1.204 -0.997,1.88l-0.012,0.012l-42.859,47.258c0,-0 -1.127,1.769 -1.127,2.856c0,1.063 0.413,2.008 0.985,2.792l40.556,48.136l2.746,3.434c0.637,0.745 0.905,1.414 0.969,2.006c0.062,0.592 -0.594,2.299 -0.594,2.299c-0.405,0.882 -0.892,1.426 -1.4,1.758c-0.506,0.329 -1.171,0.537 -2.08,0.537l-9.859,0c-8.266,0 -14.944,-3.134 -20.158,-9.513l-0.008,-0.012c0,-0 -35.859,-43.412 -36.031,-43.584c-0.364,-0.363 -0.802,-0.562 -1.229,-0.638l-0.419,-0.037c-0.545,-0 -1.162,0.191 -1.648,0.675c-0.485,0.485 -0.679,1.766 -0.679,1.766c-0,0.079 -0.011,4.438 -0.016,6.393c-0.011,3.91 -0.027,9.578 -0.045,14.368c-0.018,4.809 -0.043,10.6 -0.065,14.485c-0.017,2.942 -0.07,8.826 -0.07,8.826c0,20.723 -5.191,35.883 -15.205,45.878c-10.016,9.995 -25.208,15.177 -45.976,15.177c-7.401,0 -15.147,-0.578 -23.336,-1.827c-3.229,-0.545 -5.899,-2.11 -8.077,-4.834c-2.046,-2.595 -3.068,-5.547 -3.068,-8.988c0,-2.439 0.941,-4.34 2.861,-5.79c2.186,-1.367 4.461,-1.739 6.998,-1.107c7.695,1.944 15.676,2.889 23.938,2.889c11.842,-0 20.97,-3.107 26.835,-9.806l0.005,0.004c5.837,-6.521 8.487,-16.955 8.487,-30.864l-0.004,-1.216c0.047,-1.164 -0.11,-5.607 -0.11,-5.607c-0.033,-0.748 -0.311,-1.407 -0.793,-1.889c-0.233,-0.232 -0.475,-0.384 -0.675,-0.484c-0.1,-0.049 -1.628,-0.468 -1.628,-0.468l-1.062,0.965c-8.968,9.369 -20.232,14.07 -33.398,14.07c-12.257,0 -22.412,-4.536 -30.514,-13.696l-1.591,-1.892c-8.352,-10.576 -12.675,-25.263 -12.675,-44.299c0,-19.077 4.046,-33.514 11.955,-43.637c8.018,-10.026 18.869,-15.079 32.825,-15.079c7.06,-0 13.243,1.317 18.542,3.8l0.004,0c4.993,2.332 9.954,6.27 15.015,11.796l3.621,3.956l0,-59.73c0,-3.001 1.108,-5.562 3.402,-7.893c2.255,-2.293 4.851,-3.374 7.89,-3.374Zm-38.518,70.712c-9.168,-0 -16.303,3.372 -21.045,10.253c-4.644,6.743 -6.811,16.599 -6.811,29.244c0,13.082 2.261,23.296 7.17,30.197l0.02,0.024c5.079,6.917 12.048,10.449 20.666,10.449c7.575,0 14.147,-2.749 19.507,-8.085c4.126,-3.961 6.75,-8.515 7.821,-13.643l0.041,-0.334c0.539,-12.094 0.54,-23.997 -0,-35.657l-0.253,-1.306c-1.099,-4.617 -3.385,-8.739 -6.848,-12.305l-0.761,-0.752c-5.41,-5.387 -11.935,-8.085 -19.507,-8.085Z" style="fill:${color};fill-rule:nonzero;stroke:none;"/></svg>`;

  const encoded = btoa(svg);
  const dataUrl = `data:image/svg+xml;base64,${encoded}`;

  let link = document.querySelector("link[rel*='icon']") || document.createElement('link');
  link.type = 'image/svg+xml';
  link.rel = 'shortcut icon';
  link.href = dataUrl;
  document.getElementsByTagName('head')[0].appendChild(link);
}