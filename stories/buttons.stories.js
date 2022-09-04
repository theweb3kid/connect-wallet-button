import React from "react";
import { storiesOf } from '@storybook/react'

import { Wallet } from "../components/Button";

const stories = storiesOf('App Test', module)

stories.add('App', () => {
    return (<Wallet />)
})