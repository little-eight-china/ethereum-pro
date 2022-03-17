import React from 'react';
import { Card, Button } from 'antd';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { useIntl } from 'umi';
import { connectWallet } from '@/services/wallet';

const Admin: React.FC = () => {
  const intl = useIntl();
  return (
    <PageHeaderWrapper
      content={intl.formatMessage({
        id: 'pages.admin.subPage.title',
        defaultMessage: 'This page can only be viewed by admin',
      })}
    >
      <Card>
      <Button
        type="primary"
        key="primary"
        onClick={() => {
          connectWallet();
        }}
        >
          连接钱包
    </Button>
      </Card>
    </PageHeaderWrapper>
  );
};

export default Admin;
