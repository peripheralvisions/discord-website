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
      <h1 className="text-4xl  font-bold mb-4">Ready to start your journey?</h1>
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

const Footer = () => {
  const FooterElemet = ({ title, children }) => {
    return (
      <div>
        <ul className="flex flex-col space-y-2">
          <li className="text-lg font-semibold text-blue-400">{title}</li>
          {children}
        </ul>
      </div>
    );
  };

  return (
    <div className="footer max-w-screen-lg mx-auto">
      <div className="flex flex-row container justify-between py-24">
        <div className="flex flex-col w-1/3 space-y-8">
          <span className="text-4xl uppercase font-black text-blue-400">
            Imagine a <br /> place
          </span>
          <div class="flex flex-row items-center">
            <img
              className="mr-2"
              src="https://flagicons.lipis.dev/flags/4x3/um.svg"
              width={24}
              alt=""
              srcset=""
            />
            <span>English, USA </span>
            </div>

            {/* S O C I A L S */}
            <div className="flex flex-row space-x-4 text-2xl">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 16 16"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"></path>
              </svg>

              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 1024 1024"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M512 306.9c-113.5 0-205.1 91.6-205.1 205.1S398.5 717.1 512 717.1 717.1 625.5 717.1 512 625.5 306.9 512 306.9zm0 338.4c-73.4 0-133.3-59.9-133.3-133.3S438.6 378.7 512 378.7 645.3 438.6 645.3 512 585.4 645.3 512 645.3zm213.5-394.6c-26.5 0-47.9 21.4-47.9 47.9s21.4 47.9 47.9 47.9 47.9-21.3 47.9-47.9a47.84 47.84 0 0 0-47.9-47.9zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zm-88 235.8c-7.3 18.2-16.1 31.8-30.2 45.8-14.1 14.1-27.6 22.9-45.8 30.2C695.2 844.7 570.3 840 512 840c-58.3 0-183.3 4.7-235.9-16.1-18.2-7.3-31.8-16.1-45.8-30.2-14.1-14.1-22.9-27.6-30.2-45.8C179.3 695.2 184 570.3 184 512c0-58.3-4.7-183.3 16.1-235.9 7.3-18.2 16.1-31.8 30.2-45.8s27.6-22.9 45.8-30.2C328.7 179.3 453.7 184 512 184s183.3-4.7 235.9 16.1c18.2 7.3 31.8 16.1 45.8 30.2 14.1 14.1 22.9 27.6 30.2 45.8C844.7 328.7 840 453.7 840 512c0 58.3 4.7 183.2-16.2 235.8z"></path>
              </svg>

              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 16 16"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"></path>
              </svg>

              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 320 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
              </svg>
            </div>
        </div>

        <div className="flex flex-row flex-1 justify-between">
          <FooterElemet title="Product">
            <li>Download</li>
            <li>Nitro</li>
            <li>Status</li>
          </FooterElemet>

          <FooterElemet title="Company">
            <li>About</li>
            <li>Jobs</li>
            <li>Branding</li>
          </FooterElemet>

          <FooterElemet title="Resources">
            <li>College</li>
            <li>Support</li>
            <li>Safety</li>
            <li>Blog</li>
            <li>Feedback</li>
            <li>Developers</li>
            <li>StreamKit</li>
          </FooterElemet>

          <FooterElemet title="Policies">
            <li>Terms</li>
            <li>Privacy</li>
            <li>Cookie Settings</li>
            <li>Guidelines</li>
            <li>Acknowledgements</li>
            <li>Licenses</li>
            <li>Moderation</li>
          </FooterElemet>
        </div>
      </div>
      <hr />

      <div className="flex my-8 justify-between items-center">
        <img src={logo} alt="" srcset="" />
        <Button className="text-sm">Sign Up</Button>
      </div>
    </div>
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
            <Button className="text-xs">Login</Button>
          </div>
        </nav>

        {/* H E R O */}
        <div className="hero my-8 relative">
          <img
            className="bg-mountains bottom-0 absolute z-0 transform opacity-40"
            src={mountainsSVG}
            alt=""
          />

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
          <div className="container max-w-screen-xl relative mx-auto flex flex-col items-center space-y-8 p-16">
            <CtaDownload />
          </div>
        </div>

        {/* F O O T E R */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
