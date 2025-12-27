import express from 'express';
import fs from 'fs';
import path from 'path';
import { marked } from 'marked';
import { wrapHtml } from './render.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    const markdown = fs.readFileSync('README.md', 'utf-8');
    res.send(wrapHtml(marked(markdown), 'Courses'));
});

app.use('/All/pdf', express.static(path.join(process.cwd(), 'All', 'pdf')));

app.get(/\.md$/, (req, res) => {
    const requested = path.normalize(path.join(process.cwd(), req.path));
    const markdown = fs.readFileSync(requested, 'utf-8');
    const title = path.basename(requested);
    res.send(wrapHtml(marked(markdown), title));
});

app.listen(3000, () => {
    console.log(`Server running on port ${3000}`);
});