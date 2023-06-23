import React from 'react'

export default function StatusPill({status}) {
    const statusColor = {
        "not started": "secondary",
        "in progress": "warning",
        "completed": "success",
    }
  return (
    <span class={`badge text-white py-1 px-2 bg-${statusColor[status]}`}>{status}</span>
  )
}
