# Portfolio template

A simple professional portfolio built with Astro, Pages CMS, and GitHub Pages. Each person owns their own repository, content, and website.

Includes a shared profile, projects, research, certificates, achievements, light and dark themes, and a small animated portrait surround. Project covers can use an uploaded image, an automatic preview of a public deployed URL, or the default illustration. Research entries also have a default illustration.

## Create your portfolio

1. Click **Use this template → Create a new repository**.
2. Choose **your own GitHub account** as the owner.
3. Create a **public** repository named **`YOUR_USERNAME.github.io`**, using your actual GitHub username. This setup expects that repository name so all page and image paths work from the domain root. If you already use that address for another site, choose a separate hosting setup before proceeding.
4. In your new repository, open **Settings → Pages** and select **GitHub Actions** as the source.
5. Open **Actions → Deploy portfolio → Run workflow**, select `main`, and run it. If GitHub asks you to enable Actions, enable them first.
6. Wait for the deployment to finish. Your website will be at **`https://YOUR_USERNAME.github.io/`**.

The template repository itself skips deployment. Repositories created from it can deploy independently.

## Edit through Pages CMS

1. Open [Pages CMS](https://app.pagescms.org/) and sign in with GitHub.
2. Install the Pages CMS GitHub App, selecting only your new portfolio repository.
3. Open that repository and the `main` branch. The `.pages.yml` configuration is already included.
4. Fill in **Profile**, **Site settings**, and **Experience, education & skills**. Enter your name and portrait once; all pages use the same profile.
5. Add projects, research, certificates, and achievements. Each collection starts with one generic **unpublished** example that you can replace or delete.
6. Enable **Published** on entries you want visitors to see, then save. Enable **Show on homepage** to feature a project.

Saving content or media commits it to your own repository and triggers deployment. Wait for the latest run under **Actions** to succeed, then refresh your site. Draft entries are hidden from the website, but files in a public repository, including draft content and uploaded PDFs, remain publicly accessible in its source.

## Images and project previews

- Upload a portrait under **Profile → Portrait photo**. For a web-sized portrait, aim for a JPG or WebP around 800 × 800 pixels and below 500 KB. This is a practical target, not a guaranteed CMS upload limit.
- Upload a CV, paper, or certificate as a PDF through its corresponding field.
- A project uses its uploaded **Cover image** first. If that is empty and **Live project URL** is filled in, the deployment attempts a desktop screenshot of that public page.
- A missing URL, failed capture, or recognized sign-in page uses the default project image. For private dashboards or a particular screen, upload your own screenshot.
- Project previews refresh on deployment. They need no API key or additional service account. GitHub's hosted Ubuntu runner provides Google Chrome for the capture step.
- Research entries without an image use the default research illustration.

## Run locally

Install Node.js **22.12 or newer** and npm **9.6.5 or newer**:

```bash
npm ci
npm run dev
```

Open the local URL printed by Astro, usually `http://localhost:4321`.

```bash
npm run check
npm run build
npm run preview
```

To generate project previews locally, have Google Chrome installed and run `npm run screenshots` before building. Otherwise projects use their uploaded cover or the default illustration.

## Content files

| File or folder | Content |
| --- | --- |
| `src/data/profile.json` | Name, introduction, portrait, CV, contact links |
| `src/data/career.json` | Experience, education, skills |
| `src/data/site.json` | Tagline and search description |
| `src/content/projects/` | One Markdown file per project |
| `src/content/research/` | One Markdown file per publication or study |
| `src/content/certificates/` | One Markdown file per certificate |
| `src/content/achievements/` | One Markdown file per achievement |
| `public/uploads/` | Uploaded images and PDF files |

Client copies are independent: changes in one person's repository do not affect anyone else's. Later improvements to this template must be applied separately to existing copies.
