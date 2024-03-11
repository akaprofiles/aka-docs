---
sidebar_position: 1
---

# Introduction

Badge integration with AKA Profiles allows users to apply for your badge using your Badge Award page. Integrated badges are added to the shared badge library, allowing them to be re-used as required badges when awarding group badges.

Suggested reading before continuing

- [Configuration](/docs/configuration)
- [Workflow](/docs/workflow)

The source code for integrated badges "Not-a-Robot" and "IP Locate" is available at [aka-awardbadge](https://github.com/neilck/aka-awardbadge).

## Quick Overview

When a user is applying for your badge, your Badge Award page is displayed embedded in a dialog.

```html
<iframe
  id="contentFrame"
  src="<badge award page>?code=<code>"
  title="{title}"
></iframe>
```

- Your page calls `GET https:/api.akaprofiles.com/token` (with AKA_API_KEY as Bearer value) to exchange the `code` for a JSON web token (JWT).
- Your page decodes the JWT using AKA Profiles' public key, which verifies the `code` was created by AKA Profiles.
- The JWT contains any custom configuration parameters you have set for the badge.
- Your page calls `POST https://api.akaprofiles.com/awardBadge` (with token as Bearer value) to award the badge.

Try it out by [applying for "Not-a-Robot" badge](http://app.akaprofiles.com/njump/naddr1qqrkumm5v93x7aqzyrkm4aaey4raej2rn90ufkevka7d0g3vxj25z7dfnnqvp59vhnrq2qcyqqq82wgmuay94).

![Screenshot display applyURL](/img/apply.png)
