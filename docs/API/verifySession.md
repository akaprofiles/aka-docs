---
sidebar_position: 5
---

# verifySession

`https://api.akaprofiles.com/verifySession`

Call verifySession to verify session and awardtoken values are valid (issued by AKA Profiles).

Used to prevent page from continuing to process if URL not set by AKA Profiles.

**Request Body**

```json
{
  "session": {session},
  "awardtoken": {awardtoken},
};
```

**Response Body**

If call is successful and session is valid, endpoint returns status 200 and json

```json
{
  "success": true,
  "message": "valid session"
}
```

If success is not true, or any other status code is returned, either the `Badge Award Page` was not set by AKA Profiles, or the session has expired.

See function `verifySession` in [reference implementation](https://github.com/neilck/aka-awardbadge/blob/main/src/app/actions/akaActions.ts).
