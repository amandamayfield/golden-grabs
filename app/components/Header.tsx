import { useLocation } from "react-router";

export default function Header() {
  const location = useLocation();
  const isDetailsPage = location.pathname.startsWith("/details");

  return (
    <div className="p-5 bg-teal">
      {isDetailsPage ? (
        <>
          <h1>Ladies Names here</h1>
          <p>Specific quote here</p> 
        </>
      ) : (
        <>
          <h1>Golden Grabs</h1>
          <p>A nostalgic look at the Golden Girls</p>
        </>
      )}
    </div>
  );
}
