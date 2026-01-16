import { LuHouse } from "react-icons/lu";
import { Link, useLocation } from "react-router-dom";

export default function Breadcrumb() {
  const location = useLocation(); 

  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <nav className="relative mb-4 flex justify-center">
      <div className="container flex items-center gap-3 py-12">
        <div className="absolute inset-0 bg-[url('./assets/stone.jpg')] bg-cover bg-center -z-1 rotate-180"></div>
      <Link to="/" className="text-lightGray text-[16px]"><LuHouse /></Link>
      {pathnames.map((name, index) => {
        const routeTo = "/" + pathnames.slice(0, index + 1).join("/");
        const isLast = index === pathnames.length - 1;
        return (
          <span key={name} className="text-lightGray text-[16px] flex items-center gap-3">
            {" > "}
            {isLast ? (
              <span className="text-lightGreen">{name}</span>
            ) : (
              <Link to={routeTo}>{name}</Link>
            )}
          </span>
        );
      })}
      </div>
    </nav>
  );
}
