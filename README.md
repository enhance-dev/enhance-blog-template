![enhance-type](https://user-images.githubusercontent.com/76308/223593101-1f65f07f-49c4-4a13-9203-4ab4ff72f097.svg)

# enhance-blog-template

This is the repo containing the blog template project using Enhance.

```
app
├── api ............... data routes
│   ├── posts
│   │   └── $$.mjs .... load data for individual blog post
│   └── index.mjs ..... list of blog posts
├── blog
│   └── posts ......... post files in markdown format
│       └── *.md
├── elements .......... custom element pure functions
│   └── *.mjs
├── lib
│   ├── hljs-line-wrapper.mjs
│   └── markdown-class-mappings.mjs
├── pages ............. file-based routing
│   ├── posts
│   │   └── $$.mjs .... individual blog post
│   └── index.mjs ..... list of blog posts
└── head.mjs .......... head tag for each page
```

## Quick Start

- [Install the Begin CLI](https://begin.com/docs/)
- Clone this repo:

  ```bash
  git clone git@github.com:enhance-dev/enhance-blog-template.git
  ```

- cd into the repo and do an npm install

    ```bash
    cd enhance-blog-template
    npm install
    ```
- Start the development server.

    ```bash
    npm start
    ```
 - Open a browser tab to http://localhost:3333
 - Start editing your blog

 ## Deploy to Production

- Login to Begin

    ```bash
    begin login
    ```

- Create your application and staging environment by following the interactive prompts:

    ```bash
    begin create
    This project doesn't appear to be associated with a Begin app
    ? Would you like to create a Begin app based on this project? (Y/n) · true
    ? What would you like to name your app? · blog-template
    ? What would you like to name your first environment? · staging
    Archiving and uploading project to Begin...
    Project uploaded, you can now exit this process and check its status with: begin deploy --status
    Beginning deployment of 'staging'
    Packaging build for deployment
    Publishing build to Begin
    Build completed!
    Deployed 'staging' to: https://blog-template.begin.app
    ```
- [Optional] create a production environment.

    ```bash
    begin create --env production
    App environment 'production' created at https://blog-template-prod.begin.app
    ```

## Configuring CI/CD

This repo comes with a GitHub action that will deploy our site to `staging` when there is a commit to the `main` branch and `production` when you tag a release.

For this to work you must [create a repo secret](https://docs.github.com/en/actions/security-guides/encrypted-secrets#creating-encrypted-secrets-for-a-repository) named `BEGIN_TOKEN`. Once you successfully login to Begin using the CLI command `begin login` you can retrieve the value for `BEGIN_TOKEN` in the file `~/.begin/config.json`. Use the value of `access_token` in this file as the value for `BEGIN_TOKEN`.

Additionally to ensure you `/rss` feed points to the correct environment you will need to create two additional repo secrets.

- `BEGIN_URL_STAGING`: set to the url you received when creating the `staging` environment
- `BEGIN_URL_PRODUCTION`: set to  the url you received when creating the `production` environment
