---
id: network
title: Network
slug: /installation/system/network
---

<head>
  <title>System network | Arcadia</title>
</head>

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

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

## Setup a network manager

<Tabs>
  <TabItem value="systemd-networkd" label="Systemd Networkd" default>

<h3>List available interfaces</h3>

```bash
networkctl list
```

<h3>Configuration</h3>

``` conf title="/etc/systemd/network/20-wired.network"
[Match]
Name=enp0s3

[Network]
DHCP=yes
```

<h3>Activation</h3>

``` bash
systemctl enable systemd-networkd.service
systemctl enable systemd-resolved.service
```

  </TabItem>
  <TabItem value="network-manager" label="Network Manager">

<h3>Installation</h3>

``` bash
pacman -S networkmanager
```

<h3>Activation</h3>

``` bash
systemctl enable NetworkManager.service
```

  </TabItem>
</Tabs>

---

## References

- [ArchWiki - Network Manager](https://wiki.archlinux.org/title/NetworkManager)
- [ArchWiki - Network configuration](https://wiki.archlinux.org/index.php/Network_configuration)
- [ManPage - Systemctl](https://jlk.fjfi.cvut.cz/arch/manpages/man/core/systemd/systemctl.1.en)
