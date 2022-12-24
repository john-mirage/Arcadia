---
id: network
title: Network
slug: /installation/system/network
---

<head>
  <title>System network | Arcadia</title>
</head>

# Network

This page describes how to create a network configuration and configure the systemd network manager.

## Setup the network informations

### Set the hostname

```text title="/etc/hostname"
myhostname
```

### Set the hosts

```text title="/etc/hosts"
127.0.0.1    localhost
::1          localhost
127.0.1.1    myhostname.localdomain    myhostname
```

## Install and activate Network Manager

### Installation

``` bash
pacman -S networkmanager
```

### Activation

``` bash
systemctl enable NetworkManager.service
```

---

## References

- [ArchWiki - Network Manager](https://wiki.archlinux.org/title/NetworkManager)
- [ArchWiki - Network configuration](https://wiki.archlinux.org/index.php/Network_configuration)
- [ManPage - Systemctl](https://jlk.fjfi.cvut.cz/arch/manpages/man/core/systemd/systemctl.1.en)