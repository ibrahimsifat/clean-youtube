// import { AiFillHome } from "react-icons/ai";
// import { BiSearchAlt } from "react-icons/bi";
// import { MdFavorite, MdRecentActors } from "react-icons/md";
// export const mobileNavData = [
//   {
//     level: "Home",
//     icon: <AiFillHome />,
//     path: "/",
//   },
//   {
//     level: "Recent",
//     icon: <MdRecentActors />,
//     path: "recent",
//   },
//   {
//     level: "Favorites",
//     icon: <MdFavorite />,
//     link: "favorites",
//   },
//   {
//     level: "Search",
//     icon: <BiSearchAlt />,
//     link: "search",
//   },
// ];
export const navData = [
  {
    level: "Recent",

    path: "recent",
  },
  {
    level: "Favorites",

    link: "favorites",
  },
  {
    level: "Search",

    link: "search",
  },
];
const mediaQuery = window.matchMedia("(max-width: 768px)");
console.log("mediaQuery", mediaQuery);
export const customModelStyles = {
  content: {
    margin: 0,
    padding: 0,
    width: "70%",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },

  overlay: {
    backgroundColor: "rgba(0,0,0,0.7)",
  },
};
