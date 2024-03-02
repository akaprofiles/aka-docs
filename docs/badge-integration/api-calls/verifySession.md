---
sidebar_position: 4
---

# verifySession

POST `https://api.akaprofiles.com/verifySession`

Call verifySession to verify the session and awardtoken values are valid (issued by AKA Profiles).

Used to prevent the page from continuing to process if URL not set by AKA Profiles.

**Request Body**

```json
{
  "session": {session},
  "awardtoken": {awardtoken},
};
```

**Response Body**

If the call is successful and the session is valid, the endpoint returns status 200 and json

```json
{
  "success": true,
  "message": "valid session"
}
```

If success is not true, or any other status code is returned, either the `Badge Award Page` was not set by AKA Profiles, or the session has expired.

See function `verifySession` in the [reference implementation](https://github.com/neilck/aka-awardbadge/blob/main/src/app/actions/akaActions.ts).
