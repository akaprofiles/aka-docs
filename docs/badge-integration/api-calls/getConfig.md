---
sidebar_position: 5
---

# getConfig

GET `https://api.akaprofiles.com/getConfig?identifier={identifier}`

getConfig returns configuration parameters for the badge.

The required parameter `identifier` is the unique badge identifier (`d tag` in badge definition).

[See Configuration Parameters](/docs/help-pages/badge-config#configuration-parameters) for more information.

**Response Body**

If the call is successful returns status 200 and json:

```json
[
  { "name": "string1", "value": "value1" },
  { "name": "string2", "value": "value2" }
  // ... additional configuration parameters if specified
]
```

See function `getConfig`` in the [reference implementation](https://github.com/neilck/aka-awardbadge/blob/main/src/app/actions/akaActions.ts).
