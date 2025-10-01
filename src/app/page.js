import Image from "next/image";
import profileImg from "@/images/2.png";
import msocImg from "@/images/MSOC.jpg";
import ImageGallery from "!@/components/ImageGallery";

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-white dark:bg-[#0a0a0a] text-[#171717] dark:text-[#ededed] font-sans">
      {/* Star Section */}
  <section className="relative h-screen w-full bg-cover bg-center" style={{backgroundImage: 'url("/images/background.png")'}}>
        <nav className="flex items-center justify-between pt-12 px-8 fixed w-full z-10">
          <h2 className="text-[35px] tracking-wide cursor-pointer text-[#b1ff99] hover:text-cadetblue transition">Shiina <span className="text-aqua hover:text-[#FF4A47] transition">Kochiya</span></h2>
          <div>
            <ul className="flex gap-4">
              <li><a href="#projects" className="text-[#FF4A47] font-bold capitalize hover:text-aquamarine transition">Projects</a></li>
              <li><a href="#contact" className="text-[#FF4A47] font-bold capitalize hover:text-aquamarine transition">Contact</a></li>
              <li><a href="#ext-projects" className="text-[#FF4A47] font-bold capitalize hover:text-aquamarine transition">External Projects</a></li>
              <li><a href="https://ca-25-shiinakochiyas-projects.vercel.app" className="text-[#FF4A47] font-bold capitalize hover:text-aquamarine transition">CA25</a></li>
            </ul>
          </div>
          <a href="https://github.com/ShiinaKochiya/sakura-page" className="bg-[#FF4A47] text-white font-bold py-2 px-6 rounded-full hover:bg-white hover:text-[#FF4A47] border-2 border-transparent transition" target="_blank" rel="noopener noreferrer">Source code</a>
        </nav>
        <div className="absolute top-1/2 left-[8%] -translate-y-1/2">
          <h4 className="text-white text-xl mb-2">Hello, my name is</h4>
          <h1 className="text-white text-5xl mb-4">Việt Hưng</h1>
          <h3 className="text-white text-2xl mb-8">&quot;Someday, our dreams will come true&quot;</h3>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="w-full py-24 bg-[#181818] flex justify-center">
        <div className="flex items-center justify-around w-full max-w-5xl mx-auto">
          <Image src={profileImg} alt="Profile" width={320} height={400} className="rounded-xl" />
          <div className="max-w-xl ml-8">
            <h2 className="text-white text-5xl mb-4">About me:</h2>
            <h5 className="text-white text-xl mb-4"><span>&quot;For we, are the Dreamchasers&quot;</span></h5>
            <p className="text-aliceblue text-lg mb-6">My name is Việt Hưng, also goes by the name Shiina Kochiya (シイナ • コチヤ), Paul Vincent and Sakura (my very old name)</p>
            <p className="text-aliceblue text-lg mb-6">Am a hobby-programmer, freelance cosplay photographer and artist. I do join projects here and there if it sparks my interest.</p>
            <p className="text-aliceblue text-lg mb-6">Co-leader of CA25, content creator of <a href="https://www.facebook.com/NoiKhongVoi0San" className="underline">&quot;Nói không với 0 Sanity&quot;</a> and <a href="https://www.facebook.com/profile.php?id=100088578633362" className="underline">&quot;Một cái trang sìn A, M và S&quot;</a>, also a member of <a href="https://github.com/arknights-vns" className="underline">Arknights Vietnam Station</a> organization and <a href="https://github.com/team-nameless" className="underline">team-nameless*/MSOC</a></p>
            <p className="text-aliceblue text-lg mb-6">I can use JavaScript/React/Node, Java, Lua, Python. On my way to learn C# and C++</p>
            <a href="/about" className="bg-[#FF4A47] text-white font-bold py-2 px-6 rounded-full shadow hover:bg-white hover:text-[#FF4A47] border-2 border-transparent transition">More about me</a>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-white w-full py-24">
        <div className="mb-8 text-center">
          <h2 className="text-black text-5xl mb-8">My coding projects</h2>
        </div>
        <div className="flex justify-center items-center min-h-[400px] gap-8">
          {/* Angelina-chan */}
          <div className="bg-[#D0D0D0] rounded-3xl p-8 w-[335px] h-[365px] text-center shadow-lg flex flex-col justify-between">
            <i className="fa-solid fa-bars text-[50px] text-[#FF4A47] mb-4"></i>
            <h5 className="text-[#33A2B1] text-xl mb-2">Discord bot: Angelina-chan</h5>
            <div>
              <p className="text-black text-base mb-4">An Arknights operator stats and fun Discord bot. Written in Node.js</p>
              <a className="bg-[#FF4A47] text-white font-bold py-2 px-6 rounded-full hover:bg-white hover:text-black border-2 border-[#FF4A47] transition" href="https://github.com/ShiinaKochiya/angelina-chan-sc" target="_blank" rel="noopener noreferrer">Read More</a>
            </div>
          </div>
          {/* BalaKnights */}
          <div className="bg-[#D0D0D0] rounded-3xl p-8 w-[335px] h-[365px] text-center shadow-lg flex flex-col justify-between">
            <i className="fa-solid fa-bars text-[50px] text-[#FF4A47] mb-4"></i>
            <h5 className="text-[#33A2B1] text-xl mb-2">Balatro mod: BalaKnights</h5>
            <div>
              <p className="text-black text-base mb-4">A simple Balatro mod, adding a few Jokers and Deck based on Arknights characters. Written in Lua</p>
              <a className="bg-[#FF4A47] text-white font-bold py-2 px-6 rounded-full hover:bg-white hover:text-black border-2 border-[#FF4A47] transition" href="https://github.com/ShiinaKochiya/BalaKnights" target="_blank" rel="noopener noreferrer">Read More</a>
            </div>
          </div>
        </div>
      </section>

      {/* Photography Section */}
      <section id="photography" className="w-full py-24 bg-[#181818]">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-center text-white text-4xl mb-8">My photography gallery</h1>
          <div className="flex gap-6 justify-center flex-wrap mb-10" id="gallery">
            <ImageGallery filepath="/images/album" count="18"/>
          </div>
          <a href="https://www.facebook.com/media/set/?set=a.1467500564223975&type=3" className="text-white text-center block">&gt; Full album here on my Facebook &lt;</a>
        </div>
      </section>

      {/* External Projects Section */}
      <section id="ext-projects" className="py-10 px-4">
        <div className="mb-8 text-center">
          <h2 className="text-black text-4xl mb-8">External projects I joined</h2>
        </div>
        <div className="flex gap-6 items-center justify-between max-w-5xl mx-auto">
          <div className="flex-1 min-w-[220px]">
            <h3 className="text-black text-lg mb-4">Arknights Vietnam Station (A9VNS) Offline event: The show must go on - Photographer</h3>
            <h3 className="text-black text-lg mb-4">MSOC (maimai Student Open Cup) - Front-end Developer, Photographer, Referee</h3>
            <h3 className="text-black text-lg mb-4">Project VNS: Dreamchasers - Tournament Consultant, Front-end Developer, MC, Minigame Designer, Photographer</h3>
            <h3 className="text-black text-lg mb-4">TUYUcord Server Cover - <a href="https://youtu.be/nn8197ta-1Y?si=sXZosK-DSv75HqHG" className="text-black underline">らべられっ子 / Compared Child</a></h3>
            <h3 className="text-black text-lg mb-4">Nguoi Anh Em™️ Mega-collab: <a href="https://youtu.be/ChiuKbz7oGk?si=fxoeN6Xun2cPBUYj" className="text-black underline">Get High</a> - Layout builder</h3>
          </div>
          <Image src={msocImg} alt="MSOC" width={600} height={400} className="rounded-xl max-w-[600px] w-[45vw] h-auto object-cover" />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full h-[290px] bg-[#151515] flex flex-col items-center justify-center">
        <p className="text-white text-2xl font-bold mb-6">Want to contact me?</p>
        <a className="bg-[#FF4A47] text-white font-bold py-2 px-6 rounded-full hover:bg-transparent hover:text-[#FF4A47] border-2 border-[#FF4A47] transition" href="mailto:caovanviethung1412@gmail.com">Send me an Email if you need anything</a>
      </section>

      {/* Footer */}
      <footer className="relative w-full py-8 bg-white dark:bg-[#0a0a0a]">
        <p className="mb-4">Connections:</p>
        <div className="flex gap-4 justify-center">
          <a href="https://www.facebook.com/ShiinaKochiya/" target="_blank" rel="noopener noreferrer" className="text-2xl"><i className="fa-brands fa-facebook"></i></a>
          <a href="https://x.com/ShiinaKochiya" target="_blank" rel="noopener noreferrer" className="text-2xl"><i className="fa-brands fa-twitter"></i></a>
          <a href="https://www.youtube.com/channel/UCrn9I5aDXQ5Azk_K0_9EqYg" target="_blank" rel="noopener noreferrer" className="text-2xl"><i className="fa-brands fa-youtube"></i></a>
          <a href="https://github.com/ShiinaKochiya" target="_blank" rel="noopener noreferrer" className="text-2xl"><i className="fa-brands fa-github"></i></a>
        </div>
      </footer>
    </main>
  );
}
