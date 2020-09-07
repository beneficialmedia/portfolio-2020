module.exports = {
  siteMetadata: {
    title: `Dylan Kilgore`,
  },
  plugins: [
    {
      resolve: `@christiandavid/gatsby-theme-byfolio`,
      options: {
        basePath: ``,
        path: `src/`,
        imagesPath: `src/images/`,
        iconFile: `src/images/icon.png`,
        siteTitle: `Dylan Kilgore`,
        siteUrl: `https://www.beneficialmedia.com`,
        siteName: `Dylan Kilgore`,
        siteShortName: `DK`,
        siteDescription: `This site contains information about my work experience as a designer and software engineer.`,
        siteKeywords: `Software Developer, Full Stack Developer, Front-end Developer, Product Designer, User Experience Designer, Interaction Designer`,
        useMozJpeg: true,
        menuLinks: [
          // title = Link text
          // color = Animation background color on click
          {
            name: `home`,
            title: `Home`,
            color: `#000`,
            link: `` }
            ,
          {
            name: `experience`,
            title: `Experience`,
            color: `#3a3d98`,
            link: ``,
          },
          {
            name: `skills`,
            title: `Skills`,
            color: `#d52d43`,
            link: ``
          },
          {
            name: `aboutMe`,
            title: `About me`,
            color: `#fff`,
            link: ``
          },
          {
            name: `blog`,
            title: `Blog`,
            color: `#fff`,
            link: `https://beneficialmedia.wordpress.com/`
          }
        ],
        email: `dylan@beneficialmedia.com`,
        social: {
          // Usernames
          twitter: `@beneficialmedia`,
          gitHub: `beneficialmedia`,
          stackOverflow: `1279090/dylan`,
          linkedIn: `in/beneficialmedia/`,
          resumeInPdf: `/Dylan_Kilgore_Resume.pdf`, // url or local link
        },
        homePage: {
          availableToHire: false,
          dotColors: ["#0e3e1e", "#6CC551"],
          h1Text: `Hi! My name is Dylan Kilgore.`,
          h2Text: `I'm a full stack developer who works on frontend code and have
              worked as a UX designer and/or software engineer since 2008.`,
          typewriter: [
            `I'm passionate about coding and design 🙋‍♂️`,
            `I eat 🍕 and 🍔`,
            `I'm a fast learner and interested in new technologies 💁‍♂️`,
            `One of my defining traits is the <strong>ability to solve problems<strong> 👨‍🎓`,
            `I like to share what I know 🦉`,
            `During non-coding hours, I'm watching Star Wars. 🙇‍♂️`,
            `I'm a designer too. 🙎‍♂️`,
          ],
        },
        // Color for menu background
        shapeColor: {
          link: { color: "#171616", hover: "#fff" },
          shape1: {
            color: `#413f46`,
            opacity: `0.7`,
          },
          shape2: {
            color: `#e6e5ea`,
            opacity: `0.7`,
          },
          shape3: {
            color: `#fff`,
            opacity: `0.7`,
          },
        },
        footer: `heart`,
      },
    },
  ],
}