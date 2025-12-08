/**
 * Image Lightbox Functionality
 * 
 * Automatically wraps images in blog posts with links and initializes GLightbox
 * for a click-to-view-full-size experience. Supports images, GIFs, and other media.
 * 
 * Dependencies: GLightbox library (loaded via CDN in default.html)
 */

(function() {
  'use strict';

  /**
   * Initializes the lightbox functionality
   * Wraps content images in links and sets up GLightbox
   */
  function initLightbox() {
    // Find all images in the main content section (not in header)
    const contentSection = document.querySelector('.wrapper > section');
    if (!contentSection) return;
    
    const images = contentSection.querySelectorAll('img:not(header img):not(a img)');
    
    images.forEach(function(img) {
      // Skip if image is already inside a link or in header
      if (img.closest('a') || img.closest('header')) return;
      
      // Create a link wrapper
      const link = document.createElement('a');
      link.href = img.src;
      link.setAttribute('data-glightbox', '');
      link.setAttribute('data-gallery', 'gallery');
      
      // Preserve image attributes
      const alt = img.getAttribute('alt') || '';
      link.setAttribute('data-title', alt);
      
      // Wrap the image
      img.parentNode.insertBefore(link, img);
      link.appendChild(img);
    });
    
    // Initialize GLightbox
    if (typeof GLightbox !== 'undefined') {
      const lightbox = GLightbox({
        selector: 'a[data-glightbox]',
        touchNavigation: true,
        loop: true,
        autoplayVideos: true
      });
    }
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLightbox);
  } else {
    initLightbox();
  }
})();

