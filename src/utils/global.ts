export function slugify(text: string) {
  return text
    .toString()                   // Convert to string
    .toLowerCase()                // Convert to lowercase
    .trim()                       // Trim leading/trailing spaces
    .replace(/\s+/g, '-')         // Replace spaces with hyphens
    .replace(/[^\w\-]+/g, '')     // Remove all non-word characters
    .replace(/\-\-+/g, '-')       // Replace multiple hyphens with a single one
    .replace(/^-+/, '')           // Remove leading hyphen
    .replace(/-+$/, '');          // Remove trailing hyphen
}


// displayFontSize
type HeadingId = {
  headingId: string;
  fontSizeDisplayId: string;
};

export function displayFontSize(headingIds: HeadingId[]): void {
  headingIds.forEach(({ headingId, fontSizeDisplayId }) => {
    const heading = document.getElementById(headingId) as HTMLElement | null;

    if (!heading) return;

    // Create a wrapper div and insert the heading and font size display span
    const wrapperDiv = document.createElement("div");
    heading.parentNode?.replaceChild(wrapperDiv, heading);
    wrapperDiv.appendChild(heading);

    const fontSizeDisplay = document.createElement("span");
    fontSizeDisplay.id = fontSizeDisplayId;
    wrapperDiv.appendChild(fontSizeDisplay);

    // Function to update the font size display
    function updateFontSizeDisplay() {
      if (!heading) return;  // Ensure heading is still valid
      
      const style = window.getComputedStyle(heading);
      const fontSize = parseFloat(style.getPropertyValue("font-size"));
      const roundedFontSize = Math.round(fontSize);
      fontSizeDisplay.innerHTML = `<code>${roundedFontSize}px</code>`;
    }

    // Initial call to display the font size
    updateFontSizeDisplay();

    // Create a ResizeObserver to watch for changes in the heading size
    const resizeObserver = new ResizeObserver(updateFontSizeDisplay);
    resizeObserver.observe(heading);
  });
}


