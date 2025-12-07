// include-html.js — fetches studentheader.html and injects its <header> into a placeholder
(async function () {
  try {
    const resp = await fetch('studentheader.html');
    if (!resp.ok) return;
    const text = await resp.text();
    const parser = new DOMParser();
    const doc = parser.parseFromString(text, 'text/html');

    // Find header element
    const headerEl = doc.querySelector('header');
    if (!headerEl) return;

    const placeholder = document.getElementById('header-placeholder');
    if (!placeholder) return;

    // Insert header into placeholder
    placeholder.replaceWith(headerEl);

    // Grab and inject side nav elements - check they don't already exist
    const sideNavBackdrop = doc.getElementById('sideNavBackdrop');
    const sideNavPanel = doc.getElementById('sideNavPanel');
    if (sideNavBackdrop && sideNavPanel) {
      if (!document.getElementById('sideNavBackdrop')) {
        document.body.appendChild(sideNavBackdrop.cloneNode(true));
      }
      if (!document.getElementById('sideNavPanel')) {
        document.body.appendChild(sideNavPanel.cloneNode(true));
      }
      
      // Re-attach event listeners since cloneNode doesn't preserve them
      setupSideNavListeners();
    }

    // Copy any styles (link or style) to the current document head; avoid duplicates
    const styles = Array.from(doc.querySelectorAll('link[rel="stylesheet"], style'));
    styles.forEach((s) => {
      if (s.tagName.toLowerCase() === 'link' && s.href) {
        // only add if not already present
        const href = s.getAttribute('href');
        if (!document.head.querySelector(`link[rel=\"stylesheet\"][href=\"${href}\"]`)) {
          const newLink = document.createElement('link');
          newLink.rel = 'stylesheet';
          newLink.href = href;
          newLink.setAttribute('data-injected-from', 'studentheader');
          document.head.appendChild(newLink);
        }
      } else if (s.tagName.toLowerCase() === 'style') {
        const text = s.textContent.trim();
        // check if a style with same content already in head
        const exists = Array.from(document.head.querySelectorAll('style')).some(
          (st) => st.textContent.trim() === text
        );
        if (!exists) {
          const newStyle = document.createElement('style');
          newStyle.textContent = text;
          newStyle.setAttribute('data-injected-from', 'studentheader');
          document.head.appendChild(newStyle);
        }
      }
    });

    // Execute any inline scripts found in the fetched doc
    const scripts = Array.from(doc.querySelectorAll('script'));
    scripts.forEach((s) => {
      if (s.src) {
        if (!document.body.querySelector(`script[src=\"${s.src}\"]`)) {
          const newScript = document.createElement('script');
          newScript.src = s.src;
          newScript.setAttribute('data-injected-from', 'studentheader');
          document.body.appendChild(newScript);
        }
      } else {
        // For inline scripts, check for identical script content
        const txt = s.textContent.trim();
        const exists = Array.from(document.body.querySelectorAll('script')).some(
          (sb) => sb.textContent && sb.textContent.trim() === txt
        );
        if (!exists) {
          const newScript = document.createElement('script');
          newScript.textContent = txt;
          newScript.setAttribute('data-injected-from', 'studentheader');
          document.body.appendChild(newScript);
        }
      }
    });
  } catch (err) {
    console.error('Error injecting header:', err);
  }
})();

// Setup side nav event listeners - called after cloning elements
function setupSideNavListeners() {
  const sideNavToggle = document.getElementById('sideNavToggle');
  const sideNavPanel = document.getElementById('sideNavPanel');
  const sideNavBackdrop = document.getElementById('sideNavBackdrop');
  const sideNavClose = document.getElementById('sideNavClose');

  function openSideNav() {
    if (sideNavPanel) sideNavPanel.classList.add('open');
    if (sideNavBackdrop) sideNavBackdrop.classList.add('open');
  }

  function closeSideNav() {
    if (sideNavPanel) sideNavPanel.classList.remove('open');
    if (sideNavBackdrop) sideNavBackdrop.classList.remove('open');
  }

  if (sideNavToggle) {
    sideNavToggle.addEventListener('click', openSideNav);
  }
  if (sideNavClose) {
    sideNavClose.addEventListener('click', closeSideNav);
  }
  if (sideNavBackdrop) {
    sideNavBackdrop.addEventListener('click', closeSideNav);
  }

  // Close side nav when a link is clicked
  document.querySelectorAll('.side-nav-link').forEach((link) => {
    link.addEventListener('click', closeSideNav);
  });
}
