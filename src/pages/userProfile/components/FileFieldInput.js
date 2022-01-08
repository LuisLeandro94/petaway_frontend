import React, {useCallback} from 'react'

import {CameraOutlined} from '@ant-design/icons'
import {Avatar, Badge} from 'antd'
import {useDropzone} from 'react-dropzone'

import {UserData} from '../../../shared/mockup/Mockup'

const FileField = ({
  required,
  input,
  dropZoneProps,
  onChange,
  ...props
}) => {
  const onDrop = useCallback(
    (files) => {
      input.onChange(files)
    },
    [input]
  )

  const {getRootProps, getInputProps, acceptedFiles} = useDropzone({
    onDrop,
    noDrag: true,
    ...dropZoneProps
  })

  const files = acceptedFiles.map((file) => (
    <span key={file.path}>
      {file.path} - {file.size} bytes
    </span>
  ))

  return (
    <div {...getRootProps()} onChange={onChange}>
      <input {...getInputProps()} />
      <Badge
        style={{
          color: '#00A6AA',
          backgroundColor: '#f8f8f8',
          border: '2px solid #00A6AA',
          width: '30px',
          height: '30px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '30px',
          cursor: 'pointer'
        }}
        offset={[-20, 100]}
        count={<CameraOutlined />}
      >
        <Avatar
          {...props}
          size={120}
          src={UserData.profilePicture}
          style={{border: '2px solid #00A6AA'}}
        />
      </Badge>
    </div>
  )
}

export default FileField
