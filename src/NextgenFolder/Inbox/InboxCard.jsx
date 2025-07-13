import React from 'react'
import './inboxstyle.css'
export default function InboxCard(props) {
  return (
    <tr>
      <td style={{ fontWeight: '500', fontSize: '15px', width: '210px', padding: '5px', overflow: 'hidden' }}>{props.name}</td>
      <td style={{ fontWeight: '500', fontSize: '15px', width: '210px', padding: '5px', overflow: 'hidden' }} >{props.mobile}</td>
      <td style={{ fontWeight: '500', fontSize: '15px', width: '210px', padding: '5px', overflow: 'hidden' }} >{props.email}</td>
      <td style={{ fontWeight: '500', fontSize: '15px', width: '210px', padding: '5px', overflow: 'hidden' }} >{props.company}</td>
      <td style={{ fontWeight: '500', fontSize: '15px', width: '210px', padding: '5px', overflow: 'hidden' }} >{props.message}</td>
    </tr>
  )
}
