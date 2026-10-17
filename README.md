# Mr. Maintenance

A componentized maintenance form web application built with Blazor WebAssembly, featuring drag-and-drop interactions and normal and expert user views.

## Background

Originally built as a take-home exercise during my successful interview process with Springbrook Software, where I subsequently joined the engineering team.

This repository preserves the standalone Blazor WebAssembly version under the Mr. Maintenance name as a historical portfolio sample. It demonstrates the interview exercise, rather than production software delivered at Springbrook.

## Demo

[View Mr. Maintenance](https://mrmaintenance.jasontylerrodriguez.com)

## Technologies

- Blazor WebAssembly and C#
- HTML, CSS, and Sass
- JavaScript
- Bootstrap

## Project structure

- `Pages/`: normal and expert user views.
- `Shared/`: reusable form, button, breadcrumb, and layout components, plus the shared model.
- `wwwroot/`: static assets and styles.

## Maintenance status

Preserved as a historical interview project. Pull requests are not currently accepted; feedback is welcome.

## Run locally

With a .NET SDK compatible with `SpringbrookSoftware.csproj` installed:

```bash
dotnet restore
dotnet run
```

Open the local URL printed by the application. The project retains its original framework target; this documentation update does not upgrade its dependencies.

## Sass setup in VS Code

Install the Live Sass Compiler extension and add this configuration to your VS Code settings:

```json
{
    "liveSassCompile.settings.formats": [
        {
            "format": "expanded",
            "extensionName": ".css",
            "savePath": "/wwwroot/css/app.css"
        }
    ]
}
```
