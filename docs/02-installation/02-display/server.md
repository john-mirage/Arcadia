---
id: server
title: Server
slug: /installation/display/server
---

<head>
  <title>Display server | Arcadia</title>
</head>

This page describes how to install and configure the Xorg display server on the system.

## Installation

```bash
sudo pacman -S xorg-{server,xinit,xrandr,xsetroot,xprop}
```

## Configuration

### Generate the config

``` bash
sudo nvidia-xconfig
```

### Avoid screen tearing

```conf title="/etc/X11/xorg.conf.d/20-nvidia.conf"
Section "Device"
        Identifier "Nvidia Card"
        Driver     "nvidia"
        VendorName "NVIDIA Corporation"
        BoardName  "GeForce GTX 1660 Ti"
EndSection

Section "Screen"
    Identifier     "Screen0"
    Device         "Device0"
    Monitor        "Monitor0"
    Option         "MetaModes" "nvidia-auto-select +0+0 {ForceFullCompositionPipeline=On}"
    Option         "AllowIndirectGLXProtocol" "off"
    Option         "TripleBuffer" "on"
EndSection
```

### Disable screen saving

```conf title="/etc/X11/xorg.conf.d/10-monitor.conf"
Section "Monitor"
    Identifier     "Monitor0"
    VendorName     "Unknown"
    ModelName      "Unknown"
    Option         "DPMS" "false"
EndSection

Section "ServerFlags"
    Option "StandbyTime" "0"
    Option "SuspendTime" "0"
    Option "OffTime" "0"
    Option "BlankTime" "0"
EndSection
```

## Disable Mouse acceleration

```conf title="/etc/X11/xorg.conf.d/50-mouse-acceleration.conf"
Section "InputClass"
        Identifier     "My Mouse"
        Driver         "libinput"
        MatchIsPointer "yes"
        Option         "AccelProfile" "flat"
        Option         "AccelSpeed" "0"
EndSection
```

## Setup Xresources

```conf title="$HOME/.Xresources"
Xcursor.theme: Adwaita
Xcursor.size: 16
```
