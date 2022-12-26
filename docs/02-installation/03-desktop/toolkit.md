---
id: toolkit
title: Toolkit
slug: /installation/desktop/toolkit
---

<head>
  <title>Desktop toolkit | Arcadia</title>
</head>

This page describes how to install and configure the toolkit on the system.

## Installation

``` bash
sudo pacman -S gtk3 arc-solid-gtk-theme papirus-icon-theme
```

## Configuration

```ini title="$XDG_CONFIG_HOME/gtk-3.0/settings.ini"
[Settings]
gtk-icon-theme-name = Adwaita
gtk-theme-name = Adwaita
gtk-font-name = DejaVu Sans 11
```