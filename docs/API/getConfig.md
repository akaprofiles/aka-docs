---
sidebar_position: 6
---

# getConfig

getConfig returns configuration parameters for the badge.

[See Configuration Parameters](/docs/hosted-badges/badge-config#configuration-parameters) for more information.

**Request Body**

```json
{
  "session": {session},
  "awardtoken": {awardtoken},
};
```

**Response Body**

If call is successful returns status 200 and json

```json
{
  "configParams": [
    { "name": "string1", "value": "value1" },
    { "name": "string2", "value": "value2" }
    // ... additional configuration parameters if specified
  ]
}
```

See function `getConfig`` in [reference implementation](https://github.com/neilck/aka-awardbadge/blob/main/src/app/actions/akaActions.ts).
