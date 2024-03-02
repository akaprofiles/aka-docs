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
  src="<badge award page>?session=$<session id>&identifier=<identifier>&awardtoken=<award token>"
  title="{title}"
></iframe>
```

Your page makes API calls to AKA Profiles to get additional information, and to award the badge if the user is eligible.

Try it out by [applying for "Not-a-Robot" badge](http://app.akaprofiles.com/njump/naddr1qqrkumm5v93x7aqzyrkm4aaey4raej2rn90ufkevka7d0g3vxj25z7dfnnqvp59vhnrq2qcyqqq82wgmuay94).

![Screenshot display applyURL](/img/apply.png)
