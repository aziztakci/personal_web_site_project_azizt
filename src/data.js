import heroImg from "./assets/images/hero_img.svg";
import github from "./assets/images/github.svg";
import linkedin from "./assets/images/linkedin.svg";
import githubDark from "./assets/images/githubDark.svg";
import linkedinDark from "./assets/images/linkedinDark.svg";
import project1 from "./assets/images/project1.svg";
import project2 from "./assets/images/project2.svg";
import project3 from "./assets/images/project3.svg";


export const data = {
  en: {
    heroSection: {
      name: "Almila Su",
      greeting: "Creative thinker",
      intro: "Minimalism lover",
      profileImage: heroImg,
      socials: [
        { name: "Github", img: github, imgDark: githubDark },
        { name: "LinkedIn", img: linkedin, imgDark: linkedinDark }
      ],
      ctaHTML:
        "Hi, I'm Almila. I'm a full-stack developer. If you are looking for a Developer who to craft solid and scalable frontend products with great user experiences. Let's shake hands with me.",
    },
    skillsSection: {
      title: "Skills",
      skills: [
        { name: "Java Script", description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
        { name: "React.Js", description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
        { name: "Node.Js", description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },

      ],
    },
    profileSection: {
      title: "Profile",
      profile: [
        { label: "Doğum tarihi", value: "24.03.1996" },
        { label: "İkamet Şehri", value: "Ankara" },
        {
          label: "Eğitim Durumu",
          value: "Hacettepe Ünv. Biyoloji, Lisans, 2016",
        },
        { label: "Tercih Ettiği Rol", value: "Frontend, UI" },
      ],
      aboutTitle: "About Me",
      aboutText:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia.\n\nMnima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam!",
    },
    projectsSection: {
      title: "Projects",
      projects: [
        {
          name: "Workintech",
          image: project1,
          description:
            "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
          tags: ["react", "redux", "axios"],
          links: ["Github", "View Site"],
        },
        {
          name: "Random Jokes",
          image: project2,
          description:
            "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
          tags: ["react", "redux", "axios"],
          links: ["Github", "View Site"],
        },
        {
          name: "Journey",
          image: project3,
          description:
            "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
          tags: ["react", "redux", "axios"],
          links: ["Github", "View Site"],
        },
      ],
    },
    footerSection: {
      title: "Let's work together on your next product.",
      email: "almilasuccode@gmail.com",
      links: [
        { name: "Personal Blog" },
        { name: "Github" },
        { name: "Linkedin" },
      ],
    },
  },

  tr: {
    heroSection: {
      name: "Almila Su",
      greeting: "Yaratıcı düşünür",
      intro: "Minimalizm aşığı",
      profileImage: heroImg,
      socials: [
        { name: "Github", img: github, imgDark: githubDark },
        { name: "LinkedIn", img: linkedin, imgDark: linkedinDark }
      ],
      ctaHTML:
        "Merhaba, ben Almila. Ben bir full-stack geliştiriciyim. Harika kullanıcı deneyimleri ile sağlam ve ölçeklenebilir frontend ürünleri geliştiren bir geliştirici arıyorsanız. Benimle el sıkışalım.",
    },
    skillsSection: {
      title: "Yetenekler",
      skills: [
        { name: "Java Script", description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
        { name: "React.Js", description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
        { name: "Node.Js", description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
      ],
    },
    profileSection: {
      title: "Profil",
      profile: [
        { label: "Doğum tarihi", value: "24.03.1996" },
        { label: "İkamet Şehri", value: "Ankara" },
        {
          label: "Eğitim Durumu",
          value: "Hacettepe Ünv. Biyoloji, Lisans, 2016",
        },
        { label: "Tercih Ettiği Rol", value: "Frontend, UI" },
      ],
      aboutTitle: "Hakkımda",
      aboutText:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia.\n\nMnima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam!",
    },
    projectsSection: {
      title: "Projeler",
      projects: [
        {
          name: "Workintech",
          image: project1,
          description:
            "Kullanıcılarınızın hangi çerezleri kabul edip hangilerini reddedeceğini seçmesine olanak tanıyan; basit, özelleştirilebilir ve minimal kuruluma sahip bir çerez eklentisidir. Vanilla JS, SCSS ve Parcel Bundler ile geliştirilen bu proje, hem bir NPM paketi olarak sunulmakta hem de Git deposu üzerinden kod ve tema üzerinde her türlü özelleştirmeye imkan tanımaktadır.",
          tags: ["react", "redux", "axios"],
          links: ["Github", "Siteye Git"],
        },
        {
          name: "Random Jokes",
          image: project2,
          description:
            "Kullanıcılarınızın hangi çerezleri kabul edip hangilerini reddedeceğini seçmesine olanak tanıyan; basit, özelleştirilebilir ve minimal kuruluma sahip bir çerez eklentisidir. Vanilla JS, SCSS ve Parcel Bundler ile geliştirilen bu proje, hem bir NPM paketi olarak sunulmakta hem de Git deposu üzerinden kod ve tema üzerinde her türlü özelleştirmeye imkan tanımaktadır.",
          tags: ["react", "redux", "axios"],
          links: ["Github", "Siteye Git"],
        },
        {
          name: "Journey",
          image: project3,
          description:
            "Kullanıcılarınızın hangi çerezleri kabul edip hangilerini reddedeceğini seçmesine olanak tanıyan; basit, özelleştirilebilir ve minimal kuruluma sahip bir çerez eklentisidir. Vanilla JS, SCSS ve Parcel Bundler ile geliştirilen bu proje, hem bir NPM paketi olarak sunulmakta hem de Git deposu üzerinden kod ve tema üzerinde her türlü özelleştirmeye imkan tanımaktadır.",
          tags: ["react", "redux", "axios"],
          links: ["Github", "Siteye Git"],
        },
      ],
    },
    footerSection: {
      title: "Bir sonraki ürününüz üzerinde birlikte çalışalım.",
      email: "almilasuccode@gmail.com",
      links: [
        { name: "Kişisel Blog" },
        { name: "Github" },
        { name: "Linkedin" },
      ],
    },
  },
};
