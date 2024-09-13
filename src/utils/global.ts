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