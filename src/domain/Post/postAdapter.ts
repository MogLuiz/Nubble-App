import {Post, PostAPI} from '@domain/Post';

/**
 * @description Converts a PostAPI object to a Post object
 */
const toPost = (postAPI: PostAPI): Post => ({
  id: postAPI.id,
  text: postAPI.text,
  author: {
    profileURL: postAPI.user.profile_url,
    name: postAPI.user.full_name,
    userName: postAPI.user.username,
    id: postAPI.user.id,
  },
  imageURL: postAPI.image_url,
  reactionCount: parseInt(postAPI.meta.like_count, 10),
  commentCount: parseInt(postAPI.meta.comments_count, 10),
  favoriteCount: parseInt(postAPI.meta.favorite_count, 10),
});

export const postAdapter = {toPost};
