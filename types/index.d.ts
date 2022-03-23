export type PostTypes = 'sale'|'selling'|'lost'|'bulletin';

// TODO: add more permissable tags
export type TagTypes = 'tech'|'clothing'|'help'|'opportunities'|'lost'|'found';

interface UserData {
    email: string;
    name: string;
    phone?: string;
}

interface PostData {
    id: string;
    title: string;
    description: string;
    // Type of the post, can only be PostTypes
    type: PostTypes;
    // Imgur URL to the image
    thumbnail?: string;
    // Link to the post
    link: string;
    // Tags of the post, can only be TagTypes
    tags: TagTypes[];
    user: UserData;
}

export default {}
export type { PostData, UserData }
