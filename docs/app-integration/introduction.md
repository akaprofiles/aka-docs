---
sidebar_position: 1
---

# Introduction

AKA Profiles is a microservice / app for Nostr badges, where each awarded badge is part of an account's identity.
Badges are extended with eligiblity criteria, enabling automated group enrollment.

As an example, it's a common that apps require users to pass a Captcha, to prevent bot sign ups / spam. With AKA Profiles, a user only has to pass a Captcha once, and the result is stored as a badge awarded to their account.

The user workflow is similar to OAuth.

1. Each app defines their own group badge, specifying one or more badges from the badge library as eligibility requirements.
2. Users without required badges are directed from app to AKA Profiles, where they can self-award badges based on respective badge award web pages.
3. Once all badges are awarded, app's group badge is awarded, and user redirected back to app.

To promote the re-use of badges, badges created with AKA Profiles can be re-used as eligibilty criteria by any app.
