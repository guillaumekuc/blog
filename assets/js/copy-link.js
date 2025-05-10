function copyPageLink(event) {
  event.preventDefault();  // Prevent default anchor behavior
  
  // Get the URL from the link's href attribute
  const linkElement = event.currentTarget;
  const url = linkElement.getAttribute('href');
  
  // Copy to clipboard
  navigator.clipboard.writeText(url)
    .then(() => {
      // Visual feedback that the link was copied
      const originalTitle = linkElement.getAttribute('title');
      linkElement.setAttribute('title', 'Link copied!');
      
      // Change icon temporarily to show success
      const icon = linkElement.querySelector('i');
      const originalClass = icon.className;
      icon.className = 'fa-solid fa-check';
      
      // Reset after 2 seconds
      setTimeout(() => {
        linkElement.setAttribute('title', originalTitle);
        icon.className = originalClass;
      }, 2000);
    })
    .catch(err => {
      console.error('Failed to copy link: ', err);
      alert('Could not copy link to clipboard');
    });
}

// Initialize copy buttons when DOM content is loaded
document.addEventListener('DOMContentLoaded', () => {
  const copyLinks = document.querySelectorAll('.copylink');
  copyLinks.forEach(link => {
    link.addEventListener('click', copyPageLink);
  });
});