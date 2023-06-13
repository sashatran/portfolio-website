import Image from "next/image";
import styles from "./page.module.css";
import Script from "next/script";

export default function Home() {
  const projectData = [
    {
      title: "Link in Bio",
      subtitle: "Personal Project - React/NextJS",
      link: "https://link.sashatran.com/",
      img: "link-in-bio.png",
    },
    {
      title: "Why iPad",
      subtitle: "Apple",
      link: "https://www.apple.com/ipad-pro/why-ipad",
      img: "why-ipad.png",
    },
    {
      title: "iPad Mini",
      subtitle: "Apple",
      link: "https://www.apple.com/ipad-mini",
      img: "ipad-mini.png",
    },
    {
      title: "Color Tuesday",
      subtitle: "Instagram Project",
      link: "https://color-tuesday.netlify.com/",
      img: "colortuesday.png",
    },
    {
      title: "AC Turnip Profit Calculator",
      subtitle: "VueJS",
      link: "https://turnips.netlify.app/",
      img: "acnh.png",
    },
    {
      title: "Color Collections",
      subtitle: "CSS Flexbox",
      link: "https://gardener-isabel-68100.netlify.com/",
      img: "demo-7.jpg",
    },
    {
      title: "Responsive Images Demo",
      subtitle: "CSS Flexbox",
      link: "https://washer-canary-25517.netlify.com",
      img: "demo-1.jpg",
    },

    {
      title: "Restaurant Menu",
      subtitle: "Responsive + Flexbox",
      link: "https://retailer-melody-45614.netlify.com/",
      img: "demo-4.jpg",
    },
    {
      title: "Portfolio Template",
      subtitle: "Responsive + Flexbox",
      link: "https://critic-doreen-35081.netlify.com/",
      img: "demo-5.jpg",
    },
    {
      title: "Digital Agency Template",
      subtitle: "CSS Grid",
      link: "https://promoter-hilltop-44634.netlify.com/",
      img: "demo-6.jpg",
    },
    {
      title: " CSS BandAid",
      subtitle: "CSS Daily Image",
      link: "https://codepen.io/sashatran/full/OWvNKv",
      img: "css-1.jpg",
    },

    {
      title: " CSS Bear",
      subtitle: "CSS Daily Image",
      link: "https://codepen.io/sashatran/full/BpoLeE",
      img: "css-2.jpg",
    },
    {
      title: " CSS Elephant",
      subtitle: "CSS Daily Image",
      link: "https://codepen.io/sashatran/full/JEGJyz",
      img: "css-4.jpg",
    },
    {
      title: " CSS Cheesecake",
      subtitle: "CSS Daily Image",
      link: "https://www.youtube.com/watch?v=qdBzYCC6E4M",
      img: "css-3.jpg",
    },
  ];

  const codepenData = [
    {
      title: "Card Prototype",
      subtitle: "VueJS - Codepen",
      link: "https://codepen.io/sashatran/pen/YzyqQdz",
      slug: "YzyqQdz",
    },
    {
      title: "Message Prototype",
      subtitle: "VueJS, HammerJS - Codepen",
      link: "https://codepen.io/sashatran/pen/VwvyjrG",
      slug: "VwvyjrG",
    },
    {
      title: "Form",
      subtitle: "VueJS Component - Codepen",
      link: "https://codepen.io/sashatran/pen/dyYPzZK",
      slug: "dyYPzZK",
    },
    {
      title: "Pricing Slider",
      subtitle: "VueJS Component - Codepen",
      link: "https://codepen.io/sashatran/pen/XWXXyxm",
      slug: "XWXXyxm",
    },
    {
      title: "CSS Tooltip",
      subtitle: "Codepen",
      link: "https://codepen.io/sashatran/pen/KaYYBz",
      slug: "KaYYBz",
    },
    {
      title: "CSS Tooltip",
      subtitle: "Codepen",
      link: "https://codepen.io/sashatran/pen/KaYYBz",
      slug: "KaYYBz",
    },
    {
      title: "Search UI",
      subtitle: "Codepen",
      link: "https://codepen.io/sashatran/pen/XMbGGR",
      slug: "XMbGGR",
    },
    {
      title: "Hover / Click Effect",
      subtitle: "Codepen",
      link: "https://codepen.io/sashatran/pen/bqpqJN",
      slug: "bqpqJN",
    },
    {
      title: "  Pulsing Button",
      subtitle: "Codepen",
      link: "https://codepen.io/sashatran/pen/oBVJGP",
      slug: "oBVJGP",
    },
  ];
  return (
    <main className={styles.main}>
      <div className="about">
        <h1 className={styles.title}>
          Hi. I'm <span className="special">Sasha Tran.</span>
        </h1>
        <p className={styles.subtitle}>
          If you're wondering if I'm the character from the Netflix movie
          'Always Be My Maybe', I'm not. I'm a real person with the name Sasha
          Tran. I'm a Web Developer, UI/UX Engineer. I build websites for a tech
          company in Silicon Valley. You can find my work on{" "}
          <a href="http://codepen.io/sashatran/" target="_blank">
            Codepen
          </a>{" "}
          and{" "}
          <a href="https://github.com/sashatran" target="_blank">
            Github
          </a>
          . I also love photography and digital art, so you'll find me posting
          on tech photography on
          <a href="https://instagram.com/sasha.codes" target="_blank">
            {" "}
            Instagram
          </a>{" "}
          and{" "}
          <a href="https://dribbble.com/sashatran" target="_blank">
            {" "}
            Dribbble
          </a>{" "}
          occasionally. If you would like to work with me,{" "}
          <a href="mailto:me@sashatran.com"> drop me an email</a>.
        </p>
      </div>
      <div className="projects">
        <h1 className={styles.title}>Projects that I've worked on</h1>
        <div className={styles.galleryGrid}>
          {projectData.map((project) => {
            return (
              <div className="gallery-wrap">
                <div className="gallery-item">
                  <a href={project.link} target="_blank">
                    <img
                      className={styles.galleryImage}
                      src={`/images/${project.img}`}
                      alt={project.title}
                    />
                  </a>
                  <p
                    className={styles.galleryTitle}
                    href="https://link.sashatran.com/"
                    target="_blank"
                  >
                    {project.title}
                  </p>
                  <p className={styles.gallerySubtitle}>{project.subtitle}</p>
                </div>
              </div>
            );
          })}

          {codepenData.map((pen) => {
            return (
              <div className="gallery-wrap">
                <div className={styles.codepen}>
                  <p
                    data-height="300"
                    data-theme-id="37508"
                    data-slug-hash={pen.slug}
                    data-default-tab="result"
                    data-user="sashatran"
                    className="codepen"
                  ></p>
                </div>
                <p className={styles.galleryTitle}>{pen.title}</p>
                <p className={styles.gallerySubtitle}>{pen.subtitle}</p>
              </div>
            );
          })}
          <Script src="https://cpwebassets.codepen.io/assets/embed/ei.js" />
        </div>
      </div>
      <div className={styles.socialContainer}>
        <div className={styles.social}>
          <h2 className={styles.title}>Other works</h2>
          <ul className={styles.socialList}>
            <li className="other-works-item">
              <p>Read my article on Medium</p>
              <a
                href="https://blog.prototypr.io/how-i-started-drawing-css-images-3fd878675c89"
                target="_blank"
              >
                How I started Drawing CSS Images
              </a>
            </li>
          </ul>
        </div>

        <div className={styles.social}>
          <h1 className={styles.title}>Social Media</h1>
          <ul className={styles.socialList}>
            <li>
              <a
                className="social-media-link"
                href="http://codepen.io/sashatran/"
                target="_blank"
              >
                <i className="fa fa-codepen"></i> Codepen
              </a>
            </li>
            <li>
              <a
                className="social-media-link"
                href="https://twitter.com/sashattran"
                target="_blank"
                title="Sasha Tran Twitter"
              >
                <i className="fa fa-twitter"></i> Twitter
              </a>
            </li>
            <li>
              <a
                className="social-media-link"
                href="https://github.com/sashatran"
                target="_blank"
                title="Sasha Tran Github"
              >
                <i className="fa fa-github"></i> Github
              </a>
            </li>
            <li>
              <a
                className="social-media-link"
                href="https://medium.com/@sashatran"
                target="_blank"
              >
                <i className="fa fa-medium"></i> Medium
              </a>
            </li>
            <li>
              <a
                className="social-media-link"
                href="https://dribbble.com/sashatran"
                target="_blank"
              >
                <i className="fa fa-dribbble"></i> Dribbble
              </a>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
