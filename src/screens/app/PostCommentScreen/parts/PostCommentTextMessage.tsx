import React, {useState} from 'react';
import {Keyboard} from 'react-native';

import {TextMessage} from '@components/TextMessage';

import {usePostCommentCreate} from '@domain/PostComment/useCases/usePostCommentCreate';

interface PostCommentTextMessageProps {
  postId: number;
  onAddComment?: () => void;
}

export const PostCommentTextMessage = ({
  postId,
  onAddComment,
}: PostCommentTextMessageProps) => {
  const [comment, setComment] = useState('');
  const {createPostComment} = usePostCommentCreate(postId);

  const onPressSend = async () => {
    try {
      await createPostComment(comment);
      setComment('');
      Keyboard.dismiss();
      onAddComment?.();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <TextMessage
      onPressSend={onPressSend}
      onChangeText={setComment}
      value={comment}
      placeholder="Adicione um comentário"
    />
  );
};
