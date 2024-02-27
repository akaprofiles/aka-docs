---
sidebar_position: 6
---

# awardBadge

POST `https://api.akaprofiles.com/awardBadge`

awardBadge approves the badge award.

**Request Body**

```json
{
  "session": {session},
  "awardtoken": {awardtoken},
  "awarddata": {any}
};
```

`awarddata` is optional. Data can be returned along with badge award. See [Badge Data Fields](/docs/help-pages/badge-data) for more information.

**Example awarddata JSON**

```json
{
  "country": "Canada",
  "state/prov": "British Columbia"
}
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

# award badge event

Award data is added to award badge event as one or more `data tags`.
There is a delay between calling awardData endpoint and award badge event publishing:

- user is prompted for their pubkey
- after review, user can choose to prevent the badge award

Added to badge award event's tags as

```
[
  // other tags
  ["data", {name}, {value}],
  ["data", {name2}, {value2}],
  ...
]
```
