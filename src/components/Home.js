import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
const Home = () =>
    (
        <Fragment>
            <Helmet>
                <title>Quiz App-Home</title>
            </Helmet>

            <div id="home">
                <section>

                    <h1>Test App</h1>

                    <div className="play-button-container">
                        <ul>
                            <li>
                                <Link className="play-button" to="/play/quiz">Play</Link>
                            </li>
                        </ul>
                    </div>

                </section>
            </div>


        </Fragment>


    );

export default Home;