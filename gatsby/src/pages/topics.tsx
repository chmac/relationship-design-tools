import * as React from 'react'
import { graphql } from 'gatsby'
import _ from 'lodash'

import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'

interface TopicsProps {
  data: {
    allJsonJson: {
      edges: [
        {
          node: {
            bigTopics: string[]
          }
        }
      ]
    }
  }
}

const Topics: React.SFC<TopicsProps> = props => {
  const topics = props.data.allJsonJson.edges[0].node.bigTopics

  const getRandomIndex = () => _.random(0, topics.length)

  const [index, setIndex] = React.useState(getRandomIndex())

  return (
    <IndexLayout>
      <Page>
        <Container>
          <h1>Big topics</h1>
          <p>Some big topics that you might consider discussing.</p>
          <p
            style={{
              fontSize: '3em',
              textAlign: 'center',
              padding: '80px',
              marginTop: '60px',
              marginBottom: '60px',
              backgroundColor: 'lightgrey'
            }}
          >
            {topics[index]}
          </p>
          <p style={{ textAlign: 'center', fontSize: '2em' }}>
            <button
              onClick={() => {
                const randomIndex = getRandomIndex()
                setIndex(randomIndex === index ? index + 1 : randomIndex)
              }}
              style={{
                padding: '0.4em'
              }}
            >
              Next random topic
            </button>
          </p>
        </Container>
      </Page>
    </IndexLayout>
  )
}

export default Topics

export const query = graphql`
  query TopicsQuery {
    allJsonJson {
      edges {
        node {
          bigTopics
        }
      }
    }
  }
`
