---
sidebar_position: 8
---

# Award Badge Event

After awardBadge endpoint is called, badge award is saved in session.
IF user has not yet authenticated with a pubkey,

The corresponding a badge award event will be published once the user has provided their pubkey.

**Request Body**

```json
{
  "session": {session},
  "awardtoken": {awardtoken},
  "awarddata": {any}
};
```

`awarddata` is optional. Data can be returned along with badge award. See [Badge Data Fields](/docs/hosted-badges/badge-data) for more information.

**Example award data**

```json
{
  "country": "Canada",
  "state/prov": "British Columbia"
}
```

Only key names matching the badge's data field names will be added to the badge award, and each value must be a string.

Added to badge award event's tags as

```
[
  // other tags
  ["data", {name}, {value}],
  ["data", {name2}, {value2}],
  ...
]
```

**Response Body**

If call is successful returns status 200 and json

```json
{
  "success": true,
  "message": "badge awarded"
}
```

See function `awardBadge` in [reference implementation](https://github.com/neilck/aka-awardbadge/blob/main/src/app/actions/akaActions.ts).
