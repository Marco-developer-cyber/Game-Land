import Home from "./Pages/Home";
import { useCallback } from "react";
import Particles from "react-tsparticles";

const MainMenu = () => {
  const particlesInit = useCallback(async (engine: any) => {
    // Load the default renderer
    const { loadFull } = await import("tsparticles");
    await loadFull(engine);
  }, []);

  return (
    <>
      <Particles
        id="mainMenuParticles"
        init={particlesInit}
        options={{
          particles: {
            number: { value: 50 },
            color: { value: "#5F4B8B" },
            opacity: { value: 0.5 },
            size: { value: 3 },
            move: { enable: true, speed: 1 }
          }
        }}
        className="position-fixed w-100 h-100"
      />
      <Home />
    </>
  );
};

export default MainMenu;
