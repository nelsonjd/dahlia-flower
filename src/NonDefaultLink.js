import { Link } from "@shopify/polaris";
import WindowHistory from "./models/WindowHistory";

export default function NonDefaultLink({ url, children, onClick, ...props })
{
  const newOnClick = (event) =>
  {
    event.preventDefault();

    const windowHistory = new WindowHistory();
    windowHistory.navigate(url);
    
    if (onClick)
    {
      onClick();
    }
  };

  return (
    <Link onClick={newOnClick} {...props}>
      {children}
    </Link>
  );
}