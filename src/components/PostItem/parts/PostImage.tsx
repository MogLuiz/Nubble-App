import React from 'react';
import {Dimensions, Image} from 'react-native';

import {IPost} from '@domain/Post';

type PostImageProps = Pick<IPost, 'imageURL'>;

export function PostImage({imageURL}: PostImageProps) {
  return (
    <Image
      source={{uri: imageURL}}
      resizeMode="cover"
      style={{
        width: Dimensions.get('screen').width,
        height: 300,
        marginHorizontal: -24,
      }}
    />
  );
}
