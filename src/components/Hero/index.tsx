import { Button } from "../Button";

export const Hero = () => {
  return (
    <>
      <header className="w-full bg-azul-noche">
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[614px]">
          <div className="flex items-center justify-center py-14 px-8 md:px-16 xl:px-32">
            <div className="w-full max-w-[29rem] flex flex-col gap-6">
              <span className="text-esmeralda uppercase text-sm">
                Full Stack Developer
              </span>
              <h1 className="title text-5xl text-white">Deimer Hernandez</h1>
              <p className="text-blanco-hueso">
                I build fast, scalable web applications end to end. My focus is
                writing clean, maintainable code that ships — and keeps shipping
                once real users arrive.
              </p>
              <div className="flex gap-4">
                <Button type={"primary"}> Get in touch </Button>
                <Button type={"secondary"}> See projects </Button>
              </div>
              <span className="block border-t border-blanco-hueso/30 mt-4"></span>

              <ul className="text-blanco-hueso/30 flex flex-wrap gap-4">
                <li className="text-sm">Aws</li>
                <li className="text-sm">Node js</li>
                <li className="text-sm">Typescript</li>
                <li className="text-sm">Python</li>
                <li className="text-sm">Postgres sql</li>
                <li className="text-sm">Fast api</li>
                <li className="text-sm">Nest js</li>
                <li className="text-sm">React</li>
                <li className="text-sm">Git</li>
                <li className="text-sm">Docker</li>
                <li className="text-sm">Terraform</li>
                <li className="text-sm">Claude</li>
              </ul>
            </div>
          </div>
          <div className="bg-esmeralda flex items-center justify-center">
            <img
              src="./profile.png"
              className="block max-w-full"
              alt="profile"
            />
          </div>
        </div>
      </header>
    </>
  );
};
