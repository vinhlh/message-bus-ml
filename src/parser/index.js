const LINE_SEPARATOR = '\n'
const TOPIC_QUEUE_SEPARATOR = '>'
const TOPIC_SEPARATOR = ','

const parse = (lines) => {
  const queues = []
  const topics = []
  const edges = []
  lines.split(LINE_SEPARATOR).forEach((line) => {
    if (line.trim() === '') {
      return
    }

    const [rawQueue, rawTopics] = line.split(TOPIC_QUEUE_SEPARATOR)
    const queue = rawQueue.trim()
    queues.push({
      data: {
        id: queue,
        class: 'queue',
        parent: 'SES',
      },
    })

    rawTopics
      .split(TOPIC_SEPARATOR)
      .forEach((topic) => {
        topic = topic.trim()
        topics.push({
          data: {
            id: topic,
            class: 'topic',
            parent: 'SNS',
          },
        })

        edges.push({
          data: {
            id: `${queue} to ${topic}`,
            source: topic,
            target: queue,
          },
        })
      })
  })

  return [
    { data: { class: 'sns', id: 'SNS' } },
    { data: { class: 'ses', id: 'SES' } },
    ...queues,
    ...topics,
    ...edges,
  ]
}

export { parse }
