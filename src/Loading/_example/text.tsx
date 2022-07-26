import React from 'react';
import { Loading } from '9A612-react';

export default function TextExample() {
  return <Loading loading={true} text="静态文字加载中..." indicator={false}></Loading>;
}
