# Data Dashboard

This is a data dashboard about the current NBA regular season. So far, it only displays their wins, but I hope to add a part where users can search up any player and their states with great UI/UX design

Live demo: https://codepath-sp2024-project5-ud6v.vercel.app/

## Description

This was my first time working with dynamic links and nested layouts. This app fetches data from a basketball api and displays it. Also, you can filter through the data through the filters or by searching up something in the search bar

### Tech Stack

- Vite
- React
- TailwindCSS
- Vercel

## Video Walkthrough

Here's a walkthrough of the app:

<img src='src/assets/codepath-web102-project6.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

GIF created with Kap

## Notes

Describe any challenges encountered while building the app.

- I had some trouble with fetching the eastern and western conference teams from the api. I initially wanted to use the same function but just change the parameters, but had difficulty so I just had 2 functions (to fetch data) and 2 state variables instead of 1 function and 1 state variable (would like to optimize this in the future)
- I also had some trouble conditionally rendering something. It wouldn't display even if should've but then I learned that an empty array will count as true in a conditional statement
- It was a difficult at first to wrap my head around react router and dynamic links but after I followed along to the tutorial, it became much easier
- I had some difficulty in making sure everything aligned because I put margins, paddings, and gaps in many of my elements

## CI/CD Pipeline

This app is hosted with Vercel and any pushes to the main branch will automatically update the app

## Installation

First clone the project on your local machine and cd into:

```
git clone <url>
cd codepath-sp2024-project5
```

Then install dependencies and run the project:

```
npm install
npm run dev
```

Local environment: http://localhost:5173/
