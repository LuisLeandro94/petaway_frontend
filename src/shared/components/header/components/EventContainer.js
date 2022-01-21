import React, {useEffect, useState} from 'react'

import {CloseCircleOutlined, CheckCircleOutlined} from '@ant-design/icons'

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

const EventContainer = ({event, acceptEvent, rejectEvent, incoming}) => {
  const [dateString, setDateString] = useState('')
  const [timeString, setTimeString] = useState('')

  useEffect(() => {
    const index = event?.date.indexOf('T')
    setDateString(event?.date.substring(0, index))
    const tempTime = event?.date.substring(
      index + 1,
      event?.date.length - 1
    )
    const tempIndex = tempTime.indexOf('.')
    setTimeString(tempTime.substring(0, tempIndex))
  })

  return (
    <EventCard eventStatus={event?.status}>
      <EventDetails>
        <EventSender>From</EventSender>
        <DetailsWrapper>
          <EventName>
            {event?.user?.userData?.firstName}{' '}
            {event?.user?.userData?.lastName}
          </EventName>
          <EventPet>
            <ItalicSpan>Pet:</ItalicSpan>
            {'  '}
            {event?.pet?.type}
          </EventPet>
          <EventService>
            <ItalicSpan>Service:</ItalicSpan>
            {'  '}
            {event?.service?.type}
          </EventService>
        </DetailsWrapper>
      </EventDetails>
      <EventRightSide>
        <EventDate>{dateString}</EventDate>
        <EventDate>{timeString}</EventDate>
        <EventButtons>
          {event?.status === 1 && incoming && (
            <>
              <RejectButton onClick={() => rejectEvent(event?.id)}>
                Reject
              </RejectButton>
              <AcceptButton onClick={() => acceptEvent(event?.id)}>
                Accept
              </AcceptButton>
            </>
          )}
          {event?.status === 2 && (
            <CloseCircleOutlined
              style={{fontSize: '26px', color: 'red'}}
            />
          )}
          {event?.status === 3 && (
            <CheckCircleOutlined
              style={{fontSize: '26px', color: 'green'}}
            />
          )}
        </EventButtons>
      </EventRightSide>
    </EventCard>
  )
}

export default EventContainer
