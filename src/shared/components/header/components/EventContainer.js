import React, {useEffect, useState} from 'react'

import {CloseCircleOutlined, CheckCircleOutlined} from '@ant-design/icons'
import {PropTypes} from 'prop-types'
import {Translate} from 'react-localize-redux'

import {
  AcceptButton,
  DetailsWrapper,
  EventButtons,
  EventCard,
  EventDate,
  EventDetails,
  EventName,
  EventPet,
  EventRightSide,
  EventSender,
  EventService,
  ItalicSpan,
  RejectButton
} from '../HeaderStyles'

const EventContainer = ({evt, acceptEvent, rejectEvent, inc}) => {
  const [dateString, setDateString] = useState('')
  const [timeString, setTimeString] = useState('')

  useEffect(() => {
    if (evt.date) {
      const index = evt?.date.indexOf('T')
      setDateString(evt?.date.substring(0, index))
      const tempTime = evt?.date.substring(index + 1, evt?.date.length - 1)
      const tempIndex = tempTime.indexOf('.')
      setTimeString(tempTime.substring(0, tempIndex))
    }
  })

  return (
    <EventCard eventStatus={evt?.status}>
      <EventDetails>
        <EventSender>
          <Translate id='FROM' />
        </EventSender>
        <DetailsWrapper>
          <EventName>
            {evt?.user?.userData?.firstName}{' '}
            {evt?.user?.userData?.lastName}
          </EventName>
          <EventPet>
            <ItalicSpan>
              <Translate id='PET' />:
            </ItalicSpan>
            {'  '}
            {evt?.pet?.type}
          </EventPet>
          <EventService>
            <ItalicSpan>
              <Translate id='SERVICE' />:
            </ItalicSpan>
            {'  '}
            {evt?.service?.type}
          </EventService>
        </DetailsWrapper>
      </EventDetails>
      <EventRightSide>
        <EventDate>{dateString}</EventDate>
        <EventDate>{timeString}</EventDate>
        <EventButtons>
          {evt?.status === 1 && inc && (
            <>
              <RejectButton onClick={() => rejectEvent(evt?.id)}>
                <Translate id='REJECT' />
              </RejectButton>
              <AcceptButton onClick={() => acceptEvent(evt?.id)}>
                <Translate id='ACCEPT' />
              </AcceptButton>
            </>
          )}
          {evt?.status === 2 && (
            <CloseCircleOutlined
              style={{fontSize: '26px', color: 'red'}}
            />
          )}
          {evt?.status === 3 && (
            <CheckCircleOutlined
              style={{fontSize: '26px', color: 'green'}}
            />
          )}
        </EventButtons>
      </EventRightSide>
    </EventCard>
  )
}

EventContainer.propTypes = {
  evt: PropTypes.object,
  acceptEvent: PropTypes.func,
  rejectEvent: PropTypes.func,
  inc: PropTypes.bool
}

EventContainer.defaultProps = {
  evt: {},
  acceptEvent: () => {},
  rejectEvent: () => {},
  inc: false
}

export default EventContainer
