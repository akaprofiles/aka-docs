---
sidebar_position: 6
---

# awardBadge

POST `https://api.akaprofiles.com/awardBadge`

awardBadge approves the badge award.

**Authorization**

Add `token` returned by `https://api.akaprofiles.com/awardBadge/token` into header as Bearer token.

```typescript
// return header with token authorization
const getHeader = (token: string) => {

  const authorization = `Bearer ${token}`;

  return {
    "Content-Type": "application/json",
    "Authorization": authorization,
  };
};

const token = ...

const response = await fetch(endpoint, {
  method: "POST",
  headers: getHeader(token),
  body: JSON.stringify(postData),
});
```

**Request Body**

If data is being returned along with badge award, add as JSON body. If no award data, set the JSON body to an empty JSON object.

See [Badge Data Fields](/docs/help-pages/badge-data) for more information.

**Example awarddata JSON**

```json
{
  "country": "Canada",
  "state/prov": "British Columbia"
}
```

**Response Body**

If the call is successful returns status 200 and json:

```json
{
  "success": true,
  "message": "badge awarded"
}
```

See function `awardBadge` in the [reference implementation](https://github.com/neilck/aka-awardbadge/blob/main/src/app/actions/akaActions.ts).

# award badge Nostr event

Award data is added to the award badge event as one or more `data tags`.

```
[
  // other tags
  ["data", {name}, {value}],
  ["data", {name2}, {value2}],
  ...
]
```

Note that the Award Badge event is not immediatelly published after calling the `awardData`, as there is a subsequent confirmation step where user approves the award and specifies their public key.
