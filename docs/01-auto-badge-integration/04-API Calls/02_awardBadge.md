---
sidebar_position: 2
---

# awardBadge

POST `https://api.akaprofiles.com/awardBadge`

:::tip[Typescript Example]
See awardBadge function in [akaActions.ts](https://github.com/neilck/aka-autobadge/blob/main/src/app/util/akaActions.ts).
:::

## Description

Call to award the badge to the user.

The award is saved to the workflow session, and will be finalized once the workflow completes.

### Authorization

The `token` returned by `https://api.akaprofiles.com/token` must be included in the request's header as the Bearer token.

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

### POST Body

If data is being returned along with badge award, include the data as JSON in the POST body.

**Example POST body JSON**

```json
{
  "country": "Canada",
  "state/prov": "British Columbia"
}
```

See [Badge Data Fields](/docs/help-pages/badge-data) for more information.

### Response Body

If the call is successful returns status 200 and json:

```json
{
  "success": true,
  "message": "badge awarded"
}
```
