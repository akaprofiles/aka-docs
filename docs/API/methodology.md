---
sidebar_position: 4
---

# Methodology

All API calls follow the same methodology

- POST method
- API KEY in header as Bearer token (see previous section)
- POST body contains at least these values `{ session: string; awardtoken: string }`
- Response body returns JSON

NOTE: Does not follow RESTful methodology.
