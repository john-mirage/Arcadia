---
id: driver
title: Driver
slug: /installation/display/driver
---

<head>
  <title>Display driver | Arcadia</title>
</head>

This page describes how to install and configure the Nvidia proprietary driver on the system.

## Install the Nvidia proprietary driver

``` bash
sudo pacman -S nvidia-lts
```

## Enable DRM kernel mode setting

Enabling DRM kernel mode setting allow the Xorg server to run without root privileges. It provide a nice security improvement.

``` conf title="/boot/loader/entries/arch.conf"
options     cryptdevice=UUID=<UUID>:cryptroot:allow-discards root="UUID=<UUID>" nvidia_drm.modeset=1 quiet rw
```

---

## References

- [ArchWiki - Nvidia](https://wiki.archlinux.org/index.php/NVIDIA)