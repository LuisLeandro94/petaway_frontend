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
        <EventSender>
          <Translate id='FROM' />
        </EventSender>
        <DetailsWrapper>
          <EventName>
            {event?.user?.userData?.firstName}{' '}
            {event?.user?.userData?.lastName}
          </EventName>
          <EventPet>
            <ItalicSpan>
              <Translate id='PET' />:
            </ItalicSpan>
            {'  '}
            {event?.pet?.type}
          </EventPet>
          <EventService>
            <ItalicSpan>
              <Translate id='SERVICE' />:
            </ItalicSpan>
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
                <Translate id='REJECT' />
              </RejectButton>
              <AcceptButton onClick={() => acceptEvent(event?.id)}>
                <Translate id='ACCEPT' />
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

EventContainer.propTypes = {
  event: PropTypes.object.isRequired,
  acceptEvent: PropTypes.func.isRequired,
  rejectEvent: PropTypes.func.isRequired,
  incoming: PropTypes.array.isRequired
}

export default EventContainer
