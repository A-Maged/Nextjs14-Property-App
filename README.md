# Caching

- no need for cache busting as all use cases in this app can benefit from being cached.
- even favouring a compound don't need it as it's implemented in client side using local-storage. (for lack of user id)

# App directory

- used only for routing, loading & error.

# Screens

- actual pages code is here.

# Route Handlers

- a fake API, so no validation is applied.

# Server Actions

- uses HTTP POST, so they're never cached. It means they are bad for queries, but good for mutations.
- are great, if the backend is in the same Next.js app.
- I didn't use server actions, to simulate calling an external backend.

# API Fetchers

- functions used to fetch data from backend(route-handlers in this case).
