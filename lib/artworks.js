import fs from 'fs'
import path from 'path'

import matter from 'gray-matter'

import { remark } from 'remark'
import html from 'remark-html'
import remarkGfm from 'remark-gfm'

const artworksDirectory = path.join(process.cwd(), 'src/contents/artworks')

export function getSortedPostsData() {
    //get filenames under /artworks
    const fileNames = fs.readdirSync(artworksDirectory)

    const allPostsData = fileNames.map((fileName) => {
        //remove ".md" from filename to get id
        const id = fileName.replace(/\.md$/, '');

        //read markdown file as string
        const fullPath = path.join(artworksDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        //parse front matter
        const matterResult = matter(fileContents);

        //combine the data with the id
        return {
            id,
            ...matterResult.data,
        };
    });

    //sort posts by date
    return allPostsData.sort((a, b) => {
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    });
}

export function getAllPostIds() {
    const fileNames = fs.readdirSync(artworksDirectory);
    return fileNames.map((fileName) => {
        return {
            params: {
                artworkId: fileName.replace(/\.md$/, ''),
            },
        };
    });
}

export async function getPostData(id) {
    const fullPath = path.join(artworksDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Use remark to convert markdown into HTML string
    const processedContent = await remark()
        .use(html)
        .use(remarkGfm)
        .process(matterResult.content);
    const contentHtml = processedContent.toString();

    // Combine the data with the id and contentHtml
    return {
        id,
        contentHtml,
        ...matterResult.data,
    };
}