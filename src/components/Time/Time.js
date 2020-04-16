import React, { Fragment } from "react"
import distanceInWordsToNow from "date-fns/distance_in_words_to_now"
import enLocale from "date-fns/locale/en"

const Time = ({ date }) => (
  <Fragment>
    {distanceInWordsToNow(date, { addSuffix: true, locale: enLocale })}
  </Fragment>
)

/* Time.propTypes = {
  date: PropTypes.string,
} */

export default Time
