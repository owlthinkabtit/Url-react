# Project 2: React Project Development
**Author:** Jameka Haggins 


LIVE DEMO: [https://project-url-zeta.vercel.app/](https://project-url-zeta.vercel.app/)
---
## Reflection
`Write a 200-300 word reflection discussing your development process, challenges faced, solutions implemented, and potential improvements.`

My process began by breaking down the original monolithic HTML/JavaScript project into a modern, component-based React architecture. I prioritized creating a scalable structure by separating the UI into functional components like `NavBar`, `Hero`, `Shortener`, and a reusable `LinkCard`. This approach allowed me to manage the complex logic of the URL shortener independently from the static landing page elements. I integrated the Spoo.me API using asynchronous JavaScript (async/await) and implemented `localStorage` to ensure a persistent user experience across page sessions.

One major challenge was transitioning from direct DOM manipulation to React’s declarative state management. Initially, I struggled with keeping the Copy button state unique to each link in a list. I solved this by implementing a `copyIndex` state that tracks the specific ID of the clicked link. Additionally, I faced issues with CORS and API authentication. By shifting to the Spoo.me API and utilizing Vite environment variables `(.env)`, I was able to securely and effectively handle API requests without exposing my keys in the source code.

While the current application is fully functional and responsive, I would like to implement the React Context API for global state management, specifically to handle a dark/light mode toggle as suggested in other Frontend Mentor challenges. Furthermore, I could improve accessibility by adding `aria-live` regions to announce when a link has been successfully shortened or copied to the clipboard for screen-reader users.
