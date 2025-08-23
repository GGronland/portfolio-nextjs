import Image from "next/image";
import ProfilePicture from "@/assets/profilePicture.jpg";

const AboutPage = () => {
  return (
    <div className="flex h-max flex-col lg:flex-row justify-between gap-12 lg:gap-26 px-8 animate-fade-in-slow">
      <div className="text-gray-300">
        <h1 className="mb-4">A little bit about me...</h1>

        <p>
          Hi there. I'm Glen Gronland, a software engineer with a particular
          interest in web development (frontend-focused, currently). I have an
          extensive background in STEM, including an MSci in biochemistry and a
          PhD in structural and molecular biology.
        </p>

        <p>
          <i>Why the change into coding? Fair question.</i>
        </p>

        <p>
          Back in the summer of 2013, I took part in a short project ran by an
          undergraduate lecturer where a small team of students with no prior
          coding experience built a website for creating and practicing
          maths-based biochemistry exam questions, using a mix of HTML,
          JavaScript, JQuery, PHP and MySQL.
        </p>

        <p>
          Ultimately, I found that I especially enjoyed the detailed and
          immediate visual feedback of compiled code (and the inevitable errors)
          compared to the lengthy downtime during experiments in research labs.
          In 2022, after much reflection, I took the leap and landed a frontend
          developer role, and have been thriving since!
        </p>

        <p>
          Now, I leverage my passion for detail to build fluid user interfaces
          and aptitude for learning to pick up and utilise new technologies.
          With experience across the full SDLC lifecycle and deploying
          large-scale features to production, I think of the bigger picture -
          beyond just the assigned ticket.
        </p>

        <p>
          I'm keen to showcase, hone and expand my skillset through work,
          self-study and personal projects. Where possible, I'm delving into the
          backend to round out my knowledge and am gearing up to try my hand at
          app development in the near future - watch this space!
        </p>
      </div>

      <div className="relative m-auto max-w-[300px] rotate-6 rounded-xl hover:rotate-0 transition-all duration-500">
        <Image
          className="box-border border-5 rounded-xl border-slate-700 bg-slate-700 drop-shadow-lg "
          src={ProfilePicture}
          alt="Profile picture"
        />

        {/* For potential "stack" effect - needs container for relative positioning */}
        {/* <div className="absolute -z-1 top-0 w-full h-full -rotate-6 box-border border-4 rounded-xl border-slate-700 bg-amber-200" /> */}
      </div>
    </div>
  );
};

export default AboutPage;
