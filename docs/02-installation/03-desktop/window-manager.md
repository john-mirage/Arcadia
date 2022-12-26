---
id: window-manager
title: Window manager
slug: /installation/desktop/window-manager
---

<head>
  <title>Desktop window manager | Arcadia</title>
</head>

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This page describes how to install and configure a window manager on the system.

## Installation

``` bash
sudo pacman -S qtile xcb-util-cursor
```

## Configuration

<Tabs>
  <TabItem value="imports" label="Imports" default>

```python title="$XDG_CONFIG_HOME/qtile/config.py"
import os
import subprocess
from typing          import List
from libqtile        import bar, layout, widget, extension
from libqtile.config import Click, Drag, Group, ScratchPad, DropDown, Key, Match, Screen
from libqtile.lazy   import lazy
```

  </TabItem>
  <TabItem value="controls" label="Controls">

```python title="$XDG_CONFIG_HOME/qtile/config.py"
mod = "mod4"
keys = [
    Key(
        [mod], "h",
        lazy.layout.left(),
        desc = "Move focus to left"
    ),
    Key(
        [mod], "l",
        lazy.layout.right(),
        desc = "Move focus to right"
    ),
    Key(
        [mod], "j",
        lazy.layout.down(),
        desc = "Move focus down"
    ),
    Key(
        [mod], "k",
        lazy.layout.up(),
        desc = "Move focus up"
    ),
    Key(
        [mod], "space",
        lazy.layout.next(),
        desc = "Move window focus to other window"
    ),
    Key(
        [mod, "shift"], "h",
        lazy.layout.shuffle_left(),
        desc = "Move window to the left"
    ),
    Key(
        [mod, "shift"], "l",
        lazy.layout.shuffle_right(),
        desc = "Move window to the right"
    ),
    Key(
        [mod, "shift"], "j",
        lazy.layout.shuffle_down(),
        desc = "Move window down"
    ),
    Key(
        [mod, "shift"], "k",
        lazy.layout.shuffle_up(),
        desc = "Move window up"
    ),
    Key(
        [mod, "control"], "h",
        lazy.layout.grow_left(),
        desc = "Grow window to the left"
    ),
    Key(
        [mod, "control"], "l",
        lazy.layout.grow_right(),
        desc = "Grow window to the right"
    ),
    Key(
        [mod, "control"], "j",
        lazy.layout.grow_down(),
        desc = "Grow window down"
    ),
    Key(
        [mod, "control"], "k",
        lazy.layout.grow_up(),
        desc = "Grow window up"
    ),
    Key(
        [mod], "n",
        lazy.layout.normalize(),
        desc = "Reset all window sizes"
    ),
    Key(
        [mod, "shift"], "c",
        lazy.window.kill(),
        desc = "Kill focused window"
    ),
    Key(
        [mod], "Return",
        lazy.spawn("alacritty"),
        desc = "Launch terminal"
    ),
    Key(
        [mod], "F12",
        lazy.group["Console"].dropdown_toggle("Terminal"),
        desc = "Launch dropdown terminal"
    ),
    Key(
        [mod], "F11",
        lazy.group["Console"].dropdown_toggle("Keepass"),
        desc = "Launch dropdown Keepass"
    ),
    Key(
        [mod], "f",
        lazy.spawn("firefox"),
        desc = "Launch Mozilla Firefox"
    ),
    Key(
        [mod], "t",
        lazy.spawn("thunderbird"),
        desc = "Launch Mozilla Thunderbird"
    ),
    Key(
        [mod], "e",
        lazy.spawn("alacritty --title Neovim --command bash -c 'sleep 0.05 && nvim'"),
        desc = "Launch Neovim"
    ),
    Key(
        [mod], "p",
        lazy.spawn("rofi -show run"),
        desc = "Launch Rofi"
    ),
    Key(
        [mod], "Tab",
        lazy.next_layout(),
        desc = "Toggle between layouts"
    ),
    Key(
        [mod, "control"], "r",
        lazy.restart(),
        desc = "Restart Qtile"
    ),
    Key(
        [mod, "control"], "q",
        lazy.shutdown(),
        desc = "Shutdown Qtile"
    ),
]
mouse = [
    Drag(
        [mod], "Button1",
        lazy.window.set_position_floating(),
        start = lazy.window.get_position()
    ),
    Drag(
        [mod], "Button3",
        lazy.window.set_size_floating(),
        start = lazy.window.get_size()
    ),
    Click(
        [mod], "Button2",
        lazy.window.bring_to_front()
    )
]
```

  </TabItem>
  <TabItem value="groups" label="Groups">

```python title="$XDG_CONFIG_HOME/qtile/config.py"
groups = [
    ScratchPad("Console", [
        DropDown(
            "Terminal",
            "alacritty",
            height  = 0.4,
            opacity = 0,
        ),
        DropDown(
            "Keepass",
            "keepassxc",
            height  = 0.6,
            opacity = 0,
            x       = 0.3,
            width   = 0.4,
        )
    ]),
]
workspaces = [
    {
        "name"   : "Firefox",
        "key"    : "ampersand",
        "matches": [
            Match(wm_class = ["firefox"]),
        ],
        "layout" : "columns"
    },
    {
        "name"   : "Thunderbird",
        "key"    : "eacute",
        "matches": [
            Match(wm_class = ["Thunderbird"]),
        ],
        "layout" : "columns"
    },
    {
        "name"   : "Emacs",
        "key"    : "quotedbl",
        "matches": [
            Match(wm_class = ["emacs"]),
            Match(title = ["Neovim"])
        ],
        "layout" : "columns"
    }
]
for workspace in workspaces:
    groups.append(
        Group(
            workspace["name"],
            matches = workspace["matches"],
            layout  = workspace["layout"],
        )
    )
    keys.extend(
        [
            Key(
                [mod], workspace["key"],
                lazy.group[workspace["name"]].toscreen(),
                desc = "Switch to group {}".format(workspace["name"])
            ),
            Key(
                [mod, "shift"], workspace["key"],
                lazy.window.togroup(workspace["name"], switch_group = True),
                desc = "Switch to & move focused window to group {}".format(workspace["name"])
            ),
        ]
    )
```

  </TabItem>
  <TabItem value="colors" label="Colors">

```python title="$XDG_CONFIG_HOME/qtile/config.py"
colors = {
    "foreground": "#ABB2BF",
    "background": "#282C34",
    "disabled"  : "#5C6370",
    "red"       : "#E06C75",
    "green"     : "#98C379",
    "yellow"    : "#E5C07B",
    "blue"      : "#61AFEF",
    "magenta"   : "#C678DD",
    "cyan"      : "#56B6C2"
}
```

  </TabItem>
  <TabItem value="layouts" label="Layouts">

```python title="$XDG_CONFIG_HOME/qtile/config.py"
layouts = [
    layout.Columns(
        border_focus        = colors["blue"],
        border_focus_stack  = colors["blue"],
        border_normal       = colors["disabled"],
        border_normal_stack = colors["disabled"],
        border_on_single    = True,
        border_width        = 2,
        margin              = [0, 8, 8, 8]
    ),
]
floating_layout = layout.Floating(
    border_focus = colors["magenta"],
    border_width = 2,
    float_rules  = [
        *layout.Floating.default_float_rules,
        Match(wm_class = "confirmreset"), # gitk
        Match(wm_class = "makebranch"),   # gitk
        Match(wm_class = "maketag"),      # gitk
        Match(wm_class = "ssh-askpass"),  # ssh-askpass
        Match(title = "branchdialog"),    # gitk
        Match(title = "pinentry")         # GPG key password entry
    ],
)
```

  </TabItem>
  <TabItem value="screens" label="Screens">

```python title="$XDG_CONFIG_HOME/qtile/config.py"
widget_defaults = {
    "font"    : "Fira Sans Medium",
    "fontsize": 13,
    "padding" : 0,
    "margin_x": 16
}
extension_defaults = widget_defaults.copy()
screens = [
    Screen(
        wallpaper      = "~/Images/wallpaper.jpg",
        wallpaper_mode = "fill",
        top = bar.Bar(
            [
                widget.GroupBox(
                    highlight_method            = "block",
                    block_highlight_text_color  = colors["background"],
                    this_current_screen_border  = colors["green"],
                    active                      = colors["green"],
                    inactive                    = colors["disabled"],
                    padding_x                   = 4,
                    padding_y                   = 2,
                    rounded                     = False,
                    spacing                     = 4
                ),
                widget.Spacer(),
                widget.WindowName(
                    width              = bar.CALCULATED,
                    foreground         = colors["blue"],
                    padding            = 0,
                    max_chars          = 100,
                    empty_group_string = "Bureau"
                ),
                widget.Spacer(),
                widget.Clock(
                    foreground = colors["yellow"],
                    format     = "%A %d %B %Y  |  %H:%M",
                    padding    = 16
                ),
            ],
            background = colors["background"],
            margin     = 16,
            size       = 40
        ),
        bottom = bar.Gap(8),
        left   = bar.Gap(8),
        right  = bar.Gap(8)
    ),
]
```

  </TabItem>
  <TabItem value="others" label="Others">

```python title="$XDG_CONFIG_HOME/qtile/config.py"
dgroups_key_binder = None
dgroups_app_rules = []  # type: List
follow_mouse_focus = True
bring_front_click = False
cursor_warp = False
auto_fullscreen = True
focus_on_window_activation = "smart"
reconfigure_screens = True
wmname = "LG3D"
```

  </TabItem>
</Tabs>

## Startup setup

```python title="$XDG_CONFIG_HOME/qtile/config.py"
@hook.subscribe.startup_once
def autostart():
    home = os.path.expanduser('~/.config/qtile/autostart.sh')
    subprocess.call([home])
```

```shell title="$XDG_CONFIG_HOME/qtile/autostart.sh"
#!/bin/bash

xsetroot -cursor_name left_ptr
setxkbmap fr &
numlockx &
lxsession &
```

```shell title="$HOME/.xinitrc"
exec qtile start
```

```shell title="$HOME/.bashrc"
if [ -z "${DISPLAY}" ] && [ "${XDG_VTNR}" -eq 1 ]; then
  exec startx
fi
```