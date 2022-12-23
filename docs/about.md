---
id: about
title: About
slug: /
---

# Arcadia is a personal documentation for installing and configuring Arch Linux 

:::caution

This project should be used at your own risk, always check the official documentation and the provided   sources when using thise guide.

:::

## Hardware components

The table below describes the hardware components used by the guide. For obvious reasons, the guide dont cover hardware that i cannot test. Advanced users who have not the same setup can follow the guide but should be aware that they might not have the same result.

| Type        | Tested hardware                 | Informations                                    |
|:------------|:--------------------------------|:------------------------------------------------|
| Processor   | Intel i7-6800K                  |                                                 |
| Motherboard | Asus X99-E                      |                                                 |
| Audio       | TC Electronic Desktop Konnect 6 | Connected with Firewire PCI-E card (VIA VT6315) |
| Video       | Nvidia GTX 1660 Ti              |                                                 |
| Storage     | Samsung 950 Pro                 | Connected with NVME M.2 interface               |

## System components

The table below describes the system components used for the guide based on my personal choices.

| Type                   | Component            |
|:-----------------------|:---------------------|
| Boot manager           | Systemd Boot         |
| Initial RAM filesystem | Busybox              |
| Kernel                 | Linux LTS            |
| Display server         | Xorg                 |
| Display driver         | Nvidia LTS           |
| Network manager        | Gnome NetworkManager |
| Privilege elevation    | Sudo                 |
| Window manager         | Qtile                |

## Storage device scheme

``` text
        Partition 1               Partition 2
+------------------------+ +------------------------+
| EFI type partition     | | LUKS type partition    |
+------------------------+ +------------------------+
| FAT32 filesystem       | | LUKS2 container        |
+------------------------+ +------------------------+
                           | EXT4 filesystem        |
                           +------------------------+
```
