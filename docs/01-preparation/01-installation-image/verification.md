---
id: verification
title: Verification
slug: /installation-image/verification
---

<head>
  <title>Installation image verification | Arcadia</title>
</head>

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This page describes how to verify if the previously downloaded ISO image is strictly identical and has the same signature as the ISO image created by the Arch Linux team. Although this is extremely rare, it is possible that a mirror provide a modified and therefore dangerous ISO image.

## Verify the folder structure

Before starting, verify that you have the 3 files below in the **same folder**. The commands displayed in this section must be running in this folder.

| Filename                                  | Description               |
| :---------------------------------------- | :------------------------ |
| `archlinux-year.day.month-x86_64.iso`     | ISO image                 |
| `archlinux-year.day.month-x86_64.iso.txt` | SHA-1 or BLAKE2b checksum |
| `archlinux-year.day.month-x86_64.iso.sig` | Signature                 |

## Verify the integrity of the Arch Linux ISO image

<Tabs>
  <TabItem value="sha1" label="SHA-1" default>

``` bash
sha1sum -c archlinux-year.month.day-x86_64.iso.txt
```

  </TabItem>
  <TabItem value="b2" label="BLAKE2b">

``` bash
b2sum -c archlinux-year.month.day-x86_64.iso.txt
```

  </TabItem>
</Tabs>

## Verify the authenticity of the Arch Linux ISO image

This command differ from the official Arch Linux installation guide. The keyserver is explicitly declared as we dont know the GnuPG default keyserver configured by your Linux distribution.

<Tabs>
  <TabItem value="anyLinux" label="Any linux distribution" default>

``` bash
gpg --keyserver hkps://keyserver.ubuntu.com \
    --keyserver-options auto-key-retrieve \
    --verify archlinux-year.month.day-x86_64.iso.sig
```

  </TabItem>
  <TabItem value="archLinux" label="Arch Linux">

``` bash
pacman-key -v archlinux-year.month.day-x86_64.iso.sig
```

  </TabItem>
</Tabs>

---

## References

- [ArchWiki - Installation guide](https://wiki.archlinux.org/index.php/Installation_guide#Verify_signature)
- [ManPage - Md5sum](https://jlk.fjfi.cvut.cz/arch/manpages/man/core/coreutils/md5sum.1.en)
- [ManPage - Sha1sum](https://jlk.fjfi.cvut.cz/arch/manpages/man/core/coreutils/sha1sum.1.en)
- [ArchWiki - Installation guide](https://wiki.archlinux.org/index.php/Installation_guide#Verify_signature)
- [ArchWiki - GnuPG](https://wiki.archlinux.org/index.php/GnuPG#Use_a_keyserver)
- [ManPage - Gpg](https://jlk.fjfi.cvut.cz/arch/manpages/man/core/gnupg/gpg.1.en)
- [SKS keyservers](https://sks-keyservers.net/)