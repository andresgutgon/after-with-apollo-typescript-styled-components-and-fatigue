import * as React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { Link } from 'react-router-dom';

import './Home.css';

const QUERY = gql`
  query AboutFilm($id: ID!) {
    film(filmID: $id) {
      id
      title
      director
    }
  }
`

interface Props {
  match: {
    params: { id: string }
  }
}

const About = (props: Props) => {
  const id = Number(props.match.params.id)
  return (
    <Query query={QUERY} variables={{ id }}>
      {({ loading, data }) => {

        if (loading) return <div>Loading Film...</div>

        const { film } = data
        return (
          <React.Fragment>
            <div>
              {film.title} has be directed by {film.director}
            </div>
            <Link to="/">Home -></Link>
          </React.Fragment>
        )
      }}
    </Query>
  )
}

export default About
