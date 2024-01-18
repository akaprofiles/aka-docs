---
sidebar_position: 2
---

# Prerequisites

Before integrating the API, you will need an API key.
It is also recommended to set your issuer keypair and relays.

## API Key

Your API key is available under `Nostr Settings > API Key`.

If you generate a new key, your current key will immediately stop working.

## Issuer Keypair

Update your issuer keypair under `Nostr Settings > Keypair`.

The issuer keypair is used to sign all badge definition and badge award events for your account, and all signing happens on the server.

It's highly recommended you replace the default issuer keypair with your own private key, as there is no way to export the private key from AKA Profiles.

Note that the issuer keypair is independent from your login keypair when logging in with a Nostr extension.

## Relays

Update your preferred relays under `Nostr Settings > Relays`

Set the relays to receive you badge definition and badge awards events.

Changes made to badges using AKA Profiles must be manually published under `Hosted Badges > Publish`.
