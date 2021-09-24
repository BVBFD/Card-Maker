import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from './maker.module.css';

const Maker = ({ authService }) => {
    const [cards, setCards] = useState([
        {
            id: `1`,
            name: 'Mr.Lee1',
            company: 'Samsung',
            theme: 'dark',
            title: 'Software Engineer',
            email: 'lsevina126@gmail.com',
            message: 'go for it',
            fileName: 'Lee Seong Eun',
            fileURL: null
        },
        {
            id: `2`,
            name: 'Mr.Lee2',
            company: 'Samsung',
            theme: 'light',
            title: 'Software Engineer',
            email: 'lsevina126@gmail.com',
            message: 'go for it',
            fileName: 'Lee Seong Eun',
            fileURL: 'ellie.png'
        },
        {
            id: `3`,
            name: 'Mr.Lee3',
            company: 'Samsung',
            theme: 'colorful',
            title: 'Software Engineer',
            email: 'lsevina126@gmail.com',
            message: 'go for it',
            fileName: 'Lee Seong Eun',
            fileURL: null
        }
    ]); 
    const history = useHistory();
    const onLogout = () => {
        authService.logout();
    };

    useEffect(() => {
        authService.onAuthChange(user => {
            if(!user) {
                history.push('/');
            }
        });
    });

    return (
        <section className={styles.maker}>
            <Header onLogout={onLogout}/>
                <div className={styles.container}>
                    <Editor cards = {cards}/>
                    <Preview cards = {cards}/>
                </div>
            <Footer/>
        </section>
    );
};

export default Maker;