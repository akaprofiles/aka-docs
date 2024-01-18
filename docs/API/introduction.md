---
sidebar_position: 1
---

# Introduction

AKA Profiles lets users apply for your badges (self-issued).

Self-issued badges are meant to be used for access control, where you application directs users to AKA Profiles to obtain a required badge, before allowing an action.

See implementations of "Not-a-Robot" and "IP Locate" badges in [aka-awardbadge repo](https://github.com/neilck/aka-awardbadge).

## Quick Overview

1. Users can view your badge at `https://app.akaprofiles.com/njump/<badge naddr...>`
2. When they click "Get Badge" your web app page (aka. `Badge Award Page`) is displayed in an `<iframe>`.
3. AKA Profiles provides session information as parameters. `https://<your_domain>/<badge award page>?session={session}&awardtoken={awardtoken}`
4. Your code calls `badgeAward` with session, awardtoken, and your API key to award the badge.
5. AKA Profiles publishes the badge award event using your issuer keypair to your specified relays.

**badge award page in iframe**

```html
<iframe
id="contentFrame"
src="<badge award page>?session=$<session id>&awardtoken=<award token>"
title={title}
style={{
    height: "100%",
    width: "100%",
    minHeight: "240px",
    border: 0,
}}
></iframe>
```

## Advantages vs. DIY

1. You only have to write the badge award logic in `Badge Award Page`.
2. Automated handling of Nostr events
3. Supports storage of different configuration parameters per badge
4. Supports onboarding use case (badge award stored in session, badge award event published after user keypair created)
5. Enables other applications to re-use your badges

Try it out by [applying for "Not-a-Robot" badge](http://app.akaprofiles.com/njump/naddr1qqrkumm5v93x7aqzyrkm4aaey4raej2rn90ufkevka7d0g3vxj25z7dfnnqvp59vhnrq2qcyqqq82wgmuay94).

![Screenshot display applyURL](/img/apply.png)

The next section outlines the prequisites to enable self-issued badges.
