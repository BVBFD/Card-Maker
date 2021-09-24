import React from 'react';
import CardEditForm from '../card_edit_form/card_edit_form';
import styles from './preview.module.css';

const Preview = ({cards}) => {
    return (
        <section className={styles.preview}>
            <h1 className={styles.title}>Card Preview</h1>
            {
                cards.map(card => {
                    return (
                        <CardEditForm card={card}/>
                    )
                })
            }
        </section>
    );
}

export default Preview;