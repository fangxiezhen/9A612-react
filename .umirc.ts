import { defineConfig } from 'dumi';

export default defineConfig({
  title: '9A612-react',
  favicon: 'https://i.postimg.cc/k590KkhS/612.png',
  logo: 'https://i.postimg.cc/k590KkhS/612.png',
  outputPath: 'docs-dist',
  mode: 'site',
  navs: [
    null,
    {
      title: 'tdesign 组件库',
      path: 'https://tdesign.tencent.com/react/components/button',
    },
  ],
  styles: [`https://unpkg.com/tdesign-react/dist/tdesign.min.css`],
  history: {
    type: 'hash',
  },
  base: '/9A612-react',
  publicPath: './',
});
