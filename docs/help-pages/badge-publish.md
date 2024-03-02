---
sidebar_position: 5
---

# Badge Publish

This page explains the options of the `Hosted Badge > Publish` page in AKA Profiles.

Publish your badge to your preferred relay, set on `Nostr Settings > Relays`.
All events are published with Issuer Key, set on `Nostr Settings > Keypair`.

The current badge status check happens on page load, and returns per relay

- "---": badge not found
- "up to date": badge matches last version saved in AKA Profiles
- "out of date": badge found but is out of date compared to last version saved in AKA Profiles
- "newer": badge found on relay is newer than saved on AKA Profiles

## Test Links

Test Links let you test or view your badge before publishing.

- `View raw event` shows the raw Nostr event that will be published
- `Apply for Badge link` shows how your badge looks to users

Note that AKA Profiles also stores badges internally, so `Apply for Badge` still works even when the badge is not yet published to relays.
