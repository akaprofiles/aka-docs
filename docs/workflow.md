---
sidebar_position: 4
---

# Workflow

![User Workflow Diagram](/img/workflow.svg)

#### 1. redirect user to AKA Profiles

App redirects user to AKA Profiles to obtain the app's group badge

`https://app.akaprofiles.com/njump/naddr...?state=abc123&pubkey=0E12AC...`

- `naddr...` is the app's group badge identifier
- `state` is an optional parameter, returned in `state` tag of badge award and final redirect URL
- `pubkey` is an optional parameter, formatted as a hex public key

Apps can optionally use `state` to correlate initial request with badge award. `state` is included as a `state` tag in the badge award for the badge, as well as returned as query parameter in the final redirect back to the app.

When `pubkey` is omitted, use can choose any pubkey for the badge award. When included, only the specified public key can be used. Note that is a convenience, not a security feature, as user can remove pubkey from URL.

#### 2. get required badges

AKA profiles looks up all the required badges for the group page. Each required badge has an Badge Award page URL configured in AKA Profiles.

#### 3. to 6. display award pages & award badges

For each required badge, its Badge Award page is displayed to the user within a dialog (iframe). If eligible, the Badge Award page makes an API call to AKA Profiles to award the badge.

Awards are stored in the session, and events are not yet published to relays.

#### 7. get user's public key

Once all required badges are awarded, AKA Profiles prompts user to select which public key to save the badge awards to, unless `pukey` was specified on original redirect.

In either case, AKA Profiles requires user to prove public key ownership, by either sharing their private key, or by signing an arbitrary event using a Nostr Signing Extension. nsecBunker is not yet supported.

#### 8. publish award events

All badge award events, including the group badge award event, are published to the relays specified in Nostr Settings.

#### 9. redirect user to app

If the group badge is configured with a Redirect URL, user is redirected back to app.
If `state` query parameter was included in initial request, it will be appended on the redirect URL.

#### 10. verify awards

App can verify the awards by querying the relays. This is also how an app gets any data included in a badge award.
