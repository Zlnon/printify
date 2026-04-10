/**
 * URL-safe path for files served from `/public` (handles spaces and special characters).
 */
export function publicMediaPath(...pathSegments: string[]): string {
  if (pathSegments.length === 0) {
    return "/"
  }
  return `/${pathSegments.map((segment) => encodeURIComponent(segment)).join("/")}`
}
