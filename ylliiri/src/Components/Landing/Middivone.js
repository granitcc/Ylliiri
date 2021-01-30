import React from 'react'
import { FormattedMessage } from 'react-intl'

function Middivone() {
    return (
        <div className="mid">
        <p data-aos="fade-up-right" className="fmid">
        <FormattedMessage id="Middivone.fmid"/>
        </p>
        <p data-aos="fade-up-left" className="ffmid">
        <FormattedMessage id="Middivone.ffmid"/>
        </p>
      </div>
    )
}

export default Middivone
