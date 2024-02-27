---
sidebar_position: 5
---

# getConfig

GET `https://api.akaprofiles.com/getConfig?identifier={identifier}`

getConfig returns configuration parameters for the badge.

Required parameter `identifier` is the unique badge identifer (`d tag` in badge definition).

[See Configuration Parameters](/docs/hosted-badges/badge-config#configuration-parameters) for more information.

**Response Body**

If call is successful returns status 200 and json

```json
[
  { "name": "string1", "value": "value1" },
  { "name": "string2", "value": "value2" }
  // ... additional configuration parameters if specified
]
```

See function `getConfig`` in [reference implementation](https://github.com/neilck/aka-awardbadge/blob/main/src/app/actions/akaActions.ts).
