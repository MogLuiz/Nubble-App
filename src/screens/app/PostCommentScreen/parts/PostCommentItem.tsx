import React from 'react';
import {Alert, Pressable} from 'react-native';

import {Box} from '@components/Box';
import {Text} from '@components/Text';
import {ProfileAvatar} from '@components/ProfileAvatar';

import {PostComment, postCommentService} from '@domain/PostComment';
import {usePostCommentRemove} from '@domain/PostComment/useCases/usePostCommentRemove';

interface PostCommentItemProps {
  postComment: PostComment;
  userId: number;
  postAuthorId: number;
  onRemoveComment: () => void;
}
export const PostCommentItem = ({
  postComment,
  onRemoveComment,
  postAuthorId,
  userId,
}: PostCommentItemProps) => {
  const {mutate} = usePostCommentRemove({onSuccess: onRemoveComment});
  const isAllowToDelete = postCommentService.isAllowToDelete(
    postComment,
    userId,
    postAuthorId,
  );

  function onConfirmRemove() {
    Alert.alert('Deseja excluir o comentário?', 'pressione confirmar', [
      {
        text: 'Confirmar',
        onPress: () => mutate(postComment.id),
      },
      {
        text: 'Cancelar',
        style: 'cancel',
      },
    ]);
  }

  return (
    <Pressable disabled={!isAllowToDelete} onLongPress={onConfirmRemove}>
      <Box flexDirection="row" alignItems="center" mb="s16" gap="s12">
        <ProfileAvatar imageURL={postComment.author.profileURL} />
        <Box flex={1}>
          <Text preset="paragraphSmall" bold>
            {postComment.author.userName}
          </Text>
          <Text preset="paragraphSmall" color="gray1">
            {postComment.message} - {postComment.formattedCreatedAt}
          </Text>
        </Box>
      </Box>
    </Pressable>
  );
};
