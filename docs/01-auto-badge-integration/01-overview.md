---
sidebar_position: 1
decription: Overview of auto badges
---

# Overview

Overview of auto badge integration.

:::info[_Rather read code that documentation?_]  
Repo [aka-autobadge](https://github.com/neilck/aka-autobadge) has the sample implementation.
:::

**Auto badges** reduce the amount of code you have to write to automate the awarding of badges.

AKA Profiles provides badge creation, display, and awarding of badges based on your logic.

![Auto badge workflow](/img/workflow.png)
[view full size](/img/workflow.png)

AKA Profiles manages the **user workflow** for applying for a badge.

1. One or more auto badges is displayed to the user.
2. User is redirected to your web page (`badge award page`) when applying for your auto badge.
3. If eligible, your web page awards the badge using the API and redirects back to the workflow.

The worklow takes care of rest, including helping the user select a profile (pubkey) and the publishing of events.
