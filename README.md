# *** UNDER DEVELOPMENT ***

# Youtube Offline

Youtube-offline is a free mobile app which downloads youtube videos to make them available offline.

## Todos (feature set)

- [x] Setup CLI Boilerplate
- [ ] Get download task to work


## How to Use?

Clone Repo. These directions assume you have a valid path `~/dev/apps/`.

```sh
$ cd ~/dev/apps/
$ git clone https://github.com/dbishoponline/youtube-offline.git youtube_offline;
$ cd youtube_offline;
```

For Bash

```sh
$ echo 'export PATH=$PATH:~/dev/apps/youtube_offline' >> ~/.bashrc
```

For ZSH

```sh
$ echo 'export PATH=$PATH:~/dev/apps/youtube_offline' >> ~/.zshrc
```

Run 'youtube-offline' command

```sh
$ youtube-offline download [URL]
```
