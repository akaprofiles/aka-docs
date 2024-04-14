---
sidebar_position: 2
---

# Issuer Configuration

Issuer configuration settings only apply to Nostr apps that will integrate directly using the Nostr protocol.

Configuration settings are in [Nostr Settings](https://app.akaprofiles.com/creator/developer/keypair)

Things to configure:

- Set the issuer private key
- Configure the relays
- Generate an API key

### Issuer Private Key

The issuer private key is used to publish all Badge Definition events and Badge Award events.

As the private key is never shown, it's recommended you replace the default with your own private key.

### Relays

Add the relays where your app will look for badges and badge awards.

### API Key

Create an API key for your app to communicate with AKA Profiles.

The old key is immediately invalidated if you generate a new key.
