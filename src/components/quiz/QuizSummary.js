import React, { Component, Fragment } from "react";
import { Link } from 'react-router-dom';


class QuizSummary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            score: 0,
            numberOfQuestions: 0,
            numberOfAnsweredQuestions: 0,
            correctAnswers: 0,
            wrongAnswers: 0,
            hintsUsed: 0,
            fiftyFiftyUsed: 0
        };
    }

    componentDidMount() {
        const { state } = this.props.location;
        this.setState({
            score: (state.score / state.numberOfQuestions) * 100,
            numberOfQuestions: state.numberOfQuestions,
            numberOfAnsweredQuestions: state.correctAnswers + state.wrongAnswers,
            correctAnswers: state.correctAnswers,
            wrongAnswers: state.wrongAnswers,
            hintsUsed: state.hintsUsed,
            fiftyFiftyUsed: state.fiftyFiftyUsed

        })
    }
    render() {
        const { state } = this.props.location;
        let stats, remark;
        const userScore = this.state.score;

        if (userScore <= 30) {
            remark = 'You need more practice!';
        } else if (userScore > 30 && userScore <= 50) {
            remark = 'Better luck next time';
        } else if (userScore <= 70 && userScore > 50) {
            remark = 'You can do better';
        } else if (userScore <= 71 && userScore <= 84) {
            remark = 'You did great!';
        } else {
            remark = 'You are genius!';

        }
        if (state !== undefined) {
            stats = (
                <Fragment>

                    <div className="container">

                        <h4>{remark}</h4>
                        <h2>Your Score: {this.state.score.toFixed(0)}&#37;</h2>
                        <div class="filter">
                        </div>
                        <table >
                            <tr>
                                <th>#</th>
                                <th>Total number of questions:</th>
                                <th>Number of attempted questions:</th>
                                <th>Number of Correct answers:</th>
                                <th>Number of Wrong answers:</th>
                                <th>Hints Used:</th>
                                <th>50-50 Used:</th>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>{this.state.numberOfQuestions}</td>
                                <td>{this.state.numberOfAnsweredQuestions}</td>
                                <td>{this.state.correctAnswers}</td>
                                <td>{this.state.wrongAnswers}</td>
                                <td>{this.state.hintsUsed}</td>
                                <td>{this.state.fiftyFiftyUsed}</td>
                            </tr>
                        </table>
                    </div>
                    <section className="nav">
                        <ul>
                            <li>
                                <Link to="/">Back to Home</Link>
                            </li>
                            <li>
                                <Link to="/play/quiz">Play Again</Link>
                            </li>
                        </ul>
                    </section>
                </Fragment>
            );
        } else {
            stats = (
                <section className="nav">
                    <h1 className="no-stats">Nothing available</h1>
                    <ul>
                        <li>
                            <Link to="/">Back to Home</Link>
                        </li>
                        <li>
                            <Link to="/play/quiz">Take a Quiz</Link>
                        </li>
                    </ul>
                </section>

            );
        }
        return (
            <Fragment>
                {stats}
            </Fragment>

        );
    }
}

export default QuizSummary;