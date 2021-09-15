/**
 * Copyright 2021 ZUP IT SERVICOS EM TECNOLOGIA E INOVACAO SA
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// {
//     name: '{{name}}',
//     repo: '',
//     loadSidebar: true,
//     auto2top: true,
//     homepage: 'index.md',
//     plantuml: {
//       skin: 'classic'
//     },
//     stylesheet: ''
//   }
module.exports = options => {
  return `<!DOCTYPE html>
    <html lang="en">

    <head>
      <meta charset="UTF-8">
      <title>Horusec-C4Model</title>
      <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      <meta name="description" content="Description">
      <meta name="viewport"
        content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
      <link rel="stylesheet" href="${options.stylesheet}">
      <base href="https://horusec.io/c4model/">
    </head>

    <body>
      <div id="app"></div>
      <script>
        window.$docsify = ${JSON.stringify(options, null, 2)};
      </script>
      <script src="//unpkg.com/docsify/lib/docsify.min.js"></script>
      <script src="//unpkg.com/docsify-plantuml/dist/docsify-plantuml.min.js"></script>
      <script src="//cdn.jsdelivr.net/npm/docsify/lib/plugins/zoom-image.min.js"></script>
    </body>

    </html>`;
};