---
sidebar_position: 3
---

# Configuration

Before creating badges, you should configure your AKA Profiles account under [Nostr Settings](https://app.akaprofiles.com/creator/developer/keypair)

### Issuer Private Key

**It is highly recommended to change the issuer private key before creating badges**

- The issuer private key is used to publish Badge Definition events and Badge Award events.
- It is independent/unrelated to the Nostr Extension key used to sign in.
- only one issuer key per account is currently supported.
- The private key is not viewable once saved

Use your favorite Nostr client to generate a new key, update the profile, and then save the private key into AKA Profiles.

### Relays

- add the relays where your app will look for badges and badge awards
- relay authentication is currently not supported

### API Key

- required if you are adding a new hosted badge with custom logic
- old key is immediately invalidated if you generate a new key
