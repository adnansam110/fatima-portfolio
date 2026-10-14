"use client";

import { useEffect } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Check,
  Facebook,
  Instagram,
  Linkedin,
  Link2,
  Mail,
  Megaphone,
  MousePointer2,
  Search,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";

const instagramUrl = "https://www.instagram.com/fatimas.diaries__/";
const linkedinUrl =
  "https://www.linkedin.com/in/fatima-abid-meta-ads-specialist-digital-marketer/";

const services = [
  {
    icon: Megaphone,
    title: "Meta Ads",
    description:
      "Plan and manage Facebook and Instagram ad campaigns with audience targeting, creative testing, and performance monitoring.",
    tags: ["Campaign setup", "Audience targeting", "Optimization"],
  },
  {
    icon: Search,
    title: "Google Ads",
    description:
      "Reach people actively searching for products or services through structured, goal-focused search advertising.",
    tags: ["Search campaigns", "Keyword planning", "Ad copy"],
  },
  {
    icon: Instagram,
    title: "Social Media Management",
    description:
      "Keep Instagram and Facebook aligned with your brand through consistent publishing, profile optimization, and content planning.",
    tags: ["Content calendar", "Brand consistency", "Engagement"],
  },
  {
    icon: Link2,
    title: "Instagram & Facebook Integration",
    description:
      "Connect social accounts and business assets to support smoother publishing, advertising, and account management.",
    tags: ["Meta Business Suite", "Account connection"],
  },
  {
    icon: MousePointer2,
    title: "Creative & Content Planning",
    description:
      "Shape clear campaign messages and content ideas that support your brand’s goals and speak to its audience.",
    tags: ["Content ideas", "Creative direction"],
  },
  {
    icon: BarChart3,
    title: "Performance Insights",
    description:
      "Review campaign signals and social insights to understand what is working and where to improve next.",
    tags: ["Reporting", "Insights", "Iteration"],
  },
];

const projects = [
  {
    title: "Paid Social Campaigns",
    description:
      "Meta Ads planning, campaign structure, audience selection, and ongoing optimization.",
    label: "META ADS",
    className: "projectArtBlue",
    bars: [35, 55, 44, 76, 92],
    href: instagramUrl,
    linkText: "View Instagram",
  },
  {
    title: "Google Ads",
    description:
      "Search-focused advertising designed to connect relevant intent with a clear next step.",
    label: "SEARCH VISIBILITY",
    className: "projectArtGreen",
    bars: [50, 32, 67, 84, 95],
    href: "mailto:fatima.abid.pro@gmail.com?subject=Google%20Ads%20portfolio",
    linkText: "Ask about this work",
  },
  {
    title: "Instagram & Facebook",
    description:
      "Connected accounts, consistent brand presentation, and content planning across platforms.",
    label: "SOCIAL CONTENT",
    className: "projectArtPeach",
    bars: [42, 70, 56, 89, 74],
    href: instagramUrl,
    linkText: "See profile",
  },
];

const process = [
  {
    number: "01 / DISCOVER",
    title: "Understand",
    description:
      "Clarify the audience, offer, business goal, and success measures.",
  },
  {
    number: "02 / PLAN",
    title: "Build a strategy",
    description:
      "Choose platforms, campaign structure, content direction, and tracking.",
  },
  {
    number: "03 / LAUNCH",
    title: "Execute & test",
    description:
      "Launch thoughtfully, monitor delivery, and test relevant variations.",
  },
  {
    number: "04 / IMPROVE",
    title: "Learn & optimize",
    description: "Review results and use findings to guide the next iteration.",
  },
];

export default function Home() {
  useEffect(() => {
    const items = document.querySelectorAll<HTMLElement>(
      ".reveal, .serviceCard, .projectCard, .processStep",
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("isVisible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <nav className="nav">
        <div className="container navInner">
          <a className="brand" href="#home" aria-label="Fatima home">
            Fatima<span>.</span>
          </a>
          <div className="navLinks">
            <a href="#services">Services</a>
            <a href="#work">Portfolio</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
          <a className="button buttonDark navCta" href="#contact">
            Let’s talk <ArrowUpRight size={16} />
          </a>
        </div>
      </nav>

      <main id="home">
        <section className="hero section">
          <div className="heroBlob heroBlobOne" />
          <div className="heroBlob heroBlobTwo" />
          <div className="container heroGrid">
            <div className="heroCopy reveal">
              <div className="eyebrow">
                <span className="statusDot" /> Digital Marketing & Social Media
              </div>
              <h1>
                Make your brand
                <br />
                <span className="gradientText">impossible to ignore.</span>
              </h1>
              <p className="lead">
                I help businesses connect with the right audience through paid
                campaigns, thoughtful social strategy, and a consistent presence
                across Instagram and Facebook.
              </p>
              <div className="heroActions">
                <a className="button buttonDark" href="#work">
                  Explore my work <ArrowUpRight size={17} />
                </a>
                <a
                  className="button buttonLight"
                  href={instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Instagram size={17} /> Instagram profile
                </a>
                <a
                  className="button buttonLight"
                  href={linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Linkedin size={17} /> LinkedIn profile
                </a>
              </div>
              <div className="heroStats">
                <div>
                  <strong>Meta Ads</strong>
                  <span>Reach the right audience</span>
                </div>
                <div>
                  <strong>Google Ads</strong>
                  <span>Capture search intent</span>
                </div>
                <div>
                  <strong>Social Media</strong>
                  <span>Build a connected brand</span>
                </div>
              </div>
            </div>

            <div className="heroVisual reveal">
              <div className="visualGlow" />
              <img
                width="100"
                height="100"
                className="profilePhoto"
                src="/fatima-abid.jpeg"
                alt="Fatima Abid"
              />
              <div className="visualCopy">
                <span className="smallLabel">YOUR DIGITAL GROWTH PARTNER</span>
                <h2>Fatima Abid</h2>
                <p>Digital Marketing & Social Media Manager</p>
                <div className="platformPills">
                  <span>Meta Ads</span>
                  <span>Google Ads</span>
                  <span>Instagram</span>
                  <span>Facebook</span>
                </div>
              </div>
              <div className="floatingNote">
                <span className="noteIcon">
                  <TrendingUp size={17} />
                </span>
                <span>Campaigns with purpose</span>
                <ArrowUpRight size={17} className="noteArrow" />
              </div>
              <div className="decorCircle" />
            </div>
          </div>
          <a className="scrollCue" href="#services">
            Scroll to explore <ArrowDownRight size={16} />
          </a>
        </section>

        <section className="section" id="services">
          <div className="container">
            <div className="sectionHeading reveal">
              <div>
                <span className="kicker">WHAT I DO</span>
                <h2>
                  Marketing that moves
                  <br />
                  your business forward.
                </h2>
              </div>
              <p>
                From campaign setup to connected social channels, the focus is
                on clear goals, consistent execution, and learning from
                performance.
              </p>
            </div>
            <div className="servicesGrid">
              {services.map(({ icon: Icon, title, description, tags }) => (
                <article className="serviceCard" key={title}>
                  <div className="serviceIcon">
                    <Icon size={22} strokeWidth={1.8} />
                  </div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <div className="tagList">
                    {tags.map((tag) => (
                      <span className="tag" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section portfolioSection" id="work">
          <div className="container">
            <div className="sectionHeading reveal">
              <div>
                <span className="kicker">SELECTED WORK</span>
                <h2>A look at my marketing toolkit.</h2>
              </div>
              <p>
                Explore the portfolio themes below, then visit Instagram for
                published content and updates.
              </p>
            </div>
            <div className="projectsGrid">
              {projects.map((project) => (
                <article className="projectCard" key={project.title}>
                  <div className={`projectArt ${project.className}`}>
                    <div className="mockWindow">
                      <div className="mockWindowTop">
                        <span className="mockDots">
                          <i />
                          <i />
                          <i />
                        </span>
                        <span>{project.label}</span>
                      </div>
                      <div className="chartBars">
                        {project.bars.map((height, index) => (
                          <i key={index} style={{ height: `${height}%` }} />
                        ))}
                      </div>
                      <div className="mockFooter">
                        <span>Campaign insights</span>
                        <TrendingUp size={15} />
                      </div>
                    </div>
                  </div>
                  <div className="projectBody">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <a
                      className="textLink"
                      href={project.href}
                      target={
                        project.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        project.href.startsWith("http")
                          ? "noreferrer"
                          : undefined
                      }
                    >
                      {project.linkText} <ArrowUpRight size={15} />
                    </a>
                  </div>
                </article>
              ))}
            </div>
            <p className="portfolioNote">
              Portfolio note: these cards describe service areas, not verified
              client case studies. Add campaign screenshots and real results
              when ready.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="sectionHeading reveal">
              <div>
                <span className="kicker">MY APPROACH</span>
                <h2>Clear process. Better decisions.</h2>
              </div>
              <p>
                Strong marketing starts with understanding the goal and improves
                through consistent testing and review.
              </p>
            </div>
            <div className="processGrid">
              {process.map((step) => (
                <article className="processStep" key={step.number}>
                  <span>{step.number}</span>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="about">
          <div className="container aboutGrid">
            <div className="aboutPanel reveal">
              <span className="kicker">A LITTLE ABOUT ME</span>
              <h2>Digital presence with purpose.</h2>
              <p>
                I bring together paid advertising and social media management to
                help brands show up clearly and consistently online.
              </p>
              <a
                className="button buttonLight"
                href={instagramUrl}
                target="_blank"
                rel="noreferrer"
              >
                Follow on Instagram <ArrowUpRight size={16} />
              </a>
              <a
                className="button buttonLight"
                href={linkedinUrl}
                target="_blank"
                rel="noreferrer"
              >
                Connect on LinkedIn <Linkedin size={16} />
              </a>
              <div className="aboutDecor">
                <Instagram size={42} />
              </div>
            </div>
            <div className="aboutCopy reveal">
              <span className="kicker">MY FOCUS</span>
              <h2>
                The right message, on the right platform, for the right
                audience.
              </h2>
              <p>
                My work is centered on connecting Meta Ads, Google Ads,
                Instagram, and Facebook into a more coordinated digital
                marketing presence. I value clear communication, thoughtful
                creative, and decisions guided by performance data.
              </p>
              <ul className="checkList">
                {[
                  "Meta Ads campaigns",
                  "Google Ads",
                  "Instagram growth",
                  "Facebook management",
                  "Account integration",
                  "Campaign reporting",
                ].map((item) => (
                  <li key={item}>
                    <Check size={16} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="section contactSection" id="contact">
          <div className="container">
            <div className="contactPanel reveal">
              <div>
                <span className="kicker kickerLight">LET’S WORK TOGETHER</span>
                <h2>Have a brand to grow?</h2>
                <p>
                  Tell me what you’re working toward and let’s explore how paid
                  ads and social media can support your goals.
                </p>
                <a
                  className="contactEmail"
                  href="mailto:fatima.abid.pro@gmail.com"
                >
                  <Mail size={17} /> fatima.abid.pro@gmail.com
                </a>
              </div>
              <div className="contactActions">
                <a
                  className="button buttonWhite"
                  href="mailto:fatima.abid.pro@gmail.com?subject=Digital%20Marketing%20Inquiry"
                >
                  Email me <ArrowUpRight size={17} />
                </a>
                <a
                  className="button buttonOutline"
                  href={instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram <Instagram size={17} />
                </a>
                <a
                  className="button buttonOutline"
                  href={linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn <Linkedin size={17} />
                </a>
                <a
                  className="button buttonOutline"
                  href="/Fatima_Abid_ATS_Resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  Resume PDF <ArrowUpRight size={17} />
                </a>
              </div>
              <div className="contactOrb" />
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footerInner">
          <a className="brand" href="#home">
            Fatima<span>.</span>
          </a>
          <p>© {new Date().getFullYear()} Fatima Abid · Digital Marketing</p>
          <div className="footerLinks">
            <a
              href={instagramUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              <Facebook size={18} />
            </a>
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a href="mailto:fatima.abid.pro@gmail.com" aria-label="Email">
              <Mail size={18} />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
