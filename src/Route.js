export default function Route({ pathname, currentPathname, children }) {
  if ((currentPathname) !== pathname) {
    return null;
  }
  return children;
}