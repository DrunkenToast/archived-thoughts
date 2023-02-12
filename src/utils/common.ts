import type { MarkdownInstance } from "astro";

export async function getAllPosts() {
    const postImportResult = import.meta.glob("../pages/posts/**/*.md", {
        eager: true,
    });
    const posts = Object.values(postImportResult) as MarkdownInstance<
        Record<string, any>
    >[];
    return posts
        .filter((post) => !post.frontmatter.draft)
        .sort(
            (a, b) =>
                new Date(b.frontmatter.date).getTime() -
                new Date(a.frontmatter.date).getTime()
        );
}

export async function getAllTags() {
    const posts = await getAllPosts();
    return [
        ...new Set(
            posts
                .map((post) =>
                    post.frontmatter.tags.map((tag: string) =>
                        tag.toLowerCase()
                    )
                )
                .flat()
        ),
    ];
}

export function filterPostsByTag(
    posts: MarkdownInstance<Record<string, any>>[],
    tag: string
) {
    return posts.filter((post) =>
        post.frontmatter.tags
            .map((tag: string) => tag.toLowerCase())
            .includes(tag)
    );
}
