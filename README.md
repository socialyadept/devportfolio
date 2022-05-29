<h1 align="center"> Software DevPortfolio 🔥 </h1>

:star: Make sure to drop a star on GitHub that helps a lot :D - Site has been migrated to NextJs

## You can avail multiple pages ranging from 📚

✔️ Main landing page \
✔️ Skills \
✔️ Summary and About me\
✔️ Experience\
✔️ Certifications 🏆\
✔️ Blogs\
✔️ Education\
✔️ Contact me

Hit the live example, **[click here](https://muhammadkumail.com/)**

## Clone And Use 📋

- The website is completely built on `react-js` framework of `javascript` and that's why we need `nodejs` and `npm` installed.
- While installing `nodejs` and `npm`, try to install versions which are equal or greater than the versions mentioned in badges above.
- In case you want to help developing it or simply saving it, you can fork the repository just by clicking the button on the top-right corner of this page.
- After the successful installation of `nodejs` and `npm`, clone the repository into your local system using below command:
  - ```python
     git clone https://github.com/mkumail1/therealmvp.dev.git
    ```
  - This will clone the whole repository in your system.
- To download required dependencies to your system, navigate to the directory where the cloned repository resides and execute following command:
  - ```python
    npm install
    ```
- Now, the project is ready to use.
- You can check it using `npm run dev`, it will open the website locally on your browser.

## Customize it for your own easy ✏️

In this project, there are basically 4 things that you need to change to customize this to anyone else's portfolio: **package.json**, **Personal Information**, **Github Information** and **Splash Logo**.

### Personal Information

You will find `src/portfolio.js` file which contains the complete information about the user. The file looks something like below:

```python
// Home Page
const greeting = {
    ...
}

// Social Media
const socialMediaLinks = {
    ...
}

...
```

You can change the personal information, experience, education, social media, certifications, blog information, contact information etc. in `src/portfolio.js` to directly reflect them in portfolio website.

## Choose Theme 🌈

- You can take a look at `src/theme.js` file where all available themes are mentioned with respective color codes.
- At the bottom of this file you will see the below code:
  - `export const chosenTheme = blueTheme;`
  - You need to change the name from `blueTheme` to whatever theme you want to set your website to.
  - You can define new theme similarly as other themes and you can assign name of that new defined theme to `chosenTheme`.
- That's it. You just need to change the theme name and the code will take care of everything else.

  Run `npm run dev` to check if everything is ok.

## Deployment 📦

- Once you are done with your setup and have successfully completed all steps above, you need to put your website online!
- I highly recommend using [Github Pages](https://create-react-app.dev/docs/deployment/#github-pages) to achieve this the EASIEST WAY.
- To deploy your website, you have two options. First you need to create a github repository with the name `<your-github-username>.github.io`. Please don't give it any other name.
- Now, you need to generate a production build and deploy the website.

**Option 1:**

- Run `npm run build` to generate the production build folder.
- Enter the build folder, `git init` and push the generated code to the `master` branch of your new repository. That's it. Done.
  You may need to `git init` and force push at every new build.

**Option 2 (will not work with [user pages](https://docs.github.com/en/github/working-with-github-pages/about-github-pages)):**

- Run `npm run deploy` to build and create a branch called `gh-pages`. It will push the `build` files to that branch.
- The last step in deploying is to enable `Github Pages` in settings of the repository and select `gh-pages` branch.

Now, your website is successfully deployed and you can visit it at `<your-github-username>.github.io`.
If you are stuck somewhere and want to observe the deployment process in depth, then please watch below video.

## Technologies used 🛠️

- [React](https://reactjs.org/)
- [graphql](https://graphql.org/)
- [apollo-boost](https://www.apollographql.com/docs/react/get-started/)
- [styled-components](https://styled-components.com/)

## illustrations 🍥

- [UnDraw](https://undraw.co/illustrations)

## Contributing 💡

If you can help us with these. Please don't hesitate to open an [pull request](https://github.com/mkumail1/therealmvp.dev/pulls) or [issue](https://github.com/mkumail1/therealmvp.dev/issues).

## Big shoutout to

[Ashutosh's MasterFolio](https://github.com/ashutosh1919/masterPortfolio) since the UI inspiration was taken from his portfolio but I found out that the code was doing very poor with the SEO. Usage of some react conventions at the initial loading badly affected the SEO so this portfolio site is solely made to be optimized for Google and other search engine SEO indexes and plays the role of a portfolio site to its fulllest.
