vs code - setting up sass compiling
- extension: live-sass compile
   - go to settigs -> formats
        - code:
```      
{
    "workbench.colorTheme": "GitHub Dark Dimmed",
    "window.zoomLevel": -1,
    "[html]": {
        "editor.defaultFormatter": "vscode.html-language-features"
    },
    "liveSassCompile.settings.formats": [
        {
            "format": "expanded",
            "extensionName": ".css",
            "savePath": "/wwwroot/css/app.css"
        }
    ]
}
```
