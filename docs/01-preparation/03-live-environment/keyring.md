---
id: keyring
title: Keyring
slug: /preparation/live-environment/keyring
---

<head>
  <title>Live environment keyring | Arcadia</title>
</head>

This page describes how to update the Arch Linux keyring. Updating the keyring is made by deleting revoked keys and adding new trusted keys.

## Update the Arch Linux keyring

The arch linux keyring holds all the signatures related to the packages. During the installation, a package is verified against this keyring to ensure that the downloaded file is properly signed. This keyring need to be updated in order to delete revoked keys and add new trusted keys.

``` bash
pacman -Sy archlinux-keyring
```

:::info

Running `pacman -Sy` instead of `pacman -Syu` is not recommended as this could lead to dependency issues. However we are not able to update the live environment due to it's immutable state.

:::

---

## References

- [Wikipedia - Keyring](https://en.wikipedia.org/wiki/Keyring_(cryptography))
- [ArchWiki - Keyring package](https://wiki.archlinux.org/index.php/DeveloperWiki:Keyring_Package)
- [ArchWiki - Pacman](https://wiki.archlinux.org/index.php/Pacman)