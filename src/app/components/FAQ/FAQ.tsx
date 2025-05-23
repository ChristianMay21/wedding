import React, { useState } from 'react'
import styles from './FAQ.module.scss'
import { getPayload } from 'payload'
import config from '@/payload.config'
import { RichText } from '@payloadcms/richtext-lexical/react'
import Section from '../Section/Section'
import type { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'

interface FAQProps {
  group: string
  heading: string
}

const FAQ: React.FC<FAQProps> = async (props) => {
  const payload = await getPayload({ config })
  const faqs = (
    await payload.find({
      collection: 'faq',
      pagination: false,
      sort: 'order',
      where: {
        group: {
          equals: props.group,
        },
      },
    })
  ).docs
  return (
    <Section headingText={props.heading} headingId={props.group}>
      <dl className={styles.questionList}>
        {faqs.map((faq) => (
          <div className={styles.questionItem} key={faq.id}>
            <dt className={styles.question}>{faq.question}</dt>
            <dd className={styles.answer}>
              <RichText data={faq.questionText} />
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  )
}

export default FAQ
