# Phira Engineering & Constructions

Website for **Phira Engineering & Constructions**, an engineering company in Accra, Ghana that installs and services electrical, fuel and gas systems. I designed and built it for the company as a real client project.

**Live site:** https://phiraconsandeng.netlify.app

## What the site does

- Presents the company's services: electrical engineering, fuel and gas systems, and maintenance and repair of mechanical and electronic pumps.
- Shows a portfolio of completed work (pump installation, wiring, fuel dispenser installation, gas system servicing) with photos.
- Gives potential customers a contact form. Submissions are emailed straight to the company, so no enquiry sits unseen in a database.
- Responsive layout that works on phones, tablets and desktops.

## Pages

| Route | Purpose |
| --- | --- |
| `/` | Home: hero, services overview, featured projects, contact call to action |
| `/about` | The company and its team |
| `/projects` | Portfolio of completed jobs |
| `/contact` | Contact form |

## Tech stack

| Area | Tools |
| --- | --- |
| Framework | Next.js (App Router) and React |
| Styling | Tailwind CSS with daisyUI |
| Email | Resend, called from a Next.js API route (`app/api/contact/route.js`) |
| Hosting | Netlify |

## Running it locally

```bash
git clone https://github.com/lordsonfafa/PHIRA.git
cd PHIRA
npm install
```

Create a `.env.local` file:

```
RESEND_API_KEY=your-resend-api-key
CONTACT_FORM_RECIPIENT_EMAIL=where-enquiries-should-arrive@example.com
```

Then:

```bash
npm run dev
```

Open http://localhost:3000. Without the two environment variables the site still works, but submitting the contact form returns an error.

## Project structure

```
app/
  page.js              home page
  about/               about page
  projects/            portfolio page
  contact/             contact page
  api/contact/route.js server route that sends the enquiry email
  components/          navbar, hero, services, project cards, form, footer
public/assets/         photos, icons and videos
```

## Notes

- The contact form sends from Resend's shared test sender until the company's own domain is verified. Once a custom domain is connected, the sender address in `route.js` should change to it.
- Secrets live only in environment variables (set in the Netlify dashboard for production). Nothing sensitive is committed.

## Author

Built by **Borngreat**, a Computer Science student at KNUST, Ghana. I also built [Susu Tracker](https://github.com/lordsonfafa/Susu-Tracker), a React Native app for running savings groups.
