import { NextRequest, NextResponse } from 'next/server'
import { getPayload } from 'payload'
import config from '@/payload.config'

export async function GET(request: NextRequest) {
  const payload = await getPayload({ config })
  const timelineEvents = (
    await payload.find({
      collection: 'timelineEvent',
      pagination: false,
      sort: 'Year',
    })
  ).docs
  const ChronoItems = timelineEvents.map((timelineEvent) => {
    if (
      typeof timelineEvent.image === 'number' ||
      timelineEvent.image === null ||
      timelineEvent.image === undefined
    ) {
      return
    }
    const returnVar = {
      title: timelineEvent.Year,
      cardTitle: '',
      cardSubtitle: '',
      cardDetailedText: timelineEvent.plainText,
      media: {
        name: timelineEvent.Year,
        type: 'IMAGE',
        source: {
          url: timelineEvent.image.url,
        },
      },
    }
    return returnVar
  })

  try {
    return NextResponse.json(ChronoItems)
  } catch (error) {
    console.error('Error fetching tasks for user:', error)
    return NextResponse.json({ error: 'Failed to fetch tasks' }, { status: 500 })
  }
}
