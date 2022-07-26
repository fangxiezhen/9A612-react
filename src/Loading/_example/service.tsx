import React from 'react';
import { loading, Button } from '9A612-react';

export default function Service() {
  const handleFullscreen = () => {
    const loadInstance = loading(true);
    setTimeout(() => loadInstance.hide(), 1000);
  };

  return (
    <>
      <div
        id="loading-service"
        style={{
          width: '100%',
          height: '60px',
          textAlign: 'center',
          lineHeight: '60px',
          position: 'relative',
        }}
      >
        我是service的容器
      </div>

      <div>
        <Button onClick={handleFullscreen} style={{ marginRight: 20 }}>
          服务加载方式（全屏）
        </Button>
      </div>
    </>
  );
}
