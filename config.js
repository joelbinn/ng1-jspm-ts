System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  transpiler: "typescript",
  typescriptOptions: {
    "noImplicitAny": true,
    "typeCheck": true,
    "tsconfig": true,
    "resolveAmbientRefs": true
  },
  paths: {
    "npm:*": "jspm_packages/npm/*",
    "github:*": "jspm_packages/github/*"
  },

  packages: {
    "src": {
      "defaultExtension": "ts",
      "meta": {
        "*.ts": {
          "loader": "typescript"
        },
        "*.css": {
          "loader": "css"
        },
        "*.html": {
          "loader": "text"
        }
      }
    }
  },

  map: {
    "bootstrap": "github:twbs/bootstrap@3.3.5",
    "css": "github:systemjs/plugin-css@0.1.19",
    "less": "github:aaike/jspm-less-plugin@0.0.5",
    "typescript": "npm:typescript@1.6.2",
    "github:aaike/jspm-less-plugin@0.0.5": {
      "less.js": "github:distros/less@2.4.0"
    },
    "github:twbs/bootstrap@3.3.5": {
      "jquery": "github:components/jquery@2.1.4"
    }
  }
});
