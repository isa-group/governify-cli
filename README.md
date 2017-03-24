# governify-cli

## 1. Install governify-cli
```bash
npm install governify-cli -g
```
## 2. Use cli
```bash
isa@host:~/lab$ gov
governify-cli$

 ```

 A prompt will be displayed as "governify-cli"

### 2.1. Help inside own cli

```bash
governify-cli$ help

  Commands:

    help [command...]                                       Provides help
                                                            for a given
                                                            command.
    exit                                                    Exits
                                                            application.
    testlimittime <url> <method> <count> <duration> [body]  
    testinfinite <url> <method> <count> [body]              
    testfromfile <path>                                     
    ls [dir]                                                
    mkdir [dir]                                             
    pwd [dir]
```
### 2.2 Examples

Where are cli executing...

```bash
governify-cli$ pwd
/home/quique/lab
```
Doing any tests
```bash
governify-cli$ testlimittime http://www.google.es GET 3 2
{ totalRequest: 6,
  success: 6,
  error: 0,
  totalStack: 2,
  startTime: "2017-03-24T18:34:01.229Z",
  finishTime: "2017-03-24T18:34:03.477Z",
  lastedFor: "2248 ms",
  url: "http://www.google.es",
  method: 'GET' }

```

## 3. Use cli from bash shell

You can interact with the command called gov


### 3.1. Help outside cli

```bash

isa@host:~/lab$ gov --help

  Usage: gov [options] [command]


  Commands:

    test [options]   read test from file
    cli              enter cli mode


  Options:

    -h, --help     output usage information
    -V, --version  output the version number

```

### 3.2. Examples

```bash
gov test --infiniteRequests -u http://google.es -c 5  -m GET
{ totalRequest: 5,
  success: 5,
  error: 0,
  startTime: '2017-03-24T18:41:05.759Z',
  finishTime: '2017-03-24T18:41:06.292Z',
  lastedFor: '533 ms' }
```



## Latest release

The version 0.0.0 is the latest stable version of project-template-nodejs component.
see [release note](https://github.com/isa-group/governify-cli/releases/tag/0.0.0) for details.

For running:

- Download latest version from [0.0.0](https://github.com/isa-group/governify-cli/releases/tag/0.0.0)