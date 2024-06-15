---
sidebar_position: 5
---

# Badge Publish

This page explains the options of the `Auto Badges > Publish` page in AKA Profiles.

Publish your badge to your preferred relay, set on `Nostr Settings > Relays`.

The current badge status check happens on page load, and returns per relay

- "---": badge not found
- "up to date": badge matches last version saved in AKA Profiles
- "out of date": badge found but is out of date compared to last version saved in AKA Profiles
- "newer": badge found on relay is newer than saved on AKA Profiles

## Test Links

Test Links let you test or view your badge before publishing.

- `View raw event` shows the raw Nostr event that will be published
