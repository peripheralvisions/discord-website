import logo from "./svg/discord-logo.svg";
import "./App.css";

import panelDiscordServer from "./svg/discord-server.svg";
import panelDiscordVoice from "./svg/discord-voice.svg";
import panelDiscordVoicechat from "./svg/discord-voicechat.svg";

import starsSVG from "./svg/stars.svg";

import mountainsSVG from "./svg/mountains-bg.svg";

const PanelSmall = ({ children, image, imageRight }) => {
  const backupDescription = (
    <>
      <h2 className="text-4xl font-semibold">
        Create an invite-only place where you belong
      </h2>
      <p className="text-xl">
        Discord servers are organized into topic-based channels where you can
        collaborate, share, and just talk about your day without clogging up a
        group chat.
      </p>
    </>
  );

  return (
    <div class="container max-w-screen-xl mx-auto flex flex-row">
      <div className={`w-1/2 ${imageRight ? "order-2" : "order-1"}`}>
        <img className="" src={image} />
      </div>
      <div className="order-1 w-1/2 p-8 px-10 flex flex-col justify-center space-y-8">
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
      <div className="absolute h-12">
        <img className="transform scale-125" src={starsSVG} alt="" />
      </div>
      <h1 className="text-4xl  font-bold mb-4">
          Ready to start your journey?
        </h1>
      <Button>Download for Windows</Button>
    </>
  );
};

const Button = ({ children, className }) => {
  //bg-blue-900
  return (
    <button
      className={`py-2 px-7 bg-white text-black rounded-full font-medium ${className}`}
    >
      {children}
    </button>
  );
};

function App() {
  return (
    <div className="App overflow-x-hidden">
      <div>
        {/* N A V I G A T I O N  */}
        <nav className="mt-8">
          <div className="container mx-auto max-w-screen-xl flex flex-row justify-between px-8 items-center">
            <img src={logo} alt="Discord Logo" />
            <ul className="space-x-10 flex text-sm font-semibold">
              <li>Download</li>
              <li>Nitro</li>
              <li>Safety</li>
              <li>Support</li>
              <li>Blog</li>
              <li>Careers</li>
            </ul>
            <Button className="text-sm">Login</Button>
          </div>
        </nav>

        {/* H E R O */}
        <div className="hero relative">
        <img className="bg-mountains absolute z-0 transform" src={mountainsSVG} alt="" />

          <div className="container relative mx-auto max-w-screen-xl px-24 py-32 justify-center overflow-x-hidden overflow-y-hidden rounded-full">
            <div className="conatiner relative z-10 mx-auto text-center flex flex-col space-y-12 w-3/4">
              <h1 className="font-bold uppercase text-7xl">
                Imagine a place...
              </h1>
              <p className="text-xl font-light leading-8">
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
        <div className="relative flex flex-col space-y-20 mb-10">
          <PanelSmall image={panelDiscordServer}>
            <h2 className="text-5xl font-bold">
              Create an invite-only place where you belong
            </h2>
            <p className="text-xl">
              Discord servers are organized into topic-based channels where you
              can collaborate, share, and just talk about your day without
              clogging up a group chat.
            </p>
          </PanelSmall>
          <PanelSmall image={panelDiscordVoice}>
            <h2 className="text-5xl font-bold">Where hanging out is easy</h2>
            <p className="text-xl">
              Grab a seat in a voice channel when you’re free. Friends in your
              server can see you’re around and instantly pop in to talk without
              having to call.
            </p>
          </PanelSmall>
          <PanelSmall image={panelDiscordVoicechat}>
            <h2 className="text-5xl font-bold">From few to a fandom</h2>
            <p className="text-xl">
              Get any community running with moderation tools and custom member
              access. Give members special powers, set up private channels, and
              more.
            </p>
          </PanelSmall>
        </div>

        {/* C A L L  T O  A C T I O N  */}
        <div className="">
          <div className="container max-w-screen-xl relative mx-auto flex flex-col  items-center space-y-8 p-24">
            <CtaDownload />
          </div>
        </div>

        {/* F O O T E R */}
      </div>
    </div>
  );
}

export default App;
