import heroImg from "./assets/images/hero_img.svg";
import github from "./assets/images/github.svg";
import linkedin from "./assets/images/linkedin.svg";
import githubDark from "./assets/images/githubDark.svg";
import linkedinDark from "./assets/images/linkedinDark.svg";

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
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia.\n\nMinima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam!",
    },
    projectsSection: {
      title: "Projects",
      projects: [
        {
          name: "Workintech",
          image: "project-1.jpg", //TODO
          description:
            "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
          tags: ["react", "redux", "axios"],
        },
        {
          name: "Random Jokes",
          image: "project-2.jpg", //TODO
          description:
            "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
          tags: ["react", "redux", "axios"],
        },
        {
          name: "Journey",
          image: "project-3.jpg", //TODO
          description:
            "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
          tags: ["react", "redux", "axios"],
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
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia.\n\nMinima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam!",
    },
    projectsSection: {
      title: "Projeler",
      projects: [
        {
          name: "Workintech",
          image: "project-1.jpg", //TODO
          description:
            "Kullanıcıların hangi çerezleri kabul edip reddedeceğini seçmesine izin veren basit, özelleştirilebilir, minimal kurulumlu bir çerez eklentisi. Vanilla JS, SCSS ve Parcel Bundler ile oluşturulmuştur ve bir NPM paketi olarak mevcuttur, ayrıca git deposu kod ve tema üzerinde her türlü özelleştirmeyi mümkün kılar.",
          tags: ["react", "redux", "axios"],
        },
        {
          name: "Random Jokes",
          image: "project-2.jpg", //TODO
          description:
            "Kullanıcıların hangi çerezleri kabul edip reddedeceğini seçmesine izin veren basit, özelleştirilebilir, minimal kurulumlu bir çerez eklentisi. Vanilla JS, SCSS ve Parcel Bundler ile oluşturulmuştur ve bir NPM paketi olarak mevcuttur, ayrıca git deposu kod ve tema üzerinde her türlü özelleştirmeyi mümkün kılar.",
          tags: ["react", "redux", "axios"],
        },
        {
          name: "Journey",
          image: "project-3.jpg", //TODO
          description:
            "Kullanıcıların hangi çerezleri kabul edip reddedeceğini seçmesine izin veren basit, özelleştirilebilir, minimal kurulumlu bir çerez eklentisi. Vanilla JS, SCSS ve Parcel Bundler ile oluşturulmuştur ve bir NPM paketi olarak mevcuttur, ayrıca git deposu kod ve tema üzerinde her türlü özelleştirmeyi mümkün kılar.",
          tags: ["react", "redux", "axios"],
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
