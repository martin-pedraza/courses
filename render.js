export function wrapHtml(content, title = 'Markdown') {
    return `
        <!doctype html>
        <html>
            <head>
                <meta charset="utf-8">
                <title>${title}</title>
                <style>
                    body { 
                        font-family: system-ui, sans-serif; 
                        max-width: 800px; 
                        margin: 0 auto; 
                        padding: 20px; 
                        line-height: 1.6; 
                    }
                    nav { 
                        display: flex; 
                        gap: 16px; 
                        margin-bottom: 24px; 
                    }
                    nav a { 
                        color: #0366d6; 
                        text-decoration: none; 
                    }
                    pre { 
                        background: #f5f5f5; 
                        padding: 10px; 
                        overflow: auto; 
                    }
                </style>
            </head>
            <body>
                <nav>
                    <a href="/">Home</a>
                    <a href="/All/All.md">All</a>
                    <a href="/By-Provider/Provider.md">By-Provider</a>
                    <a href="/By-Skill/Skill.md">By-Skill</a>
                    <a href="/By-Year/Year.md">By-Year</a>
                </nav>
                <main>${content}</main>
            </body>
        </html>`;
}