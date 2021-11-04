import React from 'react'

import {CloseOutlined} from '@ant-design/icons'
import {PropTypes} from 'prop-types'

import BaseButton from '../buttons/BaseButton'
import {Modal} from './BaseModalStyles'

const BaseModal = ({
  open,
  onClose,
  title,
  onOk,
  onCancel,
  okButtonProps,
  okText,
  cancelText,
  width,
  children
}) => (
  <Modal
    visible={open}
    onCancel={onClose}
    maskClosable={false}
    title={title}
    width={width}
    closeIcon={<CloseOutlined />}
    footer={
      <>
        {onCancel && (
          <div style={{display: 'inline-block', marginRight: '10px'}}>
            <BaseButton auto onClick={onCancel} type='secondary'>
              {cancelText}
            </BaseButton>
          </div>
        )}
        <BaseButton auto onClick={onOk} {...okButtonProps}>
          {okText}
        </BaseButton>
      </>
    }
  >
    {children}
  </Modal>
)

BaseModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.element
  ]),
  onOk: PropTypes.func.isRequired,
  onCancel: PropTypes.func,
  okText: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.element
  ]),
  cancelText: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.element
  ]),
  okButtonProps: PropTypes.object,
  width: PropTypes.number,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
    PropTypes.element,
    PropTypes.any
  ])
}

BaseModal.defaultProps = {
  title: 'Modal',
  okText: 'Confirm',
  cancelText: 'Cancel',
  onCancel: undefined,
  width: 900,
  okButtonProps: {},
  children: undefined
}

export default BaseModal
