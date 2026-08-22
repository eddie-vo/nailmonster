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
  mediaType?: string;
  sizes?: {
    small?: { mediaUrl?: string };
    medium?: { mediaUrl?: string };
  };
};

export async function getInstagramPosts(
  limit = 6,
): Promise<InstagramPost[]> {
  const feedId = process.env.BEHOLD_FEED_ID;

  if (!feedId) {
    return [];
  }

  try {
    const response = await fetch(`https://feeds.behold.so/${feedId}`, {
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      console.error("Behold feed failed", response.status);
      return [];
    }

    const payload: unknown = await response.json();
    const rawPosts = Array.isArray(payload)
      ? payload
      : ((payload as { posts?: BeholdPost[] }).posts ?? []);

    return rawPosts
      .map((post: BeholdPost) => ({
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
  } catch (error) {
    console.error("Behold feed error", error);
    return [];
  }
}
