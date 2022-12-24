---
id: initialization
title: Initialization
slug: /installation/system/initialization
---

<head>
  <title>System initialization | Arcadia</title>
</head>

This page describes how to generate the initial ramdisk images and configure the systemd boot manager for UEFI and the Intel microcode.

## Setup the initial ramdisk images

The initial ramdisk is in essence a very small environment (early userspace) which loads various kernel modules and sets up necessary things before handing over control to init.

This makes it possible to have, for example, encrypted root file systems and root file systems on a software RAID array. mkinitcpio allows for easy extension with custom hooks, has autodetection at runtime, and many other features.

### Edit the configuration

``` conf title="/etc/mkinitcpio.conf"
HOOKS=(base udev autodetect keyboard keymap modconf block encrypt filesystems fsck)
```

### Generate the images

``` bash
mkinitcpio -p linux-lts
```

## Install the Intel microcode package

Processors may have faulty behaviour, which the kernel can correct by updating the microcode on startup.

``` bash
pacman -S intel-ucode
```

## Setup the Systemd boot manager

systemd-boot, previously called gummiboot, is a simple UEFI boot manager which executes configured EFI images. The default entry is selected by a configured pattern (glob) or an on-screen menu to be navigated via arrow-keys. It is included with systemd, which is installed on an Arch system by default.

### Install the EFI boot manager

``` bash
bootctl install
```

### Edit the loader configuration

``` conf title="/boot/loader/loader.conf"
default         arch.conf
timeout         5
console-mode    keep
editor          no
```

### Copy the UUIDs of the root filesystem and partition

``` bash
blkid /dev/mapper/cryptroot > /boot/loader/entries/arch.conf
blkid /dev/nvme0n1p2 >> /boot/loader/entries/arch.conf
```

### Edit the entry configuration

``` conf title="/boot/loader/entries/arch.conf"
title       Arch Linux
linux       /vmlinuz-linux-lts
initrd      /intel-ucode.img
initrd      /initramfs-linux-lts.img
options     cryptdevice=UUID=<UUID>:cryptroot:allow-discards root="UUID=<UUID>" quiet rw
```

## Reboot the computer

``` bash
exit
umount -R /mnt
reboot
```

---

## References

- [ArchWiki - Mkinitcpio](https://wiki.archlinux.org/index.php/Mkinitcpio)
- [ArchWiki - Dm-crypt / System configuration](https://wiki.archlinux.org/index.php/Dm-crypt/System_configuration#Using_sd-encrypt_hook)
- [ManPage - Mkinitcpio](https://jlk.fjfi.cvut.cz/arch/manpages/man/core/mkinitcpio/mkinitcpio.8.en)
- [ArchWiki - Microcode](https://wiki.archlinux.org/index.php/Microcode)
- [ManPage - Pacman](https://jlk.fjfi.cvut.cz/arch/manpages/man/core/pacman/pacman.8.en)
- [ArchWiki - Systemd-boot](https://wiki.archlinux.org/index.php/Systemd-boot)
- [ArchWiki - Dm-crypt / System configuration](https://wiki.archlinux.org/index.php/Dm-crypt/System_configuration#Using_sd-encrypt_hook)
- [ManPage - Bootctl](https://jlk.fjfi.cvut.cz/arch/manpages/man/core/systemd/bootctl.1.en)
- [ManPage - Blkid](https://jlk.fjfi.cvut.cz/arch/manpages/man/core/util-linux/blkid.8.en)