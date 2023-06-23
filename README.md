<h1 align="center">
  🔌 Integrator UI
</h1>

[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

Simple plugin for observing service logs from various sources.

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Introduction](#introduction)
- [Todo List](#todo-list)
- [Get Started](#get-started)
- [Installation](#installation)
  - [Run](#run)
- [Contributing](#contributing)
- [License](#license)
- [Copyright](#copyright)

## Introduction

Simple plugin for observing service logs from various sources.

## Todo List

- [x] Tabs
- [x] Azure Page
- [x] Log Source page
- [ ] Styling
- [ ] I18n
- [ ] Linting
- [ ] Transform to OpenSearch convention (filenames, folders, etc.)

## Get Started

To clone the repository to your local machine, follow these steps:
1. Open a terminal.
2. Navigate to the directory where you want to clone the repository.
3. Execute the following command:

```shell
    git clone git@github.com:iguit0/integrator-ui.git
```

```bash
    cd integrator-ui
```

## Installation

- OpenSearch instance. If you face any challenges, see more details in the [developer guide](https://github.com/opensearch-project/OpenSearch/blob/main/DEVELOPER_GUIDE.md).

- OpenSearch Dashboard's instance. If you face any challenges, see more details in the [developer guide](https://github.com/opensearch-project/OpenSearch-Dashboards/blob/main/DEVELOPER_GUIDE.md).

- Install plugin in OpenSearch Dashboards. [Follow this guide](https://github.com/opensearch-project/opensearch-plugins/blob/main/INSTALLING.md#installing-opensearch-dashboards-plugins)

### Run

1. Open a OpenSearch Dashboard terminal
```shell
    yarn osd bootstrap && yarn opensearch snapshot
```



2. Open a second OpenSearch Dashboard terminal
```shell
    yarn start
```

Wait for the terminal stop scrolling and go to http://localhost:5603

## Contributing

This project should follow OpenSearch [conventions](https://github.com/opensearch-project/OpenSearch-Dashboards/blob/main/src/core/CONVENTIONS.md#plugin-structure).
If you would like to contribute to this project, please follow the guidelines in the [CONTRIBUTING](./CONTRIBUTING.md) file.

## License
This project is licensed under the [Apache v2.0 License](LICENSE.txt).

## Copyright
Copyright OpenSearch Contributors. See [NOTICE](NOTICE.txt) for details.

