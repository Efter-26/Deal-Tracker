# 📊 Deal Tracker CRM

**Deal Tracker** is a sleek, simple CRM-style web app for managing sales deals. It lets users monitor the current status of deals — whether they're still leads, in negotiation, or successfully closed — all in one clean interface.

Live demo:
- 🔗 Frontend: [https://deal-tracker-by-ema.netlify.app](https://deal-tracker-by-ema.netlify.app)
- 🔗 Backend: [https://deal-tracker-server.vercel.app/api/deals](https://deal-tracker-server.vercel.app/api/deals)

---

## 🚀 Features

- 🎯 View a list of sales deals with current statuses
- 🔄 Update deal statuses dynamically from a dropdown
- 💅 Fully responsive, stylish UI built with Tailwind CSS
- ⚙️ Fetched data via API endpoints.
- 🔐 Realistic status options used like Lead, Negotiating, Closed - Won, and Closed - Lost

---

## 🧠 Project Structure

### `Frontend (React + Next.js)`
- Uses **Next.js App Router**
- Hosted on **Netlify**
- State management handled with React `useState`
- API calls made using a utility `fetchDeals()` function
- Deals fetched from backend on component mount (`useEffect`)
- Beautiful modern UI with TailwindCSS and gradients

### `Backend (Node.js API)`
- Served through **Vercel Serverless Functions**
- Exposes a static list of deals through a REST API (`/api/deals`)
- No database used — backend sends JSON as mock data
- Hosted on **Vercel** as a separate repository

👉 Backend GitHub Repo: [deal-tracker-server](https://github.com/Efter-26/Deal-Tracker-Server)

---

## 🔄 How did I handle front-end state change?

Front-end state changes are handled using React’s built-in `useState` hook. When a user selects a new status from the dropdown for a specific deal:

1. The component holds the status value in a local state.
2. On `onChange` of the `<select>` dropdown, the state updates instantly using `setStatus()`.
3. This creates an **immediate UI update** without needing a page refresh.

---

## 🛠️ Tech Stack

| Part      | Stack                          |
|-----------|--------------------------------|
| Frontend  | React, Next.js, Tailwind CSS   |
| Backend   | Node.js, Express.js |
| Hosting   | Netlify (frontend) & Vercel (backend) |

---

## 📁 Folder Structure

```
├── app/
│   └── page.js                # Main page that renders the deal tracker
├── components/
│   └── DealItem.js            # Reusable component to display a deal
├── utils/
│   └── fetchDeals.js          # Utility function to fetch deals from backend
├...
```
