import {Modal as AntdModal} from 'antd'
import styled from 'styled-components'

export const Modal = styled(AntdModal)`
  &&& {
    .ant-modal-content {
      border-radius: 45px;
      padding: 20px 50px;
    }

    .ant-modal-body {
      min-height: 200px;
      padding: 24px 0;
    }

    .ant-modal-header {
      border-bottom: 1px solid #979797;
      padding: 12px 0;
    }

    .ant-modal-close {
      right: 40px;
      top: 30px;

      &:hover {
        opacity: 0.6;
      }
      .ant-modal-close-x {
        width: 32px;
        height: 32px;
        font-size: 16px;
        line-height: 32px;
        color: #231f20;
      }
    }

    .ant-modal-footer {
      padding: 12px 0;
      text-align: right;
      border-top: none;
    }
  }
`
