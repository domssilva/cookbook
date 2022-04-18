# SETUP

1. get vundle to handle all the vim plugins
```bash
git clone https://github.com/VundleVim/Vundle.vim.git ~/.vim/bundle/Vundle.vim
```

2. after saving the file .vimrc, do:
```bash
:source %
:PluginInstall # installs all plugins for you
```

## YOU COMPLETEME PYTHON CONFIG
```bash
cd ~/.vim/bundle/youcompleteme/
./install.py --ts-completer # js & ts
./install.py --go-completer 
```

#### ERROR: Python headers are missing in /usr/include
https://github.com/nodejh/dotfiles/issues/1

solution:
```bash
apt-get install python3-dev cmake
```
