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
  <html lang="en-US">
    <head>
      <meta charset="UTF-8">
      <title>Horusec C4Model</title>
  
      <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      <meta name="viewport"content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
  
      <meta name="description" content="Horusec is an open source framework that enhances the identificationof vulnerabilities in your project with just one command.">
      <meta name="image" content="//docs.horusec.io/c4model/assets/images/screen.png" />
      
      <!-- OG tags-->
      <meta property="og:title" content="Horusec" />
      <meta property="og:url" content="https://docs.horusec.io/c4model" />
      <meta property="og:type" content="website"
      <meta property="og:image" content="//docs.horusec.io/c4model/assets/images/screen.png" />
      <meta property="og:description" content="Horusec is an open source framework that enhances the identificationof vulnerabilities in your project with just one command." />
      <meta property="og:locale" content="en-US" />
      <meta property="og:site_name" content="Horusec" />
      <meta property="og:titleTemplate" content="Horusec" />
      <meta property="og:locale:alternate" content="pt-BR" />
      <!-- OG tags-->
  
      <link rel="icon" href="//horusec.io/site/favicon-32x32.png?v=c7be0f0b3cbcb493ed0d4426e278997f" />
      <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/docsify-sidebar-collapse/dist/sidebar.min.css" />
      <link href="//docs.horusec.io/c4model/assets/css/theme.css" rel="stylesheet" type="text/css" />
    </head>
  
    <body>
      <div id="app-c4model"></div>
      <nav class="language-nav">
        <div class="language-nav-head">
          <div class="language-nav-head-text">Português</div>
          <div class="language-nav-head-icon"></div>
        </div>
        <div class="language-nav-main">
          <ul class="language-nav-main-list">
            <li class="language-nav-main-list-item" data-value="/c4model/en">
              English
            </li>
            <li class="language-nav-main-list-item" data-value="/c4model/pt-br">
              Português
            </li>
          </ul>
        </div>
      </nav>
      <script>
        window.$docsify = ${JSON.stringify(
          {
            ...options,
            el: '#app-c4model',
            loadSidebar: true,
            sidebarDisplayLevel: 1,
            alias: {
              '/.*/_sidebar.md': '/_sidebar.md'
            },
            logo:
              '//raw.githubusercontent.com/ZupIT/horusec/main/assets/horusec_logo.png'
          },
          null,
          2
        )};
      </script>
      <script src="//unpkg.com/docsify/lib/docsify.min.js"></script>
      <script src="//unpkg.com/docsify-plantuml/dist/docsify-plantuml.min.js"></script>
      <script src="//cdn.jsdelivr.net/npm/docsify/lib/plugins/zoom-image.min.js"></script>
      <script src="//cdn.jsdelivr.net/npm/docsify/lib/docsify.min.js"></script>
      <script src="//cdn.jsdelivr.net/npm/docsify-sidebar-collapse/dist/docsify-sidebar-collapse.min.js"></script>
      <script src="//docs.horusec.io/c4model/assets/js/theme.js"></script>
    </body>
  </html>`
}