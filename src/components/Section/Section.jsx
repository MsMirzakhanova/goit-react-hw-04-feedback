import PropTypes from 'prop-types';
import Styles from './Section.module.css'

export const Section = ({ title, children }) => (
  <section>
    <h2 className={Styles.title}>{title}</h2>
    {children}
  </section>
);

Section.propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired
};