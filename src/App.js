import logo from "./svg/discord-logo.svg";
import "./App.css";
import panelDiscordServer from "./svg/discord-server.svg";

const PanelSmall = ({ children }) => {

  const backupDescription = (
    <>
      <h2 className="text-4xl font-bold">Create an invite-only place where you belong</h2>
      <p>Discord servers are organized into topic-based channels where you can collaborate, share, and just talk about your day without clogging up a group chat.</p>
    </>
  )

  return (
    <div class="container max-w-screen-lg mx-auto flex flex-row">
      <div className="w-1/2">
        <img className="" src={panelDiscordServer} />
      </div>
      <div className="w-1/2 p-8 px-10 flex flex-col justify-center space-y-4">
        {children ? children : backupDescription}
      </div>
    </div>
  );
};

const PanelLarge = ({ children }) => {
  return (
    <div>
      <div className="descirption">{children}</div>
      <img src="" alt="" />
    </div>
  );
};

const PanelDescription = () => {
  return (
    <div className="">
      <h2 className="">Create an invite-only place where you belong</h2>
      <div className="">
        Discord servers are organized into topic-based channels where you can
        collaborate, share, and just talk about your day without clogging up a
        group chat.
      </div>
    </div>
  );
};

const CtaDownload = () => {
  return (
    <>
      <h1 className="text-2xl font-bold">Ready to start your journey?</h1>
      <Button>Download for Windows</Button>
    </>
  );
};

const Button = ({ children, className }) => {
  return (
    <button className={`py-2 px-5 bg-blue-900 rounded-full font-semibold ${className}`}>
      {children}
    </button>
  );
};

function App() {
  return (
    <div className="App">
      <div>
        {/* N A V I G A T I O N  */}
        <nav className="mt-4">
          <div className="container mx-auto max-w-screen-lg flex flex-row justify-between px-8 items-center">
            <img src={logo} alt="Discord Logo" />
            <ul className="space-x-4 flex text-xs font-semibold">
              <li>Download</li>
              <li>Nitro</li>
              <li>Safety</li>
              <li>Support</li>
              <li>Blog</li>
              <li>Careers</li>
            </ul>
            <Button className="text-xs">Login</Button>
          </div>
        </nav>

        {/* H E R O */}
        <div className="hero">
          <div className="container mx-auto max-w-screen-lg px-24 py-20">
            
            <div className="conatiner mx-auto text-center flex flex-col space-y-8 w-3/4">
              <h1 className="font-bold uppercase text-5xl">
                Imagine a place...
              </h1>
              <p className="font-xs font-light">
                ...where you can belong to a school club, a gaming group, or a
                worldwide art community. Where just you and a handful of friends
                can spend time together. A place that makes it easy to talk
                every day and hang out more often.
              </p>
              <div className="flex flex-row space-x-4 justify-center">
                <Button>Download for Windows</Button>
                <Button>Open Discord in your browser</Button>
              </div>
            </div>

          </div>
        </div>

        {/* P A N E L S */}
        <PanelSmall></PanelSmall>
        <PanelSmall></PanelSmall>
        <PanelSmall></PanelSmall>

        {/* C A L L  T O  A C T I O N  */}
        <div className="">
          <div className="container max-w-screen-lg mx-auto flex flex-col justify-center items-center space-y-5 p-24">
        <CtaDownload />

          </div>
        </div>

        {/* F O O T E R */}
      </div>
    </div>
  );
}

export default App;
