import { useEffect, useRef, useState } from "react";
import { Route } from "react-router";
import { SideBar } from "../../components/SideBar";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { useLocation } from "react-router";
import sidebarImage from "../../assets/img/sidebar-1.jpg";

export function Default() {
  const [image, setImage] = useState(sidebarImage);
  const [color, setColor] = useState("black");
  const [hasImage, setHasImage] = useState(true);
  const location = useLocation();
  const mainPanel = useRef(null);
  const getRoutes = (routes: any) => {
    return routes.map((prop: any, key: any) => {
      if (prop.layout === "/admin") {
        return <Route path={prop.layout + prop.path} key={key} />;
      } else {
        return null;
      }
    });
  };
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement?.scrollTo({ top: 0 });
    //        mainPanel.current?.scrollTop = 0;
    if (
      window.innerWidth < 993 &&
      document.documentElement.className.indexOf("nav-open") !== -1
    ) {
      document.documentElement.classList.toggle("nav-open");
      let element = document.getElementById("bodyClick");
      element ? element.parentNode?.removeChild(element) : undefined;
    }
  }, [location]);
  return (
    <>
      <div className="wrapper">
        <SideBar color={color} image={hasImage ? image : ""} routes={[]} />
        <div className="main-panel" ref={mainPanel}>
          <Header />
          <div className="content">
            {/*<Switch>{getRoutes(routes)}</Switch>*/}
          </div>
          <Footer />
        </div>
      </div>
      {/*<FixedPlugin*/}
      {/*    hasImage={hasImage}*/}
      {/*    setHasImage={() => setHasImage(!hasImage)}*/}
      {/*    color={color}*/}
      {/*    setColor={(color) => setColor(color)}*/}
      {/*    image={image}*/}
      {/*    setImage={(image) => setImage(image)}*/}
      {/*/>*/}
    </>
  );
}
