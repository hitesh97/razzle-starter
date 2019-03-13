import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import translate from '@redux-locale/translate';
import Container from '@components/container';
import PageTitle from '@components/page-title';

import styles from './Home.module.scss';

function Home({ t }) {
  return (
    <Container className={ styles.wrapper }>
      <PageTitle title={ t('hello-world') } />
    </Container>
  );
}

Home.propTypes = {
  t: PropTypes.func.isRequired,
};

const enhance = compose(
  translate('pages.home'),
);

export default enhance(Home);