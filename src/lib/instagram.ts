export type InstagramPost = {
  id: string;
  permalink: string;
  imageUrl: string;
  caption?: string;
};

type BeholdPost = {
  id: string;
  permalink: string;
  mediaUrl?: string;
  thumbnailUrl?: string;
  caption?: string;
  sizes?: {
    small?: { mediaUrl?: string };
    medium?: { mediaUrl?: string };
  };
};

function parseBeholdPosts(payload: unknown): BeholdPost[] {
  return Array.isArray(payload)
    ? payload
    : ((payload as { posts?: BeholdPost[] }).posts ?? []);
}

export function mapBeholdPosts(posts: BeholdPost[], limit = 6): InstagramPost[] {
  return posts
    .map((post) => ({
      id: post.id,
      permalink: post.permalink,
      imageUrl:
        post.sizes?.medium?.mediaUrl ||
        post.sizes?.small?.mediaUrl ||
        post.thumbnailUrl ||
        post.mediaUrl ||
        "",
      caption: post.caption,
    }))
    .filter((post) => post.imageUrl)
    .slice(0, limit);
}

export async function fetchInstagramPosts(
  feedId: string,
  limit = 6,
): Promise<InstagramPost[]> {
  const response = await fetch(`https://feeds.behold.so/${feedId}`);

  if (!response.ok) {
    throw new Error(`Behold feed failed: ${response.status}`);
  }

  const payload: unknown = await response.json();
  return mapBeholdPosts(parseBeholdPosts(payload), limit);
}
