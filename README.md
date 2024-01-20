# README

- Different features are segregated into .svelte files under `/medito-page/src/lib` folder.
- Each svelte file is separated into Javascript, HTML, and CSS code respectively.
- This makes it so project features are separated from each other
- The `/docs` build folder is for cloudflare/github pages
- I did not have time to do any backend work and integrate with stripe
- `I am more than willing to continue working on this for the medito foundation for free.`

# How to Update Content

- Change the variables in `/medito-page/src/lib/App.svelte` (all data about the fundraiser is on all on this page under `<script>`)
- This is meant to pass on data from API and data storage all in one place.
- Colors and other styles can be changed with global variables in `app.css`
- For example, the `--primary` and `--secondary` variables will change the colors of the entire page.

# How to Build Website

- clone the repository
- in your terminal, cd into the `/medito-page` folder
- type `npm run build`
- this will create a `/docs` folder with the distributable build code.
- use the files in `/docs` to host on cloudflare pages.

---

# Project Objective:

Develop a versatile single web page that can be adapted for various fundraising initiatives, such as hiring personnel, creating ad campaigns, or developing new features. The page should be designed to engage visitors and encourage donations with an interactive and user-friendly interface.

## Core Features:

### ~~Title and Description:~~

- ~~A clear and adjustable title that can be set to reflect the current fundraising goal (e.g., "Create Ad Campaign in the Tram").~~
- ~~A brief description that contextualizes the fundraising initiative.~~

### ~~Fundraising Progress Indicator:~~

- ~~Display dynamically the amount raised towards the goal (dummy data, but can be replaced by an API endpoint).~~
- ~~Visually represent progress in both numerical value and percentage.~~
- ~~Implement an animated progress bar that activates upon page load.~~

### ~~Interactive Q&A Dropdowns:~~

- ~~Include customizable questions relevant to the fundraising goal.~~
- ~~Dropdowns to reveal answers for each question.~~
- ~~The final dropdown to contain an inline form asking for the user's email address to prevent spam and allow for follow-up queries.~~

### Donation Section:

- ~~An input field for donors to specify an amount, with validation to ensure it's a legitimate figure.~~
- Integration with Stripe checkout for secure transactions, ~~with support for multiple currencies.~~
- ~~A donation button that is prominently displayed and accessible.~~

### ~~Rewards for Donors:~~

- ~~A flexible rewards section where incentives can be outlined based on donation tiers. (can be mixed with the donation section)~~

### ~~Dynamic Notification Bar:~~

- ~~A notification feature at the top of the page that showcases recent donations.~~
- ~~The ability to connect this feature to an API endpoint, allowing for real-time updates at specified intervals.~~

## ~~Design and Hosting Requirements:~~

- ~~The design must be responsive, ensuring functionality across all devices.~~
- ~~The page should have a clean, modern aesthetic that can be easily changed for various campaigns. Keep the design simple, no fancy colors, no images. Purely text-based.~~
- ~~The code should be optimized for hosting on Cloudflare Pages.~~

## ~~Development and Deployment:~~

- ~~Ensure that the site structure allows for easy content updates for different campaigns.~~
- ~~The codebase should be maintainable.~~
- ~~All forms should include appropriate validation checks, including spam prevention mechanisms.~~
- ~~The project will be open-sourced on GitHub, and the deployment process must be documented to facilitate easy setup on Cloudflare Pages.~~

## Reward Offer:

We're offering a $500 reward for a single web page that aligns with our brief: adaptability for various fundraising goals, a seamless user experience, and technical integration. The winning entry must exhibit clear, documented, and maintainable code, along with a responsive and unique design style. The selection will hinge on strict adherence to the specifications in the brief. Payment will be made via bank transfer within a week.
